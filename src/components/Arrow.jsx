import React from 'react';

export default function Arrow({ type }) {
  return (
    <div class="arrow-wrapper">
      <div class="round">
        <div id="cta">
          <span class={`arrow ${type}`}></span>
        </div>
      </div>
    </div>
  );
}
