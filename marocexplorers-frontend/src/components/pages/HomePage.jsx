import React, { useEffect, useState } from 'react';
import maroc from 'src/assets/maroc.jpg';
import Card from 'src/components/elements/Card';
import { getItineraries } from 'src/api/itineraryService';

const HomePage = () => {
    const [itineraries, setItineraries] = useState([]);
    const [query, setQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        const fetchItineraries = async () => {
            try {
                const data = await getItineraries(query, selectedCategory);
                setItineraries(data.itineraries);
            } catch (error) {
                console.error('Error fetching itineraries:', error);
            }
        };
        fetchItineraries();
    }, [query, selectedCategory]); 

    const handleQueryChange = (e) => {
        const value = e.target.value;
        setQuery(value);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <>
            {/* HERO SECTION */}
            <div className="w-full bg-cover bg-center h-[40rem]" style={{
                backgroundImage: `url(${maroc})`
            }}>
                <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-20">
                    <div className="text-center">
                        <h1 className=" font-extrabold text-4xl xs:text-5xl md:text-6xl text-jaune">
                            <span  >Explore</span> Morocco
                </h1>
                <h2 className=" font-extrabold text-3xl xs:text-4xl md:text-5xl leading-tight mt-8 text-white" >
                    Get a <span >Better</span> and <span >Professionals</span> Design
                </h2>
                    </div>
                </div>
            </div>

          {/* SEARCH BAR */}
 {/* SEARCH BAR */}
 <div className="flex justify-center items-center px-20 mt-1">
                <div className="space-y-10">
                    <h1 className="text-center mt-10 text-4xl font-bold text-black">Find the best direction</h1>
                    <div className="flex items-center p-6 space-x-6 bg-black rounded-xl shadow-lg">
                        <div className="flex bg-white p-4 w-72 space-x-4 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input className="bg-white outline-none w-full" type="text" placeholder="destination or itinerary..." onChange={handleQueryChange} />
                        </div>
                        <div className="flex py-3 px-4 rounded-lg text-white font-semibold cursor-pointer">
        
                            <select className="bg-black outline-none text-white hover:text-white" onChange={(e) => handleCategoryChange(e.target.value)}>
                                <option value="">All categories</option>
                                <option value="beach">Beach</option>
                                <option value="river">River</option>
                                <option value="monument">Monument</option>
                            </select>
                        </div>
                        <div className="py-3 px-5 text-white font-semibold rounded-lg cursor-pointer bg-yellow-500">
                            <span>Search</span>
                        </div>
                    </div>
                </div>
            </div>


            {/* Itinerary Section */}
            <div tabindex="0" className="focus:outline-none m-4">
                <div className="mx-auto container py-8">
                    <div className="flex flex-wrap items-center gap-8 lg:gap-16 justify-center">
                        {itineraries.length > 0 ? (
                            itineraries.map((itinerary) => (
                                <Card {...itinerary}/>
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

export default HomePage