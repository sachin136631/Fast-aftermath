import { createContext, useContext, useState, useEffect } from "react";

const TodoContext = createContext();
const initialTodoListState = [];

const TodoProvider = ({ children }) => {
    const [todoList, setTodoList] = useState(initialTodoListState);

    useEffect(() => {
        const fetchTodoList = async () => {
            try {
                const response = await fetch('http://localhost:3001/todos');
                const data = await response.json();
                setTodoList(data);
            } catch (error) {
                console.error('Error fetching todo list:', error);
            }
        };

        fetchTodoList();
    }, []);

    const getNumberOfTodoItems = () => todoList.length;

    const addTodo = async (newTodoItem) => {
        try {
            const response = await fetch('http://localhost:3001/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ todo: newTodoItem }),
            });

            const data = await response.json();
            setTodoList([...todoList, data]);
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    };

    const removeTodo = async (todoId) => {
        try {
            await fetch(`http://localhost:3001/todos/${todoId}`, {
                method: 'DELETE',
            });

            const newList = todoList.filter((todo) => todo.id !== todoId);
            setTodoList(newList);
        } catch (error) {
            console.error('Error removing todo:', error);
        }
    };

    const contextValue = {
        todoList,
        getNumberOfTodoItems,
        addTodo,
        removeTodo,
    };

    return (
        <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
    );
};

export const useTodoContext = () => useContext(TodoContext);

export default TodoProvider;
