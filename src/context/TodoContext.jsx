import { createContext,useContext,useState,useEffect, Children } from "react";

const TodoContext = createContext();

export const TodoProvider = ({Children})=>{
    const [todos,setTodo]=useState(
        JSON.parse(localStorage.getItem("todos")) || []
    )

    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])

    const addTodo = (text)=>{
        setTodo([...todos, {id : Date.now(), text}])
    }
}