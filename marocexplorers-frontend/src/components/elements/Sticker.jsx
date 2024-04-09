import React from 'react'

const Sticker = ({label}) => {
    return (
        <p className="flex items-center gap-2 font-sans text-base font-normal leading-relaxed  antialiased p-2 px-4 bg-jaune rounded-lg border-2 border-black text-black font-semibold">
            {label}
        </p>
    )
}

export default Sticker