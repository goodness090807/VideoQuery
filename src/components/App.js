import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../apis/youtube";

class App extends React.Component {
	state = { videos: [], selectedVideo: null };

	componentDidMount() {
		this.onSearchBarSubmit("電影解說");
	}

	onSearchBarSubmit = async (term) => {
		const response = await youtube.get("/search", {
			params: {
				q: term,
			},
		});

		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0],
		});
	};

	onVideoClick = (video) => {
		this.setState({ selectedVideo: video });
	};

	render() {
		return (
			<div>
				<React.Fragment>
					<CssBaseline />
					<Container maxWidth="lg" style={{ marginTop: "25px" }}>
						<SearchBar onSearchBarSubmit={this.onSearchBarSubmit} />
						<Grid container spacing={2}>
							<Grid sm={7} xs={12}>
								<VideoDetail video={this.state.selectedVideo} />
							</Grid>
							<Grid sm={5} xs={12}>
								<VideoList
									onVideoClick={this.onVideoClick}
									videos={this.state.videos}
								/>
							</Grid>
						</Grid>
					</Container>
				</React.Fragment>
			</div>
		);
	}
}

export default App;
