import React from 'react';

const VideoDetail = ({video}) => {
  if(!video){
    return <div>Loading...</div>
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  console.log(video.items);
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-repsonsive-item" src={url}></iframe>
      </div>
      <div className="details" >
        <span className="channel">{video.snippet.channelTitle}</span>
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div> 
    </div> 
  );
}

export default VideoDetail;