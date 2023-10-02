import "./profile.css"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from "../../components/feed/Feed"
import Rightbar from '../../components/rightbar/Rightbar'

import {useEffect, useState} from 'react'
import axios from "axios";
import { useParams } from "react-router"

const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({})
  const params = useParams()
  const username = useParams().username

  useEffect(() =>{
    const fetchUser = async ()=>{
      const res = await axios.get(`http://localhost:8800/api/users?username=${username}`);
      setUser(res.data)
   
    };
    fetchUser();
    
  }, [username]);


  return (
   <>
     <Navbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
            <img
                className="profileCoverImg"
                src={user.coverPic ?  user.coverPic : PF+"person/noCover.jpg"}
                alt=""
              />
              <img
                className="profileUserImg"
                src={user.profilePic ? user.profilePic : PF+"person/noAvatar.png"}
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{user.username} </h4>
                <span className="profileInfoDesc">{user.desc}</span>
            </div>
            <div className="ImpButton">
              <div className="postButton">
                <p>123</p>
                <h4>Post</h4>
              </div>

              <div className="followersButton">
              <p>112</p>
                <h4>Followers</h4>
              </div>

              <div className="followingButton">
              <p>145</p>
                <h4>Following</h4>
              </div>

            </div>
          </div>
          <div className="profileRightBottom">
         <Feed username={username}/>
            <Rightbar user ={user}/>
          </div>
        </div>
      </div>
    
   </>
  )
}

export default Profile
