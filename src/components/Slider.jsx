import React, { useState, useEffect } from 'react';

export default function Slider() {
  const [card, setCard] = useState([]);
  const [current, setCurrent] = useState(0);

  return (
    <div className="slide-container">
      <div className="wrapper">
        <div className="arrow-wrapper">
          <div className="round">
            <div id="cta">
              <span className="arrow prev"></span>
            </div>
          </div>
        </div>
        <div className="clash-card barbarian">
          <div className="clash-card__image clash-card__image--barbarian">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/barbarian.png"
              alt="barbarian"
            />
          </div>
          <div className="clash-card__level clash-card__level--barbarian">
            Level 4
          </div>
          <div className="clash-card__unit-name">The Barbarian</div>
          <div className="clash-card__unit-description">
            The Barbarian is a kilt-clad Scottish warrior with an angry,
            battle-ready expression, hungry for destruction. He has Killer
            yellow horseshoe mustache.
          </div>

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
        </div>
        <div className="arrow-wrapper">
          <div className="round">
            <div id="cta">
              <span className="arrow next"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
