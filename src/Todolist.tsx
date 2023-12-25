import React, {ChangeEvent, ChangeEventHandler, KeyboardEvent, useState} from 'react';
import {FilterValueType} from "./App";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
   /* tasks2: Array<TaskType>*/
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValueType) => void
    addTask: (title: string) => void
    deleteAllTask: (id: string) => void
    // need refactor
    changeTaskStatus: (id: string, isDone: boolean) => void
}


export function Todolist(props: PropsType) {
    let [title, setTitle] = useState("")
    const addTask = () => {
        props.addTask(title);
        setTitle("");
    }
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            addTask()
        }
    }

    const onAllClickHandler = () => {
        props.changeFilter("all")
    }
    const onActiveClickHandler = () => {
        props.changeFilter("active")
    }
    const onCompletedClickHandler = () => {
        props.changeFilter("completed")
    }
    const onDeleteClickHandler = () => {
        props.deleteAllTask("none")
    }


    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                /*add "Press Enter and add Tasks"*/
                   onKeyDown={onKeyDownHandler}/>
            {/* add addTask for this button*/}
            <button onClick={addTask}>+
            </button>
        </div>
        <ul>
            <li>
                {props.tasks.map((t) => {
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked
                        props.changeTaskStatus(t.id, newIsDoneValue)
                    }
                    return (
                        <li key={t.id}>
                            <input type="checkbox" checked={t.isDone}
                                              onChange={onChangeHandler}/>
                            <span>{t.title}</span>
                            <button onClick={() => {props.removeTask(t.id)}}>✖️</button>
                        </li>
                    )
                })}
            </li>

        </ul>
        <div>
            <div>
                <button onClick={onDeleteClickHandler}>Delete all Tasks</button>
            </div>
            <button onClick={onAllClickHandler}>All
            </button>
            <button onClick={onActiveClickHandler}>Active
            </button>
            <button onClick={onCompletedClickHandler}>Completed
            </button>


        </div>
    </div>
}
