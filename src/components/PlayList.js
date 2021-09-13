import React from 'react';
import PlayListItem from './PlayListItem';


const PlayList = ({videoList,setSelectedVideo,shouldShrink})=>{
    return(
        <div className={`videolist ${shouldShrink && "videolist__small"}`}>
           {
               videoList.map(video=>{
                   return(
                       <div key={video.id.videoId}>
                           <PlayListItem 
                           video={video} 
                           setSelectedVideo={setSelectedVideo}
                           shouldShrink={shouldShrink}
                           />
                           <hr/>
                       </div>
                   )
               })
           }
        </div>
    )
}
export default PlayList;