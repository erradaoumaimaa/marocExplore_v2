import React from 'react'
import { sentenceCase } from 'src/utils/case'

const Input = ({
    type = 'text',
    value,
    onChange,
    name,
    placeholder,
    error
}) => {
    return (
        <div className='my-3'>
            <label className="font-semibold block mb-3 text-md text-white">{sentenceCase(name)}</label>
            <input
                className="border rounded w-full px-3 py-2 mb-3 bg-black placeholder-white-500 text-white border-jaune"
                type={type}
                value={value}
                onChange={onChange}
                name={name}
                id={name}
                placeholder={placeholder}
            />
            <p className='text-red-500 tex-xs'>{error}</p>
        </div>
    )
}

export default Input