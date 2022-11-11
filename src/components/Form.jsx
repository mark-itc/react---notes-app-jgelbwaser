import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './Form.css'

function Form({ onSubmit }) {

    const [inputTxtValue, setTxtInputValue] = useState('');
    const [inputTitleValue, setTitleInputValue] = useState('');


    const handleSubmit = (e) => {
        
        e.preventDefault();
        if (inputTxtValue) {
            onSubmit({text:inputTxtValue, title:inputTitleValue});
            setTxtInputValue('');
            setTitleInputValue('')
        }
    }

    const onTxtInputChange = (e) => {
        setTxtInputValue(e.currentTarget.value);
    }

    const onTitleInputChange = (e) => {
        setTitleInputValue(e.currentTarget.value);

    }

    return (
        <form className="form" >
            <input type="text"
                value ={inputTitleValue}
                className='title-input input'
                placeholder = 'Title'
                onInput = {onTitleInputChange}           
            />
            <textarea
                value ={inputTxtValue}
                className='text-input input'
                onInput={onTxtInputChange}
                placeholder="your note"
                name="note-input" rows="4" cols="50">
            </textarea>
            <Button type='submit' onClick={handleSubmit}>Add note</Button>
        </form>
    )
}

export default Form;