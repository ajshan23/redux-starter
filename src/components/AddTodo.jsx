import React from 'react'
import { useDispatch } from 'react-redux'

//dispatch reducer upayogich storeil change varuthum

import {addTodo} from '../features/Todo/todoSlice';

function AddTodo() {

    const[input ,setInput]=React.useState('')
    const dispatch=useDispatch();
    const addTodoHandler=(e)=>{
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('')
    }



    
  return (
    <form onSubmit={addTodoHandler} className='space-x-3 mt-12'>
        <input type="text" 
        className='bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-offset-indigo-900
        text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
        placeholder='enter a Todo ..'
        value={input}
        onChange={(e)=>{
            setInput(e.target.value)
        }} />
      
    </form>
  )
}

export default AddTodo
