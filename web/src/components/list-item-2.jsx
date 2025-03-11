import React from 'react'

function ListItemTwo({title, completed, onCompleted, onDelete}) {

  function handleOnCompleted(){
    onCompleted()
  }

  function handleOnDelete(title){
    onDelete(title)
  }


  

  return (
    <li className={`d-flex justify-content-between ${completed ? "text-decoration-line-through" : ""}`}>
      {title}
      <div className='d-flex gap-2'>
        <button className="btn btn-success btn-sm" onClick={handleOnCompleted}>{completed ? "completed" : "pending"}</button>
        <button className="btn btn-danger btn-sm" onClick={() => handleOnDelete(title)}>Delete</button>
      </div>
    </li>
  )
}

export default ListItemTwo