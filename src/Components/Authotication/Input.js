import React from 'react';

const Input = ({idName, type, value, className, placeholder, onChange, onBlur}) =>{
    return(
        <input
            id={idName}
            name={idName}
            type= {type}
            value={value}
            className={className}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            // onBlur={onSubmit}
        />
    )
};

export default Input;

















