import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from "@mui/icons-material/Subscriptions"
import WhatshotIcon from "@mui/icons-material/Whatshot"
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';



function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow Selected Icons={HomeIcon} title="Home" />
      <SidebarRow Icons={WhatshotIcon} title="Trending" />
      <SidebarRow Icons={SubscriptionsIcon} title="subscription" />
      <hr />
      <SidebarRow Icons={VideoLibraryIcon} title="Library" />
      <SidebarRow Icons={HistoryIcon} title="History" />
      <SidebarRow Icons={OndemandVideoIcon} title="Your videos" />
      <SidebarRow Icons={WatchLaterIcon} title="Watch Later" />
      <SidebarRow Icons={ThumbUpAltOutlinedIcon} title="Liked video" />
      <SidebarRow Icons={ExpandMoreOutlinedIcon} title="Show more" />
    </div>
  )
}

export default Sidebar
