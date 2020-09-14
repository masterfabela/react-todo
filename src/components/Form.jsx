import React from 'react';

function Form({ setInputText, todos, setTodos, inputText }) {
	const inputTextHandler = (event) => {
		setInputText(event.target.value);
	};
	const submitTodoHandler = (event) => {
		event.preventDefault();
		if (inputText) {
			setTodos([
				...todos,
				{ text: inputText, completed: false, id: Math.random() * 1000 },
			]);
			setInputText('');
		}
	};
	return (
		<form>
			<input
				onChange={inputTextHandler}
				value={inputText}
				type="text"
				className="todo-input"
			/>
			<button
				onClick={submitTodoHandler}
				className="todo-button"
				type="submit"
			>
				<i className="fas fa-plus-square"></i>
			</button>
			<div className="select">
				<select name="todos" className="filter-todo">
					<option value="all">All</option>
					<option value="completad">Completed</option>
					<option value="uncompleted">Uncompleted</option>
				</select>
			</div>
		</form>
	);
}

export default Form;
