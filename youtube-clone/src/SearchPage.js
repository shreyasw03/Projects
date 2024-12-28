import React from 'react'
import "./SearchPage.css"
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import ChannelRow from './channelRow';
import Row from './Row';

function SearchPage() {
  return (
    <div className='sp'>
      <div className='sp__filter'>
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
        <ChannelRow 
            image="https://yt3.ggpht.com/0op3NrEEmhcR4jwkCnSNv4PWvHE6kj7He8C2aocxyLfx1Tx-hN1JwmxaUj5O626ooqnWSrCJ=s176-c-k-c0x00ffffff-no-rj-mo"
            channel="Shreyas Wani"
            verified
            subs="1.23M"
            noOfVideos={382}
            description= "You can find awesome programming knowledge here please have a look!"
        />
        <hr />
        <Row
        views = "237k"
        subs = "1.23M"
        description ="Mast gadgets hai ye bhai! I tried the new 4-In-1 Styling Tool from Gillette. You can trim, shave, and style your beard with it. It's also waterproof, charges with AA batteries, Its handy and such a good Tool from the house of Gillette. "
        timestamp ="5 hours ago"
        channel ="Shreyas Wani"
        title = "5 weird gadgets | Brought Online"
        image ="https://i.ytimg.com/vi/lszuuqoiQg4/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA3EELyJCnbssk7vg3Wi7d-ipiT5A"

         />

    </div>
  )
}

export default SearchPage
