import React, { useContext } from 'react'
import "./navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const Navbar = () => {
  const {user} =useContext(AuthContext)

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className='container'>
      <div className="left">
        <Link to="/" style={{textDecoration:'none'}}> 
        <span className="logo">SocialPulse</span>
        </Link>
        <div className="Icons">
       <AutoGraphIcon className='logoIcon'/>
       </div>
       
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
          <Link to="/register" style={{textDecoration:'none', color:"white"} }>
          <span className="topbarLink">New User</span>
          </Link>
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
        <Link to={`/profile/${user.username}`}>
       <img 
       src={user.profilePic ? user.profilePic : PF+"person/noAvatar.png"} 
       alt="" className='topbarImg'/>
       </Link>
      </div>
     
    </div>
  )
}

export default Navbar
