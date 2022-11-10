import React from 'react';
import Link from './Link';

export default function SideBar({ posts, handleNavigation }) {
  const navLinks =
    posts &&
    posts.map((item, index) => (
      <Link
        key={index}
        id={index}
        title={item.title}
        handleNavigation={handleNavigation}
      />
    ));
  return (
    <aside>
      <ul>{navLinks}</ul>
    </aside>
  );
}
