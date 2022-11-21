import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './Form.css'

function Form({ onSubmit, noteToEdit, id }) {

    const [inputTitleValue, setTitleInputValue] = useState(noteToEdit ? noteToEdit.title : '');
    const [inputTxtValue, setTxtInputValue] = useState(noteToEdit ? noteToEdit.text : '');


    const handleSubmit = (e) => {

        e.preventDefault();
        if (inputTxtValue) {
            onSubmit({ text: inputTxtValue, title: inputTitleValue, id:id });
            setTxtInputValue('');
            setTitleInputValue('')
        }
    }

    const onTxtInputChange = (e) => {
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight}px`;
        setTxtInputValue(e.currentTarget.value);
    }

    const onTitleInputChange = (e) => {
        setTitleInputValue(e.currentTarget.value);
    }

  


    return (
        <form className="form shadow" >
            <input type="text"
                value={inputTitleValue}
                className='title-input h5 input'
                placeholder='Title'
                onInput={onTitleInputChange}
            />
            <textarea
                value={inputTxtValue}
                className='text-input input'
                onInput={onTxtInputChange}
                placeholder="your note"
                name="note-input"
                rows={4}
                cols="50"
                required>
            </textarea>
            <Button type='submit' onClick={handleSubmit}>
                {noteToEdit ? 'Update Note' : 'Add note'}
            </Button>
        </form>
    )
}

export default Form;