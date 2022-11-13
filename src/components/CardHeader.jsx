import React from 'react';

export default function CardHeader({ img, name }) {
  return (
    <div className={`clash-card__image clash-card__image--${name}`}>
      <img src={img} alt={name} />
    </div>
  );
}
