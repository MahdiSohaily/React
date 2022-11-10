import React from 'react';
import Link from './Link';

export default function SideBar({ posts }) {
  const navLinks = posts && posts.map((item, index) => (
    <Link key={index} title={item.title} />
  ));
  return (
    <aside>
      <ul>{navLinks}</ul>
    </aside>
  );
}
