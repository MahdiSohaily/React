import React from 'react';

export default function Arrow({ type, handleCurrentCard }) {
  return (
    <div
      className="arrow-wrapper"
      onClick={() => {
        handleCurrentCard(type);
      }}
    >
      <div className="round">
        <div id="cta">
          <span className={`arrow ${type}`}></span>
        </div>
      </div>
    </div>
  );
}
