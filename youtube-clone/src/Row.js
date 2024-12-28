import React from 'react'
import "./Row.css"

function Row({
    views,
    subs,
    description,
    timestamp,
    channel,
    title,
    image}) {
  return (
    <div className='vr'>
      <img src= {image} alt="" />
      <div className='vr__text'>
        <h3>{title}</h3>
        <p className='vr_headline'>
        {channel} • <span className='vr__subs'><span className='vr__subnum'>{subs} </span> 
         Subscribers</span> { views } views • {timestamp} 
        </p>
        <p className='vr__description'>{description}</p>
      </div>
    </div>
  )
}

export default Row
