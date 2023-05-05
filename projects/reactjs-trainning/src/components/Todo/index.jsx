import Title from '../Title'
import TodoForm from '../TodoForm'
import TodoList from '../TodoList'
import './index.css'

const Todo = () => {
  return (
    <div className='container'>
      <Title text="My Task List" />
      <TodoForm/>
      <TodoList/>

    </div>
  )
}

export default Todo
