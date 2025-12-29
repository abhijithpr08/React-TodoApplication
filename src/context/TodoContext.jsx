import { createContext, useContext, useState, useEffect } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodo] = useState(
        JSON.parse(localStorage.getItem("todos")) || []
    )

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const addTodo = (text) => {
        setTodo([...todos, { id: Date.now(), text }])
    }

    const deleteTodo = (id) => {
        setTodo(todos.filter(todo => todo.id !== id))
    }

    const updateTodo = (id, newText) => {
        setTodo(todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo))
    }

    return (
        <TodoContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo }}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodo = () => useContext(TodoContext)