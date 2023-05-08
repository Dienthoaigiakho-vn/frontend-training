import TodoItem from "./TodoItem"
import "./index.css"

const TodoList = ({ data }) => {
  function renderItems(todo) {
    return <TodoItem todo={todo} key={todo.id} />
  }
  return <ul>{data.map(renderItems)}</ul>
}

export default TodoList
