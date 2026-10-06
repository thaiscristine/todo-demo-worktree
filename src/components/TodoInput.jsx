import { useState } from 'react'
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 24px;
`
const Field = styled.input`
  flex: 1;
  min-width: 0;
  padding: 12px 14px;
  border: 1px solid #bdc9bf;
  border-radius: 4px;
  font-size: 18px;
  &:focus { outline: 3px solid #d4783d40; border-color: #bd6735; }
`
const AddButton = styled.button`
  padding: 10px 19px;
  border: 0;
  border-radius: 4px;
  background: #bd6735;
  color: white;
  font-weight: 700;
  cursor: pointer;
  &:hover { background: #9e5026; }
`

function TodoInput({ onAdd }) {
  const [text, setText] = useState('')

  function submit(event) {
    event.preventDefault()
    const value = text.trim()
    if (!value) return
    onAdd(value)
    setText('')
  }

  return <Form onSubmit={submit}><Field aria-label="New todo" placeholder="What needs doing?" value={text} onChange={(event) => setText(event.target.value)} /><AddButton type="submit">Add</AddButton></Form>
}

export default TodoInput