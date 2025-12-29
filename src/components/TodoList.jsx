import TodoItem from "./TodoItem";
import { useTodo } from "../context/TodoContext";

const TodoList =()=>{
    const {todos} = useTodo()

    return(
        <div className="flex justify-center">
            <ul className="w-100 space-y-1">
            {todos.map(todo=>(
                <TodoItem key={todo.id} todo={todo}/>
            ))}
        </ul>
        </div>
    )
}

export default TodoList