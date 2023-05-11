import TodoItem from "./TodoItem"
import "./index.css"

const TodoList = ({ data , onToggle, onRemove, onEdit, onUpdate}) => {
  function renderItems(todo) {
    return <TodoItem 
    data={data}
    todo={todo} 
    key={todo.id} 
    onToggle={onToggle} 
    onRemove={onRemove} 
    onEdit={onEdit}
    onUpdate={onUpdate}
    />
  }
  return <ul>{data.map(renderItems)}</ul>
}

export default TodoList
