import { useEffect, useState } from "react"
import AddItinerary from "./AddItinerary"
import { useParams } from 'react-router-dom'
import { fetchItinerary } from "src/api/itineraryService"


const EditItinerary = () => {
    const { id } = useParams()
    const [itinerary, setItinerary] = useState(null)

    useEffect(() => {
        const getItinerary = async (id) => {
            try {
                const response = await fetchItinerary(id)
                setItinerary(response.itinerary)
            } catch(error) {
                console.log(error)
            }
        }

        getItinerary(id)
    }, [])


    return <AddItinerary update={true} {...itinerary} />
}

export default EditItinerary