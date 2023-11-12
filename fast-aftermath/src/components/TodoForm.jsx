import { useState } from "react";
import { useTodoContext } from "../providers/TodoProvider";

const TodoForm = () => {
    const { getNumberOfTodoItems, addTodo } = useTodoContext();
    const [todoItem, setTodoItem] = useState("");

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        if (!todoItem) {
            return;
        }

        try {
            await addTodo(todoItem);
            setTodoItem("");

            console.log("Todo added:", todoItem);
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    };

    return (
        <form onSubmit={handleOnSubmit}>
            <h3>Todo items: {getNumberOfTodoItems()}</h3>
            <input
                type="text"
                value={todoItem}
                onChange={(e) => setTodoItem(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default TodoForm;
