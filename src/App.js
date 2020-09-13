import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Todo from './components/Todo';

function App() {
	const [inputText, setInputText] = useState('');
	const [todos, setTodos] = useState([]);
	return (
		<div className="App">
			<header>
				<h1>Masterfabela's Todo List</h1>
			</header>
			<Form
				inputText={inputText}
				todos={todos}
				setTodos={setTodos}
				setInputText={setInputText}
			></Form>
			<TodoList todos={todos}></TodoList>
		</div>
	);
}

export default App;
