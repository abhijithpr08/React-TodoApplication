import { useState } from "react";
import { useTodo } from "../context/TodoContext";

const TodoItem = ({todo}) =>{
    const {deleteTodo,updateTodo}= useTodo();
    const [edit,setEdit]=useState(false)
    const [text,setText]=useState(todo.text)

    return (
        <li className="flex justify-between items-center border p-2 rounded">
            {edit ?(<input className="border p-1" value={text} onChange={(e)=>setText(e.target.value)}/>)
            :
            (<span className="w-30">{todo.text}</span>)}

            <div className="flex gap-2">
                {
                    edit ? ( <button className="bg-green-500 p-1 w-20" onClick={()=>{
                    updateTodo(todo.id, text);
                    setEdit(false);
                }}>SAVE</button>)
                :
                (<button className="bg-blue-500 p-1 w-20" onClick={() => setEdit(true)}
                    
                    >EDIT</button>)
                }
                <button onClick={()=> deleteTodo(todo.id)} className="bg-red-500 p-1 w-20">
                DELETE    
                </button>
            </div>
        </li>
    )
}

export default TodoItem