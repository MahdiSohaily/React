import React from 'react';

export default function Unite({ value, state }) {
  return (
    <div className="one-third">
      <div className="stat">
        {state}
        <sup>S</sup>
      </div>
      <div className="stat-value">{value}</div>
    </div>
  );
}
