import React, { useState } from 'react';
import maroc from 'src/assets/maroc.jpg';
import { addList } from 'src/api/itineraryService';
import { Link } from 'react-router-dom';

const Card = ({
    id,
    image,
    category,
    title,
    destinations,
    duration,
    dashboard = false,
    handleDelete
}) => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [svgColor, setSvgColor] = useState('#000');

    const addToFavorites = async () => {
        try {
            await addList(id);
            console.log('Itinerary added to favorites');
            setShowSuccessMessage(true);
            setTimeout(() => setShowSuccessMessage(false), 3000);
            setSvgColor('#FFD200'); 
        } catch (error) {
            if (error.response && error.response.status === 401) {
                console.error('Unauthorized: User not authenticated');
            } else {
                console.error('Error adding itinerary to favorites:', error);
            }
        }
    };
    
    return (
        <div className="relative space-y-4 mx-2 w-72 xl:mb-0 mb-8 z-10">
            {showSuccessMessage && (
                <div className="absolute top-0 right-0 bg-green-200 text-green-800 px-4 py-2 rounded">
                    Itinerary added to favorites successfully!
                </div>
            )}

            <div className='bg-white border-2 border-black rounded'>
                <img alt="" src={`http://localhost:8000/storage/images/${image}`} tabindex="0" className="focus:outline-none w-full h-44 rounded-t" />

                <div className="flex items-center justify-between px-4 pt-4">
                    <div className="py-1.5 px-4 rounded-full bg-rouge">
                        <p tabindex="0" className="focus:outline-none text-xs font-bold text-white">{category}</p>
                    </div>
                    {!dashboard && (
                        <div onClick={addToFavorites}>
                            <svg className="w-6 h-6 border-rouge cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="currentColor" style={{ color: svgColor }}>
                                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/>
                            </svg>
                        </div>
                    )}

                </div>

                <div className="flex items-center justify-between p-4 my-2">
                    <h2 tabindex="0" className="focus:outline-none font-bold text-black text-3xl text-black text-center">{title}</h2>
                    <p className='text-xs flex flex-col items-center p-2 border-2 border-dashed border-black rounded'>
                        <span className='font-semibold'>duration</span>
                        <span>{duration} jours</span>
                    </p>
                </div>
            </div>

            <div className='bg-jaune border-2 border-white rounded p-4'>
                <ul role="list" className="text-black flex justify-between items-center">
                    {destinations.map((destination, index) => (
                        <>
                            <li key={index}>
                                <p className="flex items-center gap-2 font-sans text-base font-normal leading-relaxed antialiased p-2 px-4 bg-white rounded-lg border-2 border-black text-black font-semibold">
                                    {destination.name}
                                </p>
                            </li>
                            {index < destinations.length - 1 && (
                                <hr key={index} className="w-full border-black border-[2px] border-dashed" />
                            )}
                        </>
                    ))}
                </ul>
            </div>
            <div className="absolute w-full h-full bg-black top-0 translate-x-4 z-[-1] rounded"></div>
            {dashboard && (
                <div className="absolute px-2 top-0 left-0 translate-x-[-100%] space-y-2">
                    <Link to={`/dashboard/${id}/edit`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                        </svg>
                    </Link>
                    <button onClick={() => handleDelete(id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
};

export default Card;
