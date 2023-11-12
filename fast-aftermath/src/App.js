import logo from './logo.svg';
import './App.css';
import TodoProvider from './providers/TodoProvider';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Fast-Aftermath</h1>
      </header>

      <TodoProvider>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;
