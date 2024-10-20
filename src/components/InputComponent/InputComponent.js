import React from 'react';
import './InputComponent.css';

const InputComponent = ({ inputValue, setInputValue }) => {
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <input className='input' type="text" value={inputValue} onChange={handleChange} />
        </div>
    );
};

export default InputComponent;