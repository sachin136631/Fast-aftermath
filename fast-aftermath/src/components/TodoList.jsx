import { useTodoContext } from "../providers/TodoProvider";

const TodoList = () => {
    const { todoList, removeTodo } = useTodoContext(); 

    return (
        <ul>
            {todoList.map((todo, index) => (
                <li key={index}>
                    {todo.text} 
                    <button onClick={() => removeTodo(todo.id)}>Remove</button> 
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
