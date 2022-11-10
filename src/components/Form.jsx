import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function Form({ onSubmit }) {

    const [inputValue, setInputValue] = useState('');


    const handleSubmit = (e) => {
        
        e.preventDefault();
        if (inputValue) {
            onSubmit(inputValue);
            setInputValue('');
        }
    }

    const onInputChange = (e) => {
        setInputValue(e.currentTarget.value);

    }

    return (
        <form className="form" >

            <textarea
                value ={inputValue}
                className='note-input'
                onInput={onInputChange}
                placeholder="your note"
                name="note-input" rows="4" cols="50">
            </textarea>
            <Button type='submit' onClick={handleSubmit}>Add note</Button>
        </form>
    )
}

export default Form;