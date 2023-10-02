import React, { useContext, useEffect, useState } from 'react'
import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from '../online/Online'
import axios from 'axios'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Rightbar = ({user}) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const[friends, setFriends] = useState([]);
  const{user:currentUser, dispatch} = useContext(AuthContext);
  const[followed, setFollowed] = useState(currentUser.followings.includes(user?.id));

  useEffect(()=>{
    setFollowed(currentUser.followings.includes(user?.id))
  }, [currentUser])

  useEffect(() =>{
    const getFriends = async ()=>{
      try{
        const friendList = await axios.get("http://localhost:8800/api/users/friends/" + user._id);
        setFriends(friendList.data);
      }
      catch(err){
        console.log(err)
      }
    };
    getFriends();
  }, [user])

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put("http://localhost:8800/api/users/" +user._id+ "/unfollow", {
          userId: currentUser._id,
        });
         dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put("http://localhost:8800/api/users/" +user._id+ "/follow", {
          userId: currentUser._id,
        });
         dispatch({ type: "FOLLOW", payload: user._id });
      }
      setFollowed(!followed);
    } catch (err) {
    }
  };

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src={`${PF}gift.png`} alt="" />
          <span className="birthdayText">
            <b>Alia Bhatt</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src="https://media.istockphoto.com/id/1287834681/vector/social-media-marketing-mobile-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=uzHs0xpQuUVSeBpWDthH4OZdr6sRe3IFK26CtYAKkx8=" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
      <>
      {user.username !== currentUser.username &&(
         <button className="rightbarFollowButton" onClick={handleClick}>
          {followed ? "Unfollow" : "Follow"}
          {followed ? <RemoveIcon /> : <AddIcon/>}
          
         </button>
      )}
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
           {user.relationship === 1
             ? "Single"
             :user.relationship === 2
             ? "Married"
             : "-"
           }
            </span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Birthday:</span>
            <span className="rightbarInfoValue">{user.bithday}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Bio:</span>
            <span className="rightbarInfoValue">{user.bio} </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
        {friends.map((friend) => (
            <Link
              to={"/profile/" + friend.username}
              style={{ textDecoration: "none" }}
            >
              <div className="rightbarFollowing">
                <img
                  src={
                    friend.profilePic
                      ?  friend.profilePic
                      : PF + "person/noAvatar.png"
                  }
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">{friend.username}</span>
              </div>
            </Link>
          ))}
          {/* <div className="rightbarFollowing">
            <img
              src={`${PF}person/3.jpeg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Ranveer Singh</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/4.jpeg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Allu Arjun</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/6.jpg`}              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Rashmika</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/7.jpg`}              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Samanntha </span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/10.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Priyanka Chopra</span>
          </div> */}
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
    <div className="rightbarWrapper">
      {user ? <ProfileRightbar /> : <HomeRightbar />}
    </div>
  </div>
  )
}

export default Rightbar
