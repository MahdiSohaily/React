import React from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

export default function Card() {
  return (
    <div className="clash-card barbarian">
      <CardHeader />
      <CardBody />
      <CardFooter />
    </div>
  );
}