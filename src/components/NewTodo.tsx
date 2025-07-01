import { useRef, useContext } from 'react';
import classes from './NewTodo.module.css'
import { TodosContext} from "../store/todos-context";

const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext);

    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();


const enteredText = todoTextInputRef.current!.value;

if (enteredText.trim() === '') {
    //throw an error
    return;
}



todosCtx.addTodo(enteredText)

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