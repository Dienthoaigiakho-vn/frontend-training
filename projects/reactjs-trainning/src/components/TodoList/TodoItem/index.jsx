import Button from '../../Button'
import { FaRegEdit } from 'react-icons/fa'
import { AiOutlineDelete } from 'react-icons/ai'
import CheckBox from '../../CheckBox'
import "./index.css"

const TodoItem = ({ todo }) => {
  return (
    <li className='todo-item'>
      <CheckBox checked={todo.done} />
      <p className={`text-job ${todo.done ? 'is-done' : ''}`}>{todo.task}</p>
      <Button className="btn-primary"><FaRegEdit /></Button>
      <Button className="btn-secondary"><AiOutlineDelete /></Button>
    </li>
  )
}

export default TodoItem
