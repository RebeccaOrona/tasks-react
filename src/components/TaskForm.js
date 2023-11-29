import React, { useState } from "react";
import '../css/TaskForm.css'
import { v4 as uuid} from 'uuid'

export const TaskForm = (props) => {

    const [input, setInput] = useState('');

    const handleEvent = e => {
        setInput(e.target.value);
    }

    const handleSend = (e) => {
        e.preventDefault();
        const newTask = {
            id: uuid(),
            text: input,
            completed: false
        };
        console.log(newTask)
        props.onSubmit(newTask);
    }

    return (
        <form 
            className="task-form-container"
            onSubmit={handleSend}
        >
            <input
                className="task-input"
                type="text"
                placeholder="Type a task..."
                name='text'
                onChange={handleEvent}
            />
            <button className="task-button">
                Add task
            </button>
        </form>
    )
}