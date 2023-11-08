import React, { useId } from 'react'

function Select({options,label,className,...props},ref) {
    const id = useId()
  return (
    <div>
        {label && <label htmlFor={id} className=' font-bold md:text-2xl'>{label}</label>}
        <select id={id} ref={ref} {...props} className={`${className}`} >
           {
             options?.map((option)=>(
                <option key={option} value={option}>
                    {option}
                </option>
             ))
           }
        </select>
    </div>
  )
}

export default React.forwardRef(Select)