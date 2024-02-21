import React from 'react'
import { useSelector,useDispatch, } from 'react-redux'
import {removeTodo} from '../features/Todo/todoSlice'

//selectornte ullil data kittum,statente ullil ille

function Todos() {

  
  const todos= useSelector(state=> state.todos)

  const dispatch=useDispatch()

  return (
    <div className='w-full flex flex-col justify-center items-center mt-6 bg-slate-300 text-white '>
      <div className='text-black text-2xl mb-4 w-full text-center border-b font-mono'>Todos</div>
      <div className=''>
      {todos.map((todo)=>(
        <li key={todo.id}>{todo.text}
        <button onClick={(e)=>dispatch(removeTodo(todo.id))} className='ml-6 text-black'>X</button>
        </li>
        
      ))}
      </div>
    </div>
  )
}

export default Todos
