import React from "react";

class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
		};
	}

	render() {
		return (
			<div className="form-container">
				<form
					onSubmit={(event) => {
						event.preventDefault();
						this.props.addHandler(this.state.value);
						this.setState({ value: "" });
					}}
				>
					<input
						type="text"
						name="listItem"
						placeholder="Enter New Todo"
						value={this.state.value}
						onChange={(event) => {
							this.setState({ value: event.target.value });
						}}
					></input>
					<br />
					<button type="submit">Add Todo</button>
				</form>
			</div>
		);
	}
}
export default TodoForm;
