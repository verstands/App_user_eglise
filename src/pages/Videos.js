import { useState, useEffect } from "react";
import axios from "axios";

function VideoList() {
  const [videos, setVideos] = useState([]);

  /*useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://www.googleapis.com/youtube/v3/search", {
          params: {
            part: "snippet",
            channelId: "YOUR_CHANNEL_ID",
            maxResults: 10,
            key: "YOUR_API_KEY",
          },
        }
      );
      setVideos(result.data.items);
    };
    fetchData();
  }, []);*/

  return (
    <div>
      {videos.map((video) => (
        <div key={video.id.videoId}>
          <h2>{video.snippet.title}</h2>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/xNRJwmlRBNU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      ))}
    </div>
  );
}

export default VideoList;