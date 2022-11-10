import React, { useState, useEffect } from 'react';
import Comments from './Comments';
import Post from './Post';

export default function PostContainer({ data }) {
  const [comments, setComments] = useState();

  async function getComments(id) {
    const data = await fetch(`http://localhost:3001/comments?post-id=${id}`);
    return await data.json();
  }

  useEffect(() => {
    getComments(data.id).then((comments) => setComments(comments));
  }, [data.id]);

  return (
    <div className="container">
      <Post data={data} />
      {comments && <Comments comments={comments} />}
    </div>
  );
}
