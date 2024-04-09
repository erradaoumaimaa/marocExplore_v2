/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { sentenceCase } from 'src/utils/case'
import Input from './Input';

const MultiInput = ({
    type = 'text',
    name,
    inputs,
    placeholder,
    elements,
    addDestinations,
    deleteDestination,
    error
}) => {
    const [destination, setDestination] = useState({
        name: '',
        lodging: ''
    })

    const handleChange = (e) => {
        const value = e.target.value
        if(value.trim()) {
            setDestination({
                ...destination,
                [e.target.name]: value
            })
        }
        
    }
    const handleKeyDown = (e) => {
        e.stopPropagation()
        if(e.key === 'Enter'){
            addDestinations(destination)
        }
        

    }

    const handleDelete = (e) => {
        const condition = e.nativeEvent.explicitOriginalTarget === e.target
        if(condition) {
            deleteDestination(e.target.getAttribute('data-id'))
        }
    }

    // const createDiv = (label, index) => {
    //     const element = React.createElement('button', {key: index, className: 'px-4 py-2 bg-jaune rounded-lg', onClick: handleDelete}, label)
    //     return element
    // }

    return (
        <div className='my-3'>
            <label className="font-semibold block my-3 text-md text-white">{sentenceCase(name)}</label>
            <div className='p-4 border-jaune border-2 border-dashed rounded' onKeyDown={handleKeyDown}>
                <div className='flex items-center gap-4'>
                    {inputs.map((input, i) => (
                        <Input 
                            key={i}
                            className="border rounded w-full px-3 py-2 mb-3 bg-black placeholder-white-500 text-white border-jaune"
                            type='text'
                            name={input}
                            id={input}
                            onChange={handleChange}
                        />
                    ))}
                </div>
                
               
               <div className='flex item-center flex-wrap gap-4'>
                    {elements.map((el, i) => {
                        return <button key={i} data-id={i} className='px-4 py-2 bg-jaune rounded-lg' onClick={handleDelete}>{el.name}</button>
                    })}
                </div>
            </div>
            <p className='text-red-500 tex-xs my-2'>{error}</p>
        </div>
    )
}

export default MultiInput