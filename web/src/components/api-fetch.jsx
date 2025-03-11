import React, { useEffect, useState } from 'react'

function ApiFetch() {

  const [state, setState] = useState([])
  const [count, setCount] = useState(0)

  const newArray = [-6, 8, 9, 6, -10, 5 , 6].filter(item => item > 0)

  useEffect(() => {
    async function dataFetch(){
      const response = await fetch("https://jsonplaceholder.typicode.com/users ")
      const data = await response.json()
      setState(data)
    }
    dataFetch();



  }, [])

  const counterIncrease = () => {
      setCount(prev => prev + 1)
  }

  const counterDecrease = () => {
    setCount(prev => prev - 1)
  }

  const counterReset = () => {
    setCount(0)
  }

  console.log(state);

  const arrayDate = ["2023-04-15T09:50:00","2023-04-05T10:50:00","2023-04-15T10:50:00"]

  const numArray = ['99','100','101','110','102']

  function sortDates (array) {

    const sortedArray = array.sort((a,b) => b.localeCompare(a))

    return sortedArray;

  }

  console.log(sortDates(arrayDate))

  function sortNumbers (array) {

      const newArray = array.sort((num1, num2) => num1-num2)

      return newArray
  }

  console.log(sortNumbers(numArray));


  if('99'>'100') console.log(true)
  else console.log(false);
  
  
  
  if(!state.length) return <h1>Loading data...</h1>
  return (
    <>
    <button onClick={counterIncrease}>Increase</button>
    <button onClick={counterDecrease}>Decrease</button>
    <button onClick={counterReset}>Reset</button>
    <h1>{count}</h1>
    </>
    
  )
}

export default ApiFetch