import React from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

export default function Card({ display }) {
  const { name, level, description, units, img } = display;
  return (
    <div className="clash-card barbarian">
      <CardHeader name={name} img={img} />
      <CardBody name={name} level={level} description={description} />
      <CardFooter units={units} />
    </div>
  );
}
