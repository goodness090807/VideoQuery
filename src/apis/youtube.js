import axios from "axios";

const KEY = "AIzaSyCWxXQvVqtk2U9Reub6pvEKSRElGHmJ3E0";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		type: "video",
		maxResults: 5,
		key: KEY,
		safeSearch: "moderate",
	},
});
