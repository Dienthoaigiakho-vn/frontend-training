import TodoItem from "./TodoItem"
import "./index.css"

const TodoList = ({ data , onToggle, onRemove, onEdit}) => {
  function renderItems(todo) {
    return <TodoItem todo={todo} key={todo.id} onToggle={onToggle} onRemove={onRemove} onEdit={onEdit} />
  }
  return <ul>{data.map(renderItems)}</ul>
}

export default TodoList
