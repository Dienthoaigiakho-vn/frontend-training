import Button from '../../Button'
import {FaRegEdit} from 'react-icons/fa'
import {AiOutlineDelete} from 'react-icons/ai'
import CheckBox from '../../CheckBox'
import "./index.css"

const TodoItems = () => {
  return (
    <li className='todo-item'>
      <CheckBox/>
      <text className='text-job'>TESTTING</text>
      <Button className="btn-primary"><FaRegEdit/></Button>
      <Button className="btn-secondary"><AiOutlineDelete/></Button>
    </li>
  )
}

export default TodoItems
