import React from 'react';
import Comments from './Comments';
import Post from './Post';

export default function PostContainer() {
  return (
    <div className="container">
      <Post />
      <Comments />
    </div>
  );
}
