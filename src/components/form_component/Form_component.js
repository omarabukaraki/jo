import React from 'react'

const FormComponent = ({label,placeholder,type,register,data}) => {
    return (
        <div>
            <h3 className='font-bold my-2 '>{label}</h3>
            <input {...register} type={type} className='w-full h-10 border-2 rounded-md mb-2 pl-2 pr-2' placeholder={placeholder} />
        </div>
    )
}

export default FormComponent
