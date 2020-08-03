import React from "react";

export default function Todo(props) {
	return (
		<h2
			onClick={(event) => {
				event.preventDefault();
				props.changeHandler(props.todo.id);
				event.target.style.textDecoration = "line-through";
			}}
		>
			{props.todo.task} <span> {props.todo.id}</span>
		</h2>
	);
}
