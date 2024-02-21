import {createSlice, nanoid} from "@reduxjs/toolkit";


///it can be objects or array
const initialState={
    todos:[{id:1,text:"ajmal"}]
}


export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload,
            }
            state.todos.push(todo)

        },
        removeTodo:(state,action)=>{
        state.todos= state.todos.filter((todo)=>todo.id!==action.payload)
        },
        updateTodo:(state,action)=>{
            const uTodo={
                text:action.payload,
            }
            state.todos=state.todos.map((todo)=>(todo.id===action.id ? todo.text=uTodo.text:todo) )

        }
    }
})

export const {addTodo,removeTodo,updateTodo}=todoSlice.actions

export default todoSlice.reducer;
//to make store aware of reducers