import React from 'react';
import VideoPlayer from './VideoPlayer';
import VideoDescription from './VideoDescription';


const VideoItem =({selectedVideo})=>{
      return(
           <div className='video'>
               <VideoPlayer videoId={selectedVideo.id.videoId}/>
              < VideoDescription 
                publishTime={selectedVideo.snippet.publishTime} 
                title={selectedVideo.snippet.title} 
                description={selectedVideo.snippet.description}
              />
           </div>
      )
}
export default VideoItem;