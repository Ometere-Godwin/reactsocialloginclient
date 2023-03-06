import React from 'react'
import { useLocation } from 'react-router-dom';
import {posts} from '../../data'
import './post.css';

export default function Post() {
  const location = useLocation();
  console.log(location);
  const path = location.pathname.split('/')[2];
  const post = posts.find((p => p.id.toString() === path));
  return (
    <div className='post'>
        <img src= {post.image} alt="" className="postImage" />
        <h1 className="postTitle">{post.title}</h1>
        <p className="postDsecription">{post.desc}</p>
        <p className="longDescriptionPost">{post.longDesc}</p>
    </div>
  )
}
