import React from 'react';

export default function CardBody({ name, level, description }) {
  return (
    <>
      <div className={`clash-card__level clash-card__level--${name}`}>
        {level}
      </div>
      <div className="clash-card__unit-name">The {name}</div>
      <div className="clash-card__unit-description">{description}</div>
    </>
  );
}
