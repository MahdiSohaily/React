import React from 'react';

export default function Post({ data }) {
  return (
    <div className="post">
      <img src={`./assets/${data.image}`} alt="" />
      <h1>{data.title}</h1>
      <div>{data.body}</div>
    </div>
  );
}
