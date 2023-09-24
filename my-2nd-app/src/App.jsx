import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './custom.css'
import './Todo.jsx'
import Todo from './Todo.jsx'
import Person from './Person'

function App() {
  const person =['abrar', 'siyam','rafiul','sabbir']
  const stdetails =[
    {name:'siyam',age : 21,},
    {name:'abrar',age : 21,},
    {name:'roky',age : 27,},
    {name:'sabbir',age : 21,}
  ]
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <StudentName name="siyam" age="21"></StudentName>
      <StudentName name="abrar" age="22"></StudentName>
      <StudentName name="rafiul" age="27"></StudentName>
      <StudentName name="sabbir" age="20"></StudentName>
      <Todo task="learn html" isdone={true}></Todo>
      <Todo task="learn css" isdone={true}></Todo>
      <Todo task="learn tailwind css" isdone={true}></Todo>
      <Todo task="learn javascript" isdone={true}></Todo>
      <Todo task="learn react js"></Todo>
      <Todo task="learn mongodb"></Todo>
      <Todo task="learn php" isdone={true}></Todo>
      <Todo task="learn mysql" isdone={true}></Todo>
    {
      person.map(person => <Person name={person}></Person>)
    }
    {
      stdetails.map(details => <Person name={details.name} age = {details.age}></Person>)
    }
    </> 
  )
}
function StudentName({name='',age = ''}){
  const studentstyle = {
    margin:'20px',
    border:'2px solid red'
  }
  return (
    <div className='student' style={studentstyle}>
    <h3>my name is : {name}</h3>
    <p>my age is : {age}</p>
    </div>
  )
}

export default App
