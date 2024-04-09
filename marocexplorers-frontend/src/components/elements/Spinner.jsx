import React, {useState} from 'react'

const Spinner = ({ children }) => {
    const [loading, setLoading] = useState(true)

    const load = () => {
      setTimeout(() => {
        setLoading(false)
      }, 600)
    }
    load()

    return (
        <>
            {loading ? (
                <div className='spinner-container'>
                    <div className='spinner'></div>
                </div>
            ) : (
                <>
                    { children }
                </>
            )}
        </>
    )
}

export default Spinner