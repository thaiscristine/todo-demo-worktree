import styled from 'styled-components'
import TodoItem from './TodoItem.jsx'

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`
const Empty = styled.p`
  margin: 0;
  padding: 18px 0 4px;
  color: #66756a;
  font-size: 17px;
`

function TodoList({ todos, onToggle }) {
  if (todos.length === 0) return <Empty>No todos yet. Add one above.</Empty>
  return <List>{todos.map((todo) => <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />)}</List>
}

export default TodoList