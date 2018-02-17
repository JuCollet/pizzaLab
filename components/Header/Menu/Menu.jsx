import React from 'react';
import Link from '../../Link/Link';

const links = [
  { title: 'Notre histoire', page: 'history' },
  { title: 'Nos pizzas', page: 'pizzas' },
  { title: "L'atelier", page: 'shop' },
];

export default () => (
  <ul className="menu">
    {links.map(link => <Link key={link.page} title={link.title} page={link.page} />)}
    <style jsx>{`
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
    `}
    </style>
  </ul>
);
