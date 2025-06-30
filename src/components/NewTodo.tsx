import { useRef } from 'react';
import classes from './NewTodo.module.css'

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();


const enteredText = todoTextInputRef.current!.value;

if (enteredText.trim() === '') {
    //throw an error
    return;
}


props.onAddTodo(enteredText);


    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor='text'>Text
            </label>
            <input
            type="text" id="text" ref={todoTextInputRef}/>
                <button>Submit</button>

        </form>
    )
}

export default NewTodo;