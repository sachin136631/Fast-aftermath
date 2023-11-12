import { useState } from "react";
import { useTodoContext } from "../providers/TodoProvider"

const TodoForm = () => {
    const {getNumberOfTodoItems, addTodo} = useTodoContext();
    const [todoItem,setTodoItem] = useState("");

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if(!todoItem){
            return;
        }

        addTodo(todoItem);
        setTodoItem("")

        console.log("Todo : ",todoItem)
    }
    return (
        <form onSubmit={handleOnSubmit}>
            <h3>Todo item : { getNumberOfTodoItems }</h3>
            <input type="text" value={todoItem} onChange={(e) => setTodoItem(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default TodoForm;