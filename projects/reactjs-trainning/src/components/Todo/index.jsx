import { useState } from 'react'
import Title from '../Title'
import TodoForm from '../TodoForm'
import TodoList from '../TodoList'
import './index.css'

const Todo = () => {
  const [todoList, setTodoList] = useState([]);

  function handleAddToDo(todo) {
    console.log("Add ", todo)
    setTodoList((prevTodoList)=>{
      const newTodoList = [...prevTodoList]
      newTodoList.push(todo)
      return newTodoList
    })
  }

  return (
    <div className='container'>
      <Title text="My Task List" />
      <TodoForm onAddTodo={handleAddToDo} />
      <TodoList data={todoList} />

    </div>
  )
}

export default Todo
