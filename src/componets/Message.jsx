import React, { useState, useEffect } from 'react';
import Loading from './Loading/Loading';
import Toast from './Toast/';

export default function Message() {
  const [postID, setPostID] = useState(1);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setMessage('Post received Successfully' + Math.random());
      setLoading(false);
    }, 2000);
  }, [postID]);

  function handleChange(e) {
    const { value } = e.target;
    if (value >= 0) {
      setPostID(value);
      setLoading(true);
      return true;
    }
    alert(`post ID can't be negative number `);
  }

  return (
    <>
      <h1>{`New post Displayed with ID ${Math.random()}`}</h1>
      <label>
        {' Post ID: '}
        <input
          type="number"
          name="postID"
          value={postID}
          min={0}
          onChange={handleChange}
        />
      </label>
      {loading && <Loading />}
      <Toast type="success" message={message} />
    </>
  );
}
