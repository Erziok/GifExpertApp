import React, { useState } from 'react'
import PropTypes from 'prop-types';
import '../index.css';

export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategories( cats => [inputValue, ...cats ]);
            setInputValue('');
        } 

        
    }

    return (

        <form onSubmit={handleSubmit}>
            <input 
                className="barra-texto"
                type="text"
                value= {inputValue}
                onChange= { handleInputChange }
            />
        </form>

    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}