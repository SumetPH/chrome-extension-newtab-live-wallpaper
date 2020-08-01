const videos = ["saenai", "elaina", "stardust", "miko", "tower"];
const random = Math.floor(Math.random() * videos.length);

document.getElementById(videos[random]).style.display = "block";
