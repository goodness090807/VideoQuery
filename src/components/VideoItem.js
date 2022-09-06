import "./styles/VideoItem.css";
import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const VideoItem = ({ video, onVideoClick }) => {
	return (
		<Card
			sx={{ display: "flex", marginBottom: "20px" }}
			onClick={() => onVideoClick(video)}
		>
			<CardMedia
				component="img"
				image={video.snippet.thumbnails.medium.url}
				alt={video.snippet.title}
				sx={{ width: "50%", height: "auto" }}
			/>

			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					width: "195px",
				}}
			>
				<CardContent sx={{ flex: "1 0 auto" }}>
					<Typography
						component="div"
						sx={{
							textOverflow: "ellipsis",
							overflow: "hidden",
							whiteSpace: "nowrap",
							fontWeight: "bold",
						}}
					>
						{video.snippet.title}
					</Typography>
					<Typography
						variant="subtitle1"
						color="text.secondary"
						component="div"
						sx={{
							textOverflow: "ellipsis",
							overflow: "hidden",
							whiteSpace: "nowrap",
						}}
					>
						{video.snippet.description}
					</Typography>
				</CardContent>
			</Box>
		</Card>
	);
};

export default VideoItem;
