/* eslint-disable react/prop-types */
import { sentenceCase } from 'src/utils/case'

const SelectInput = ({
    type = 'text',
    onChange,
    name,
    placeholder,
    children,
    error
}) => {
    return (
        <div>
            <label className="font-semibold block my-3 text-md text-white">{sentenceCase(name)}</label>
            <select
                className="border rounded w-full px-3 py-2 mb-3 bg-black placeholder-white-500 text-white border-jaune"
                type={type}
                onChange={onChange}
                name={name}
                id={name}
                placeholder={placeholder}
            >
                {children}
            </select>
            <p className='text-red-500 tex-xs'>{error}</p>
        </div>
    )
}

export default SelectInput