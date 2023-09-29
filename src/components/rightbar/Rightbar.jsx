import React from 'react'
import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from '../online/Online'

const Rightbar = ({profile}) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/myAssets/gift.png" alt="" />
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
   
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Bengaluru</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Karnataka</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
           Married
            </span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Birthday:</span>
            <span className="rightbarInfoValue">02 Jan 1986</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Bio:</span>
            <span className="rightbarInfoValue">I'm an Indian Actress  </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="/myAssets/person/2.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Madhuri Dixit</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/myAssets/person/3.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Ranveer Singh</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/myAssets/person/4.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Allu Arjun</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/myAssets/person/6.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Rashmika</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/myAssets/person/7.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Samanntha </span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/myAssets/person/10.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Priyanka Chopra</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
    <div className="rightbarWrapper">
      {profile ? <ProfileRightbar /> : <HomeRightbar />}
    </div>
  </div>
  )
}

export default Rightbar
