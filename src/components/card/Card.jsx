import React from 'react'
import { Link } from 'react-router-dom';
import './card.css';


export default function Card({post}) {
  return (
    <div className='card'>
      <Link className='postLink' to = {`/post/${post.id}`}>
      <span className="title">{post.title}</span>
      <img src= {post.image} alt="" className="img" />
      <p className="desc">{post.desc}</p>
      <button className="cardButton">Read now</button>
      </Link>
    </div>
  )
}
