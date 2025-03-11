import React,  { useState } from "react";
import Select from 'react-select'
import data from "../data/tasks.json";
import ListItem from "./list-item";

function ToDoList() {
  const [tasks, setTasks] = useState([...data]);
  const [newInput, setNewInput] = useState("")

  const handleDelete = (title) => {
    setTasks([...tasks].filter((task) => task.title !== title));
  };

  const handleOnCompleted = (title) => {
    /* Alternativa:
      setTasks([...tasks].map(task => task.title == title ? {...task, completed : !task.completed} : task))
    */

    const completedTask = [...tasks].map((task) => {
      if (task.title === title) {
        task.completed = !task.completed;
      }

      return task;
    });

    setTasks(completedTask);
  };

  const handleOnChange = (event) => {
    // console.log(event.target.value);
    
    setNewInput(event.target.value)
  }

  const handleCreate = () => {

    if(!newInput.trim()) return
    
    setTasks([
      ...tasks,
      {
        title: newInput,
        completed: false
      }
    ])
    setNewInput("")
  }
  
  
  return (
    <div className="d-flex flex-column gap-2">
      <div className="form d-flex gap-2">
        <input type="text" name="title" value={newInput} onChange={handleOnChange}/>
        <button className="btn btn-primary" onClick={handleCreate}><i className="fa fa-plus"></i></button>
      </div>
      
      <ul className="list-group">
        {tasks.map((task) => (
          <ListItem
            key={task.title}
            {...task}
            onDelete={() => handleDelete(task.title)}
            onCompleted={() => handleOnCompleted(task.title)}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
