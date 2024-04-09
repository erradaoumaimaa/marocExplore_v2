import { useEffect, useState } from 'react'
import Input from 'src/components/elements/Input'
import MultiInput from 'src/components/elements/MultiInput'
import maroc from 'src/assets/maroc.jpg'
import SelectInput from 'src/components/elements/SelectInput'
import { createItinerary, updateItinerary } from 'src/api/itineraryService'
import FileInput from 'src/components/elements/FileInput'
import { redirect } from "react-router-dom";
import { useAuth } from 'src/providers/AuthProvider'

const AddItinerary = ({
    id,
    title,
    category,
    duration,
    image,
    destinations = [],
    update = false
}) => {
    const [message, setMessage] = useState({
        body: null,
        success: true
    })
    const [errors, setErrors] = useState({})
    const [formData, setFromData] = useState({
        title: title ?? '',
        category: category ?? '',
        duration: duration ?? '',
        image: null,
        destinations: []
    })

    useEffect(() => {
        setFromData({
            ...formData,
            title: title,
            category: category,
            duration: duration,
            destinations: destinations
        })
    }, [title])
    

    // console.log('formdata', formData)

    const { setToken } = useAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors({})
        try {
            let response

            if(update) {
                response = await updateItinerary(id, formData)
            } else {
                response = await createItinerary(formData)
            }

            console.log(response);
            // alert(1)
            setMessage({
                ...message,
                body: response.message,
                success: true
            })
        } catch(error) {
            const response = error.response
            if(response.status === 401) {
                setToken(null)
                window.location.replace("/login");
            }
            if (response.status === 422) {
                setErrors(response.data.data)
            }
            setMessage({
                ...message,
                body: response.data.message,
                success: false,
            })
        }

        setTimeout(() => {
            setMessage({
                ...message,
                body: null,
            })
        }, 3000)
    }

    console.log(message)


    const handleChange = (e) => {
        setFromData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleFile = (file) => {
        setFromData({
            ...formData,
            image: file
        })
    }

    const setDestinations = (value) => {
        setFromData({
            ...formData,
            destinations: [
                ...formData.destinations,
                value
            ]
        })
    }

    const handleKeyDown = (e) => {
        const value = e.target.value
        if(e.key === 'Enter' && value.trim()){

            setDestinations(e.target.value)

            e.target.value = ''
        }
    }

    const deleteDestination = (value) => {
        const destinations = formData.destinations.filter((destination, i) => {
            return i != value 
        })

        setFromData({
            ...formData,
            destinations: destinations
        })
    }

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center"style={{
            backgroundImage: `url(${maroc})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}>
            {message.body && (
                <div className={`z-20 fixed top-0 translate-y-[5%] py-4 px-8 ${message.success ? 'bg-green-500' : 'bg-red-500'} text-xl`}>{message.body}</div>
            )}
            <div className="absolute bg-black opacity-30 inset-0 z-0"></div>
            <div className="max-w-[50%] w-full space-y-8 p-10 rounded-xl shadow-lg z-10 bg-white">
                <div className="grid gap-8 grid-cols-1">
                    <div className="flex flex-col ">
                        <div className="flex flex-col sm:flex-row items-center bg-black p-6 rounded-lg">
                            <h1 className="block w-full text-center text-2xl font-bold text-white"> Add itenirary 🚀 </h1>
                            
                        </div>
                            <div className='grid grid-cols-2 items-start gap-4'>
                                <div className='bg-black p-4 rounded-lg my-3'>
                                   <Input
                                        value={formData.title}
                                        error={errors.title}
                                        name="title"
                                        onChange={handleChange}
                                    />
                                    <SelectInput name="category" defaultValue="beach" error={errors.category} onChange={handleChange}>
                                        <option value="beach">Beach</option>
                                        <option value="river">River</option>
                                        <option value="monument">Monument</option>
                                    </SelectInput>
                                    <Input
                                        value={formData.duration}
                                        error={errors.duration}
                                        name="duration"
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className='bg-black p-4 rounded-lg my-3'>

                                    <FileInput
                                        imageURL={image}
                                        error={errors.image}
                                        name="image"
                                        onChange={handleFile}
                                    /> 
                                    <MultiInput
                                        error={errors.destinations}
                                        name="destinations"
                                        inputs={['name', 'lodging']}
                                        onKeyDown={handleKeyDown}
                                        elements={formData.destinations}
                                        addDestinations={setDestinations}
                                        deleteDestination={deleteDestination}
                                    />
                                </div>
                                
                                
                                
                                <button 
                                    onClick={handleSubmit}
                                    className="col-span-2 text-lg font-semibold w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black bg-orange"
                                >
                                    Submit
                                </button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddItinerary