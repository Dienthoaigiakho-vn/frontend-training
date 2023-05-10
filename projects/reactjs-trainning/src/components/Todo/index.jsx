import { useEffect, useState } from 'react'
import Title from '../Title'
import TodoForm from '../TodoForm'
import TodoList from '../TodoList'
import './index.css'

const KEY = "todo-store"
const Todo = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem(KEY);
    if (data) {
      const objectTodo = JSON.parse(data)
      setTodoList(objectTodo)
    }
  }, [])

  function updateStore(newTodoList) {
    localStorage.setItem(KEY, JSON.stringify(newTodoList));
  }

  function handleAddToDo(todo) {
    setTodoList((prevTodoList) => {
      const newTodoList = [...prevTodoList]
      newTodoList.push(todo)
      updateStore(newTodoList)
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
    if (!isDone) {
      alert('Vui long hoan thanh cong viec truoc khi xoa')
      return
    }
    const newTodoList = todoList.filter((todo) => {
      return todo.id !== id
    })
    setTodoList(newTodoList)
    updateStore(newTodoList)


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

    const newTodoList = todoList
    updateStore(newTodoList)

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
