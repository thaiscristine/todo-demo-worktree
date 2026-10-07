import { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import TodoInput from './components/TodoInput.jsx'
import TodoList from './components/TodoList.jsx'

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  body {
    margin: 0;
    min-width: 320px;
    min-height: 100vh;
    background: #f4f5ef;
    color: #202923;
    font-family: 'Trebuchet MS', sans-serif;
  }
  button, input { font: inherit; }
`

const Page = styled.main`
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 32px 20px;
`
const Card = styled.section`
  width: min(100%, 560px);
  padding: 36px;
  background: #fff;
  border: 1px solid #dfe5dc;
  border-top: 5px solid #d4783d;
  box-shadow: 0 18px 50px #26352a12;
  @media (max-width: 520px) { padding: 26px 20px; }
`
const Heading = styled.h1`
  margin: 0 0 28px;
  font: 700 40px/1.1 Georgia, serif;
  color: #263b30;
`

function App() {
  const [todos, setTodos] = useState(() => {
    try { return JSON.parse(localStorage.getItem('todos') || '[]') }
    catch { return [] }
  })

  function updateTodos(nextTodos) {
    setTodos(nextTodos)
    localStorage.setItem('todos', JSON.stringify(nextTodos))
  }

  function addTodo(text) {
    updateTodos([...todos, { id: crypto.randomUUID(), text, done: false }])
  }

  function toggleTodo(id) {
    updateTodos(todos.map((todo) => todo.id === id ? { ...todo, done: !todo.done } : todo))
  }

  return <><GlobalStyle /><Page><Card><Heading>Testing feature typo</Heading><TodoInput onAdd={addTodo} /><TodoList todos={todos} onToggle={toggleTodo} /></Card></Page></>
}

export default App