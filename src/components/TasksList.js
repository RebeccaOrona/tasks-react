import React, {useState} from "react";
import { Task } from "./Task";
import '../css/TasksList.css'
import { TaskForm } from "./TaskForm";

export const TasksList = () => {

    const [tasks, setTask] = useState([])

    const addTask = (task) => {
        if(task.text.trim()){
            task.text = task.text.trim();
            const updatedTasks = [task, ...tasks]
            setTask(updatedTasks)
        }
    }

    const deleteTask = id => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTask(updatedTasks);
    }
    
    const completeTask = id => {
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                task.completed = !task.completed;
            }
            return task;
        });
        setTask(updatedTasks);
    }


    return (
        <>
        <TaskForm onSubmit={addTask}/>
        <div className="task-list-container">
            {
                tasks.map((task) => 
                    <Task 
                        key={task.id}
                        id={task.id}
                        text={task.text}
                        completed={task.completed}
                        completeTask={completeTask}
                        deleteTask={deleteTask}
                    />
                )
            }

        </div>
        </>
    )
}