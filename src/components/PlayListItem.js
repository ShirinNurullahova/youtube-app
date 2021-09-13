import React from 'react';


const PlayListItem = ({video,setSelectedVideo,shouldShrink}) => {
    return (
        <div className="videolist-item" onClick={()=>setSelectedVideo(video)}>
            <img src={
                    shouldShrink
                    ? video.snippet.thumbnails.default.url
                    :  video.snippet.thumbnails.medium.url
                }
                 alt="thumb"
             />
            <div className="videolist-item__desc">
                <h4>{video.snippet.channelTitle}</h4>
                <p>{video.snippet.title}</p>
            </div>
        </div>
    )
}

export default PlayListItem;