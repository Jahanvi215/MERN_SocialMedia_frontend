import React from 'react'
import "./navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='container'>
      <div className="left">
        <Link to="/" style={{textDecoration:'none'}}> 
        <span className="logo">SocialPulse</span>
        </Link>
        <div className="Icons">
       <AutoGraphIcon className='logoIcon'/>
       </div>
        {/* <img src="https://png.pngtree.com/png-vector/20190321/ourlarge/pngtree-vector-pulse-rate-icon-png-image_857012.jpg" alt="" className='logoImg'/>
        */}
        


      </div>

      <div className="center">
        <div className="searchBar">
      <SearchIcon className='searchIcon'/>
      <input placeholder='Search...' className='searchInput'/>
      </div>
      </div>

      <div className="right">
        <div className="Links">
          <Link to="/" style={{textDecoration:'none', color:"white"} }>
          <span className="topbarLink">Homepage</span>
          </Link>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="Icons">
          <div className="item">
          <PersonIcon/>
          <span className='iconBadge'>1</span>
          </div>
          <div className="item">
          <ChatIcon/>
          <span className='iconBadge'>1</span>
          </div>
          <div className="item">
          <NotificationsIcon/>
          <span className='iconBadge'>1</span>
          </div>
        </div>
        <Link to="/register">
       <img src="/myAssets/person/1.jpeg" alt="" className='topbarImg'/>
       </Link>
      </div>
     
    </div>
  )
}

export default Navbar
