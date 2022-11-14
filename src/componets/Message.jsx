import React from 'react';
import Toast from './Toast/';

export default function Message() {
    const [postID, setPostID] = useState(1)
  return (
    <>
      <input type="number" name="postID"  />
    </>
  );
}
