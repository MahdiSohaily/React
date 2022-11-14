import React, { useState, useEffect } from 'react';
import Toast from './Toast/';

export default function Message() {
  const [postID, setPostID] = useState(1);
  useEffect(() => {}, [postID]);
  function handleChange(e) {
    const { value } = e.target;
    if (value >= 0) {
      setPostID(value);
      return true;
    }
    alert(`post ID can't be negative number `);
  }
  return (
    <>
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
    </>
  );
}
