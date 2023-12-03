import React from 'react';
import {FilterValueType} from "./App";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: number) => void
    changeFilter: (value: FilterValueType) => void
}

export function Todolist(props: PropsType) {
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            <li>


                {props.tasks.map((t) => {
                    return (
                        <li key={t.id}><input type="checkbox" checked={t.isDone}/><span>{t.title}</span>
                            <button onClick={() => {props.removeTask(t.id)}}>✖️</button>
                        </li>
                    )
                })}
            </li>

        </ul>
        <div>
            <button onClick={() => {props.changeFilter("all")}}>All</button>
            <button onClick={() => {props.changeFilter("active")}}>Active</button>
            <button onClick={() => {props.changeFilter("completed")}}>Completed</button>
        </div>
    </div>
}
