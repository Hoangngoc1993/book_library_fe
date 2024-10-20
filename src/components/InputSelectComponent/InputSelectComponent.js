import React from 'react';
import './InputSelectComponent.css';

const InputSelectComponent = ({ inputValue, setInputValue, listOption }) => {
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const list = [
        { id: 1, name: 'Viet' },
        { id: 2, name: 'Anh' },
        { id: 3, name: 'Phap' },
        { id: 4, name: 'Duc' }
    ];

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