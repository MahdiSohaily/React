import React, { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p> {`You have clicked ${count} time`}</p>
    </div>
  );
}
