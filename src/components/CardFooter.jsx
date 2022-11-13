import React from 'react';

export default function CardFooter() {
  return (
    <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
      <div className="one-third">
        <div className="stat">
          20<sup>S</sup>
        </div>
        <div className="stat-value">Training</div>
      </div>

      <div className="one-third">
        <div className="stat">16</div>
        <div className="stat-value">Speed</div>
      </div>

      <div className="one-third no-border">
        <div className="stat">150</div>
        <div className="stat-value">Cost</div>
      </div>
    </div>
  );
}
