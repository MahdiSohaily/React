import React, { useState, useEffect } from 'react';
import Arrow from './Arrow';
import Card from './Card';

export default function Slider() {
  const [cards, setCards] = useState([]);
  const [current, setCurrent] = useState(0);

  async function fetchData() {
    const response = await fetch('http://localhost:3001/heroes');
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    fetchData().then((data) => setCards(data));
  }, []);

  const handleCurrentCard = (dir) => {
    const cardsCount = cards.length;
    switch (dir) {
      case 'prev': {
        const index = current - 1 >= 0 ? current - 1 : cardsCount - 1;
        setCurrent(index);
        break;
      }
      case 'next': {
        console.log('next');
        const index = current + 1 >= cardsCount ? 0 : current + 1;
        setCurrent(index);
        break;
      }
      default:
        throw Error('Wrong value passed');
    }
  };

  return (
    <div className="slide-container">
      <div className="wrapper">
        {cards.length > 0 ? (
          <>
            <Arrow handleCurrentCard={handleCurrentCard} type={'prev'} />
            <Card display={cards[current]} />
            <Arrow handleCurrentCard={handleCurrentCard} type={'next'} />
          </>
        ) : (
          <p> Loading </p>
        )}
      </div>
    </div>
  );
}
