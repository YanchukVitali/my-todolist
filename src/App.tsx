import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";
import {v1} from "uuid";

export type FilterValueType = "all" | "active" | "completed" | "none" | "reload"

function App() {
    let [tasks1, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Rest API", isDone: false},
        {id: v1(), title: "GraphQL", isDone: false}
    ]);
///Primer!! tasks2!!
    /*   const [tasks2, setTasks2] = useState<Array<TaskType>>([
           {id: v1(), title: "Kia", isDone: true},
           {id: v1(), title: "BMW", isDone: true},
           {id: v1(), title: "Mercedes", isDone: false},
           {id: v1(), title: "GMC", isDone: true},
           {id: v1(), title: "Toyota", isDone: true},
       ]);*/


    let [filterValue, setFilter] = useState<FilterValueType>("all")


    function addTask(title: string) {
        let task = {id: v1(), title: title, isDone: false};
        let newTask = [task, ...tasks1];
        setTasks(newTask)
    }

    function changeTaskStatus(id: string, isDone: boolean) {
        let task = tasks1.find(t => t.id === id)
        if (task) {
            task.isDone = isDone;
            setTasks([...tasks1])
        }
    }

    function removeTask(id: string) {
        setTasks(tasks1.filter(t => t.id !== id))
        //<<==I can use top cod or under ==>>
        /* tasks1 = tasks1.filter(t => t.id !== id)
         setTasks(tasks1)*/
    }

    function deleteAllTask(id: string) {
        tasks1 = tasks1.filter(t => t.id == id)
        setTasks(tasks1)
    }

    function changeFilter(value: FilterValueType) {
        setFilter(value);
    }

    /*  let newTasksForTodolist = tasks2;*/

    // 1.or this code ======>>
    const tasksForTodolist = (tasks1: Array<TaskType>, filterValue: FilterValueType): Array<TaskType> => {
        return filterValue === "active"
            ? tasks1.filter(t => t.isDone === false)
            : filterValue === "completed"
                ? tasks1.filter(t => t.isDone === true)
                : tasks1
    }
    const filteredTasks = tasksForTodolist(tasks1, filterValue)
    //1. or this code ===>>>

    /*let     tasksForTodolist = tasks1;
    if (filter === "active") {
        tasksForTodolist = tasks1.filter(task => task.isDone === false)
    }
    if (filter === "completed") {
        tasksForTodolist = tasks1.filter(task => task.isDone === true)
    }*/

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={filteredTasks}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
                      deleteAllTask={deleteAllTask}
                      changeTaskStatus={changeTaskStatus}
            />


        </div>
    );
}

export default App;