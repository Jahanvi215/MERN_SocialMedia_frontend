import "./profile.css"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from "../../components/feed/Feed"
import Rightbar from '../../components/rightbar/Rightbar'
import VerifiedIcon from '@mui/icons-material/Verified';

const Profile = () => {
  
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
                src="/myAssets/post/11.png"
                alt=""
              />
              <img
                className="profileUserImg"
                src="/myAssets/person/1.jpeg"
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Deepika Padukon <VerifiedIcon style={{color:"#4c68d7"}}/></h4>
                <span className="profileInfoDesc">Live Love Laugh ...💕🌈</span>
            </div>
            <div className="ImpButton">
              <div className="postButton">
                <p>458</p>
                <h4>Post</h4>
              </div>

              <div className="followersButton">
              <p>76.1M</p>
                <h4>Followers</h4>
              </div>

              <div className="followingButton">
              <p>186</p>
                <h4>Following</h4>
              </div>

            </div>
          </div>
          <div className="profileRightBottom">
         <Feed/>
            <Rightbar profile/>
          </div>
        </div>
      </div>
    
   </>
  )
}

export default Profile
