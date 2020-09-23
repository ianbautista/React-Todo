import React from "react";

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search: "",
		};
	}
	render() {
		return (
			<div className="searchField">
				<form>
					<input
						type="text"
						placeholder="Search Todo"
						value={this.state.search.value}
						onChange={(event) => {
							this.props.onSearchChange(event.target.value);
						}}
					/>
					{/* <button type="submit" className="search-btn" onClick={onInputChange}>
					<img src={searchIcon} alt="search button" />
				</button> */}
				</form>
			</div>
		);
	}
}

export default SearchBar;
