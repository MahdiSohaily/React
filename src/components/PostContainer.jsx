import React from 'react';
import Comments from './Comments';
import Post from './Post';

export default function PostContainer({ data }) {
  return (
    <div className="container">
      <Post data={data} />
      <Comments />
    </div>
  );
}
