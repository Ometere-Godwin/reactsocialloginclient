import React from 'react';
import {posts} from '../../data';
import Card from '../card/Card';
import './home.css';

export default function Home() {
  return (
    <div className='home'>
        {posts.map(post =>(
            <Card key = {post.id} post = {post}/>
        ))}
    </div>
  )
}
