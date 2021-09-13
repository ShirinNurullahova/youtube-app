import React from 'react';

const VideoDescription =({title,publishTime,description})=>{
    console.log({title})
    return(
        <div> 
         <div className='snippet'>
            <h2>{title}</h2>
            <p>{publishTime}</p>
         </div>
            <h3>{description}</h3>
        </div>
    )
}
export default VideoDescription