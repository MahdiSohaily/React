import React, { useState, useEffect } from 'react';
import Arrow from './Arrow';
import Card from './Card';

export default function Slider() {
  const [card, setCard] = useState([]);
  const [current, setCurrent] = useState(0);

  return (
    <div className="slide-container">
      <div className="wrapper">
        <Arrow type={'prev'} />
        <Card />
        <Arrow type={'next'} />
      </div>
    </div>
  );
}
