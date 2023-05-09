import Button from '../../Button'
import { FaRegEdit } from 'react-icons/fa'
import { AiOutlineDelete } from 'react-icons/ai'
import { MdOutlineDone } from 'react-icons/md'
import CheckBox from '../../CheckBox'
import "./index.css"
import Input from '../../Input'
import { useState } from 'react'

const TodoItem = ({ todo, onToggle, onRemove, onEdit }) => {
  const [isEdit, setIsEdit] = useState(false)
  const [value, setValue] = useState(todo.task)
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



  return (
    <li className='todo-item'>
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
