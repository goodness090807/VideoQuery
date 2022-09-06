import React from "react";
import VideoItem from "./VideoItem";

// 這邊可以優化成解構子{video, onVideoClick}的方式
const VideoList = (props) => {
	const videoList = props.videos.map((video) => {
		return (
			<VideoItem
				onVideoClick={props.onVideoClick}
				key={video.id.videoId}
				video={video}
			/>
		);
	});

	return <div style={{ marginTop: "10px" }}>{videoList}</div>;
};

export default VideoList;
