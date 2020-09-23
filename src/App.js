import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import SearchBar from "./components/SearchBar";
import "./App.css";

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
			todoSearch: [],
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

	onSearchChange = (query) => {
		const newTodo = this.state.todoData.filter((todo) => {
			if (todo.task.toLowerCase().includes(query.toLowerCase()) && query !== "") {
				return todo;
			} else {
				return null;
			}
		});

		if (newTodo !== 0) {
			this.setState({
				todoSearch: newTodo,
			});
		} else {
			this.setState({
				todoSearch: [],
			});
		}
	};

	render() {
		return (
			<div className="main-div">
				<h2 className="Title">Welcome to your Todo App!</h2>
				<SearchBar onSearchChange={this.onSearchChange} />​
				{this.state.todoSearch.length > 0 ? (
					<TodoList todoData={this.state.todoSearch} changeHandler={this.changeHandler} />
				) : (
					<TodoList todoData={this.state.todoData} changeHandler={this.changeHandler} />
				)}
				​
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
