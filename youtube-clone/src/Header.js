import React, {useState} from 'react'
import "./Header.css"; 
import './ycp.png';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
// import { deepPurple } from '@mui/material/colors';


function Header() {


const [inputSearch, setInputSearch] = useState('');

  return (
    <div className='header'>
        <div className='header__left'>
            <MenuIcon />
            <Link to="/">
            <img 
                className='header__logo'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png?20220605194644' 
                alt='logo' 
            />
            </Link>
      </div>

      <div className='header__input'>
        <input 
        onChange={e=>setInputSearch(e.target.value)}
        value={inputSearch}
        type='text'
        placeholder="Search"
         />
         <Link to={`/search/${inputSearch}`}>
        <SearchIcon className='header__inputbutton' />
        </Link>
        </div>
        <div className='header__icons'>
            <VideoCallIcon className='header__icon'/>
            <AppsIcon className='header__icon'/>
            <NotificationsIcon className='header__icon'/>
            {/* <Avatar sx={{ bgcolor:deepPurple[500] }}>SW</Avatar> */}
            <Avatar 
            alt="SWimg" 
            src='./ycp.png'
           className='header__icon' />
        </div>
    </div>
  )
}

export default Header
