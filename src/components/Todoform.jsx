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
        <form onSubmit={handleSubmit}>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button>Add</button>
        </form>
    )
}

export default TodoForm