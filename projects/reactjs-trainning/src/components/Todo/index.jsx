import { useState } from 'react'
import Title from '../Title'
import TodoForm from '../TodoForm'
import TodoList from '../TodoList'
import './index.css'

const Todo = () => {
  const [todoList, setTodoList] = useState([]);

  function handleAddToDo(todo) {
    setTodoList((prevTodoList) => {
      const newTodoList = [...prevTodoList]
      newTodoList.push(todo)
      return newTodoList
    })
  }
  function handleUpdateStatus(id) {
    const index = todoList.findIndex((todo) => {
      return todo.id === id
    });

    if (index === -1) {
      console.log("Khong tim thay task")
      return
    }

    const newTodo = {
      ...todoList[index],
      done: !todoList[index].done
    }

    const newTodoList = [
      ...todoList.slice(0, index),
      newTodo,
      ...todoList.slice(index + 1)
    ]

    setTodoList(newTodoList)
  }

  function handleRemoveTask(id, isDone) {
    if(!isDone){
      alert('Vui long hoan thanh cong viec truoc khi xoa')
      return
    }
    setTodoList(todoList.filter((todo) => {
      return todo.id !== id
    }))

  }
  function handleEditTask(id, task) {
    const index = todoList.findIndex((todo) => {
      return todo.id === id
    });
    if (index === -1) {
      console.log("Khong tim thay task")
      return
    }
    const newTodo = todoList[index]
    newTodo.task = task
  }



  return (
    <div className='container'>
      <Title text="My Task List" />
      <TodoForm onAddTodo={handleAddToDo} />
      <TodoList data={todoList} onToggle={handleUpdateStatus} onRemove={handleRemoveTask} onEdit={handleEditTask} />

    </div>
  )
}

export default Todo
