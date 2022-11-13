import React from 'react';

export default function CardFooter() {
  return (
    <div class="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
      <div class="one-third">
        <div class="stat">
          20<sup>S</sup>
        </div>
        <div class="stat-value">Training</div>
      </div>

      <div class="one-third">
        <div class="stat">16</div>
        <div class="stat-value">Speed</div>
      </div>

      <div class="one-third no-border">
        <div class="stat">150</div>
        <div class="stat-value">Cost</div>
      </div>
    </div>
  );
}
