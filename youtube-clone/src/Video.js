import React from 'react'
import Avatar from '@mui/material/Avatar'
import "./videocard.css"

function Video(props) {
    const {image, title, channel, views, timestamp, channelImage} = props
  return (
    <div className='video'>
      <img className='video__thumbnail' src={image} alt="" />
      <div className='videocard__info'>
            <Avatar className="videocard__avatar" alt={channel} src={channelImage} />
            <div className='video__text'>
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>{views} + {timestamp}</p>
            </div>
      </div>
    </div>
  )
}

export default Video
