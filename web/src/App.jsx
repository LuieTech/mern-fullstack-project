import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ApiFetch from './components/api-fetch'
import ToDoList from './components/to-do-list'
import ToDoListTwo from './components/to-do-list-2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container py-5 d-flex flex-column gap-3'>
      {/* <ApiFetch /> */}
      {/* <ToDoList /> */}
      <ToDoListTwo />
    </div>
  )
}

export default App
