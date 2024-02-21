import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <>
      <h1 className='flex justify-center text-4xl font-mono bg-slate-500 text-white rounded-lg'>Learn redux</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
