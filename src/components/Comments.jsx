import React from 'react';
import Comment from './Comment';

export default function Comments({ comments }) {
  const allComments =
    comments &&
    comments.map((item) => <Comment key={item.id} body={item.body} />);
  return (
    <div className="comments">
      <p>Comments:</p>
      {allComments}
    </div>
  );
}
