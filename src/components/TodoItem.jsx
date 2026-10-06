import styled from 'styled-components'

const Row = styled.li`
  display: flex;
  align-items: center;
  gap: 13px;
  min-height: 54px;
  border-top: 1px solid #e8ece6;
`
const Check = styled.input`
  width: 21px;
  height: 21px;
  accent-color: #bd6735;
  flex: none;
`
const Label = styled.span`
  color: #26332b;
  font-size: 19px;
  overflow-wrap: anywhere;
  text-decoration: ${({ $done }) => $done ? 'line-through' : 'none'};
  opacity: ${({ $done }) => $done ? 0.55 : 1};
`

function TodoItem({ todo, onToggle }) {
  return <Row><Check type="checkbox" checked={todo.done} onChange={() => onToggle(todo.id)} aria-label={`Mark ${todo.text} ${todo.done ? 'not done' : 'done'}`} /><Label $done={todo.done}>{todo.text}</Label></Row>
}

export default TodoItem