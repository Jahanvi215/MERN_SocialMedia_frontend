import React from 'react';
import "./post.css";
import { useState } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import { Users } from '../../dummyData';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {

  const [like, setLike] = useState(post?.likes?.length || 0);
  const [isLiked, setIsLiked] = useState(false);
 

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
           
           
             <Link to="/profile/:username" id='text' >
                <img
                  className="postProfileImg"
                  src={Users.filter((u) => u.id === post.userId)[0]?.profilePicture}
                  alt=""
                />
                <span className="postUsername">
                  {Users.filter((u) => u.id === post.userId)[0]?.username}
                </span>
                </Link>
           
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="/myAssets/like.png" alt="" onClick={likeHandler} />
            <img className="likeIcon" src="/myAssets/heart.png" alt="" onClick={likeHandler} />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment}</span>
            <CommentIcon className='postIcon' />
            <ShareIcon className='postIcon' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
