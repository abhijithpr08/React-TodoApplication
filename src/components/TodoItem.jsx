import { useState } from "react";
import { useTodo } from "../context/TodoContext";

const TodoItem = ({todo}) =>{
    const {deleteTodo,updateTodo}= useTodo;
    const [edit,setEdit]=useState(false)
    const [text,setText]=useState(todo.text)

    return (
        <li>
            {edit ?(<input value={text} onChange={(e)=>setText(e.target.value)}/>)
            :
            (<span>{todo.text}</span>)}

            <div>
                {
                    edit ? ( <button onClick={()=>{
                    updateTodo(todo.id, text);
                    setEdit(false);
                }}>SAVE</button>)
                :
                (<button onClick={() => setEdit(true)}
                    
                    >EDIT</button>)
                }
                <button onClick={()=> deleteTodo(todo.id)}>
                DELETE    
                </button>
            </div>
        </li>
    )
}

export default TodoItem