import React from 'react';

export default function Todo() {
    
  return (
    <>
      <label for="task">
        {'Task:'}
        <input id="task" type="text" name="task" required />
      </label>
      <ul></ul>
    </>
  );
}
