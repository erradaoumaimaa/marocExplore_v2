import { useState } from "react"
import { sentenceCase } from "src/utils/case";


const FileInput = ({
    imageURL,
    value,
    onChange,
    name,
    placeholder,
    error
}) => {
    const [image, setImage] = useState(`http://localhost:8000/storage/images/${imageURL}`)

    const handleImagePreview = (e) => {
        const [file] = e.target.files;
        setImage(URL.createObjectURL(file))
        onChange(file)
    }

    return (
        <div className="my-3">
            <label className="font-semibold block mb-3 text-md text-white">{sentenceCase(name)}</label>
            <div
                className="h-28 border-2 border-dashed border-jaune flex justify-center items-center relative rounded-lg bg-cover bg-center bg-opacity-50 bg-no-repeat"
                style={{
                    backgroundImage: `url('${image}')`
                }}
            >
                <input onChange={handleImagePreview} name={name} type="file" className="absolute w-full h-full outline-none opacity-0" />
                <p className="text-2xl rounded-full bg-jaune text-black w-8 h-8 flex items-center justify-center">+</p>
            </div>
            <p className='text-red-500 tex-xs my-2'>{error}</p>
        </div>
    )
}

export default FileInput

