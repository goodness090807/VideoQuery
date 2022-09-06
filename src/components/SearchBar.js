import React from "react";
import { Box, Card, CardContent, TextField } from "@mui/material";

class SearchBar extends React.Component {
	state = { term: "" };

	onInputChange = (event) => {
		this.setState({ term: event.target.value });
	};

	onFormSubmit = (event) => {
		event.preventDefault();

		this.props.onSearchBarSubmit(this.state.term);
	};

	render() {
		return (
			<Card variant="outlined">
				<CardContent>
					<form onSubmit={this.onFormSubmit}>
						<Box
							sx={{
								color: "text.primary",
								fontSize: 20,
								fontWeight: 700,
								paddingBottom: "10px",
							}}
						>
							尋找影片
						</Box>
						<TextField
							fullWidth
							label="請輸入欲搜尋的影片"
							id="searchBar"
							name="term"
							value={this.state.term}
							onChange={this.onInputChange}
						/>
					</form>
				</CardContent>
			</Card>
		);
	}
}

export default SearchBar;
