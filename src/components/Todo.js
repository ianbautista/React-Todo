import React from "react";
import "./Todo.css";

export default function Todo(props) {
	return (
		<h2
			onClick={(event) => {
				event.preventDefault();
				props.changeHandler(props.todo.id);
			}}
			className={`${props.todo.completed ? " completed" : ""}`}
		>
			{props.todo.task}
		</h2>
	);
}
