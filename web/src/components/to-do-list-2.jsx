import React, { useEffect, useState } from "react";
import ListItemTwo from "./list-item-2";
import data from "../data/tasks.json";

function ToDoListTwo() {
  const [tasks, setTasks] = useState(null);
  const [input, setInput] = useState("")

  useEffect(() => {
    setTasks([...data]);
  }, []);

  function handleOnCompleted(title) {
    setTasks(
      [...tasks].map((object) => {
        if (object.title == title) object.completed = !object.completed;
        console.log(object.completed);

        return object;
      })
    );
  }

  function handleOnDelete(title) {
    setTasks([...tasks].filter((task) => task.title != title));
  }

  function handleOnChange(event){

    const { value } = event.target

    setInput(value)

  }

  function handleOnCreate(){

    // console.log(input);
    
    if(!input.trim()) return

    setTasks([
      ...tasks,
      {
        title: input,
        completed: false        
      }
    ])
    setInput("")

  }

  // console.log("this is tasks: ", tasks);
  

  return (
    <div className=" d-flex flex-column gap-3 ">
      <div className="form d-flex gap-2"> 
        <input 
          type="text" 
          name="title"
          value={input}
          onChange={handleOnChange}

        />
        <div 
          className="badge bg-primary text-wrap d-flex justify-content-center align-items-center" 
          role="button" 
          style={{width: "6rem"}}
          onClick={handleOnCreate}
        >
          Add task
        </div>
      </div>
      <ul className="list-group gap-2">
        {tasks?.map((task) => (
          <ListItemTwo
            key={task.title}
            {...task}
            onCompleted={() => handleOnCompleted(task.title)}
            onDelete={handleOnDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoListTwo;
