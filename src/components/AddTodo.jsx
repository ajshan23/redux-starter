import React from 'react'
import { useDispatch } from 'react-redux'

//dispatch reducer upayogich storeil change varuthum

import {addTodo} from '../features/Todo/todoSlice';

function AddTodo() {

    const[input ,setInput]=React.useState('')
    const dispatch=useDispatch();
    const addTodoHandler=(e)=>{
        e.preventDefault();
        if(!input) return
        dispatch(addTodo(input))
        setInput('')
    }



    
  return (
    <form onSubmit={addTodoHandler} className='space-x-3 mt-3'>
       <div className='w-full flex justify-center items-center bg-gray-200 p-6'>
        <div>Write Todo:&nbsp;&nbsp;</div>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder='write todo' className='bg-transparent outline-none border-2 rounded border-gray-400'/>
        <div className='ml-2 border-2 border-black rounded-full px-2 flex text-center justify-center items-center text-2xl cursor-pointer bg-green-500 text-white' onClick={addTodoHandler}>+</div>
       </div>
      
    </form>
  )
}

export default AddTodo
