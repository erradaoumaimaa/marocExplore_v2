/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import maroc from 'src/assets/maroc.jpg';
import Card from 'src/components/elements/Card';
import { getMyItineraries, deleteItinerary } from 'src/api/itineraryService';

const DashboardPage = () => {
    const [itineraries, setItineraries] = useState([]);
    const [message, setMessage] = useState({
        body: null,
        success: true
    })

    useEffect(() => {
        const fetchItineraries = async () => {
            try {
                const data = await getMyItineraries();
                setItineraries(data.itineraries);
            } catch (error) {
                console.error('Error fetching itineraries:', error);
            }
        };
        fetchItineraries();
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await deleteItinerary(id)
            const newItineraries = itineraries.filter((itinerary) => {
                return itinerary.id != id
            })
            setItineraries(newItineraries)
            setMessage({
                ...message,
                body: response.message,
                success: true
            })
        } catch(error) {
            console.log(error)
            const response = error.response

            // setTimeout(() => {
            //     setToken(null)
            //     window.location.replace("/login");
            // }, 2000)

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

    return (
        <>
            {message.body && (
                <div className={`z-20 fixed top-0 left-[50%] translate-x-[-50%] translate-y-[5%] py-4 px-8 ${message.success ? 'bg-green-500' : 'bg-red-500'} text-xl`}>{message.body}</div>
            )}

            <div className="flex justify-center items-center px-20 mt-1 " >
                <h1 className="text-center mt-10 text-4xl font-bold text-black">My itineraries</h1>
            </div>

            {/* Itinerary Section */}
            <div className="focus:outline-none m-4">
                <div className="mx-auto container py-8">
                    <div className="flex flex-wrap items-center gap-8 lg:gap-16 justify-center">
                        {itineraries.length > 0 ? (
                            itineraries.map((itinerary) => (
                                <Card handleDelete={handleDelete} dashboard={true} {...itinerary}/>
                            ))
                        ) : (
                            <p className='text-xl'>No data available.</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}                                                                                                                                                                   

export default DashboardPage