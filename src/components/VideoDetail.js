import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const VideoDetail = ({ video }) => {
	if (!video) {
		return (
			<Backdrop
				sx={{
					color: "#fff",
					zIndex: (theme) => theme.zIndex.drawer + 1,
				}}
				open={true}
			>
				<CircularProgress color="inherit" />
			</Backdrop>
		);
	}

	const vidoeSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

	return (
		<div>
			<Box sx={{ width: "100%", marginTop: "15px" }}>
				<iframe
					title={video.snippet.title}
					src={vidoeSrc}
					width="100%"
					height="370"
				></iframe>
				<Paper
					elevation={3}
					sx={{ padding: "10px", marginTop: "15px" }}
				>
					<Typography
						variant="h6"
						sx={{ fontWeight: "bold" }}
						gutterBottom
					>
						{video.snippet.title}
					</Typography>
					<Typography
						variant="subtitle1"
						display="block"
						color="text.secondary"
						gutterBottom
					>
						{video.snippet.description}
					</Typography>
				</Paper>
			</Box>
		</div>
	);
};

export default VideoDetail;
