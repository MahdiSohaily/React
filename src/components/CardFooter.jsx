import React from 'react';
import Unite from './Unite';

export default function CardFooter({ units, name }) {
  const items = units.map((item) => (
    <Unite value={item.value} state={item.state} />
  ));
  return (
    <div
      className={`clash-card__unit-stats clash-card__unit-stats--${name} clearfix`}
    >
      {items}
    </div>
  );
}
