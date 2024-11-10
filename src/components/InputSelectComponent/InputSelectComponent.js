import React from 'react';
import './InputSelectComponent.css';

const InputSelectComponent = ({ inputValue, setInputValue, listOption }) => {
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <select 
                value={inputValue} 
                onChange={handleChange}
                className='input-select'    
            >
                <option value=""></option>
                {listOption.map((item) => (
                    <option key={item.id} value={item.id}>
                        {item.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default InputSelectComponent;