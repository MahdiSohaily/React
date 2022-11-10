import React from 'react';

export default function Link({ id, title, handleNavigation }) {
  return <li onClick={() => handleNavigation(id)}>{title}</li>;
}
