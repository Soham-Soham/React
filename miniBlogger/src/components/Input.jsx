import React, { useId } from 'react'

function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {

    const id = useId()

    return (
        <div className=' w-full my-1'>
            {label &&
                <label htmlFor={id} className='inline-block mb-1 pl-1 font-bold md:text-2xl'>
                    {label}
                </label>}

            <input
                type={type}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                id={id}
                ref={ref}
                {...props}
                autoComplete='true'
            />
        </div>
    )


}

export default React.forwardRef(Input)