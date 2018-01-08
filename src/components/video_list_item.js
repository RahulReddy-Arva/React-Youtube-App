import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => { // The {video} pulls the data from video element sent to VideoListItem in video_list.js. Use the same naem over there or else use props.video instead of {video}
    const imageURL = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;
    return (
    <li onClick ={ () => { onVideoSelect(video) }} className="list-group-item">
        < div className="video-list media">
            <div className="media-left">
                <img className="media-object" src={imageURL}/>
            </div>
            <div className="media-body">
                <div className="media=heading">
                    {title}
                </div>
            </div>
        </ div >   
    </li>
);
};

export default VideoListItem;