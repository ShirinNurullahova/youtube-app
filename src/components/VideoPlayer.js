import React from 'react';

const VideoPlayer = ({videoId}) => {
    return (
        <div>
            <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                frameborder="0"
                allowFullScreen
                title={videoId}
            />
        </div>
    )
}

export default VideoPlayer;