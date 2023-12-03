import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type FilterValueType = "all" | "active" | "completed"

function App() {
    let [tasks1, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Rest API", isDone: false},
        {id: 5, title: "GraphQL", isDone: false}
    ]);
    let [filter, setFilter] = useState<FilterValueType>("all")

    function removeTask(id: number) {
        tasks1 = tasks1.filter(t => t.id !== id)
        setTasks(tasks1)
    }
    function changeFilter(value: FilterValueType) {
        setFilter(value);
    }

    let tasksForTodolist = tasks1;

    if (filter === "active") {
        tasksForTodolist = tasks1.filter(task => task.isDone === false)
    }
    if (filter === "completed") {
        tasksForTodolist = tasks1.filter(task => task.isDone === true)
    }


    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}/>

        </div>
    );
}

export default App;