import React from 'react'

function ListItem({title, completed, onDelete, onCompleted}) {

  

  const handleOnDelete = (event) => {

    onDelete()

  }

  const handleOnCompleted = () => {

    onCompleted()

  }


  return (
    <li className={`list-group-item d-flex justify-content-between align-items-center ${ !completed ? "list-group-item-dark" : ""}`} > 
      {title} 
      <div className='d-flex gap-2 '>
        <i className='fa fa-times text-danger' role='button' onClick={handleOnDelete}></i>
        <i className='fa fa-check text-success' role='button' onClick={handleOnCompleted}></i>
      </div>
    </li>
  )
}

// ListItem.defaultProps = {
//   onDelete: () => {},
//   onCompleted: () => {}
// }

export default ListItem