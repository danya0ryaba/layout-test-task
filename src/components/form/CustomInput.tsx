import React from 'react'


export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    id: string
}

export const CustomInput: React.FC<InputProps> = ({ id, label, type }) => {

    if (!type) {
        type = 'text'
    }

    return <div className='wrapper_input'>

        <label className={'label'} htmlFor={`${id}`}>{label}</label>

        <input
            className={'input'}
            id={id}
            type={type}
        />
    </div>
}
