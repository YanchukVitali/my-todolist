import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {v1} from "uuid";

export type FilterValueType = "all" | "active" | "completed"

function App() {
    let [tasks1, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Rest API", isDone: false},
        {id: v1(), title: "GraphQL", isDone: false}
    ]);
    let [filter, setFilter] = useState<FilterValueType>("all")


    function addTask(title: string) {
        let task = {id: v1(), title: title, isDone: false};
        let newTask = [task, ...tasks1];
        setTasks(newTask)
    }

    function removeTask(id: string) {
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
// refactor this function--->>


    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}

            />

        </div>
    );
}

export default App;