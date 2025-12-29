import { useTodo } from "../context/TodoContext";
import { useState } from "react";

const TodoForm = () => {
    const [text, setText] = useState("")
    const { addTodo } = useTodo();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        addTodo(text);
        setText("");
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-1 justify-center mb-30">
            <input className="border h-8" value={text} onChange={(e) => setText(e.target.value)} />
            <button className="bg-blue-500 p-1 w-20">Add</button>
        </form>
    )
}

export default TodoForm