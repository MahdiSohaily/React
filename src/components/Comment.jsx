import React from 'react';

export default function Comment({ body }) {
  return (
    <>
      <div className="comment">
        <p>{body}</p>
      </div>
    </>
  );
}
