import Button from '../../Button'
import { FaRegEdit } from 'react-icons/fa'
import { AiOutlineDelete } from 'react-icons/ai'
import { MdOutlineDone } from 'react-icons/md'
import CheckBox from '../../CheckBox'
import "./index.css"
import Input from '../../Input'
import { useRef, useState } from 'react'

const TodoItem = ({ data, todo, onToggle, onRemove, onEdit, onUpdate }) => {
  const [isEdit, setIsEdit] = useState(false)
  const [value, setValue] = useState(todo.task)
  //luu index cua phan tu khi keo
  const dragTodoID = ""
  let dragTodoIndex = null
  const dragOverTodoID = ""
  let dragOverTodoIndex = null

  function handleEditTask() {
    setIsEdit(!isEdit)
  }
  function handleSubmit(e) {
    e.preventDefault();
    setIsEdit(!isEdit)
    if (!value) {
      alert('VUI LONG NHAP DAY DU THONG TIN')
      setValue(todo.task)
      return
    }
    const newTodo = {
      id: todo.id,
      task: value,
      done: todo.done
    }
    onEdit(todo.id, value)
    setValue(value)
  }
  //handle draggable
  function handleGabble() {

    const removedTodo = data.splice(dragTodoIndex, dragOverTodoIndex)[0];
    data.splice(dragOverTodoIndex, 0, removedTodo);
    console.log(dragTodoIndex, dragOverTodoIndex, removedTodo);
    dragTodoIndex = null
    dragOverTodoIndex = null
  }
  return (
    <li className='todo-item'
      draggable
      onDragStart={() => { 
        dragTodoID = todo.id
        dragTodoIndex = data.findIndex((todo)=>{
          return todo.id ===dragTodoID
        })
      }}
      onDragEnter={() => { 
        dragOverTodoID= todo.id
         dragOverTodoIndex = data.findIndex((todo)=>{
          return todo.id === dragOverTodoID
        })
        console.log(dragOverTodoIndex);
      }}
      onDragEnd={handleGabble}
    >
      <CheckBox onToggle={() => onToggle(todo.id)} checked={todo.done} />
      {!isEdit &&
        <>
          <p className={`text-job ${todo.done ? "is-done" : ""}`}>{todo.task}</p>
          <Button onClick={handleEditTask} className="btn-primary"><FaRegEdit /></Button>
        </>}
      {isEdit &&
        <form className='form-edit' onSubmit={handleSubmit}>
          <Input
            value={value}
            onInputChange={(text) => { setValue(text) }}></Input>
          <Button type='submit' className="btn-third"><MdOutlineDone></MdOutlineDone></Button>
        </form>}
      <Button onClick={() => { onRemove(todo.id, todo.done) }} className="btn-secondary"><AiOutlineDelete /></Button>
    </li>
  )
}

export default TodoItem
