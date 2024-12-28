import React from 'react'
import Avatar from '@mui/material/Avatar'
import "./channelRow.css"
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

function ChannelRow({image, channel, subs, noOfVideos,description, verified}) {
  return (
    <div className='channelRow'>
      <Avatar className="cr__logo" alt={channel} src={image} />
      <div className='cr__text'>
        <h4>{channel} {verified && <CheckCircleOutlineOutlinedIcon />}</h4>
        <p>{subs} subscribers • {noOfVideos} videos</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ChannelRow
