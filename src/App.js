import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import SearchBar from "./components/SearchBar";

const todoData = [
	{
		task: "Organize Garage",
		id: 1528817077286,
		completed: false,
	},
	{
		task: "Bake Cookies",
		id: 1528817084358,
		completed: false,
	},
];

class App extends React.Component {
	// you will need a place to store your state in this component.
	constructor() {
		super();
		this.state = {
			todoData,
		};
	}
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state

	addHandler = (todo) => {
		const newTask = {
			task: todo,
			id: Date.now(),
			complete: false,
		};
		this.setState({
			todoData: [...this.state.todoData, newTask],
		});
	};

	changeHandler = (id) => {
		this.setState({
			todoData: this.state.todoData.map((todo) => {
				if (todo.id === id) {
					return { ...todo, completed: !todo.completed };
				} else {
					return todo;
				}
			}),
		});
	};

	deleteHandler = () => {
		this.setState({
			todoData: this.state.todoData.filter((todo) => !todo.completed),
		});
	};

	onSearchChange = (event) => {
		const { value } = event.target;
		this.setState(value);
	};

	render() {
		return (
			<div>
				<h2>Welcome to your Todo App!</h2>
				<SearchBar onSearchChange={this.onSearchChange} />
				<TodoList todoData={this.state.todoData} changeHandler={this.changeHandler} />
				<TodoForm addHandler={this.addHandler} />
				<button
					onClick={() => {
						this.deleteHandler();
					}}
				>
					Clear Completed
				</button>
			</div>
		);
	}
}

export default App;
