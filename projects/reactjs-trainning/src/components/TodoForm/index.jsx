import Button from "../Button"
import Input from "../Input"
import {AiOutlinePlus} from "react-icons/ai"

import "./index.css"

const TodoForm = () => {
  return (
    <form>
      <Input/>
      <Button className="btn-primary"><AiOutlinePlus/></Button>
    </form>
  )
}

export default TodoForm
