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
        margin: 0px 0px 0px 25px;
        padding: 0;
      }

      li {
        display: inline-block;
        font-family: Bitter;
        color: white;
        margin-left: 50px;
      }

    `}
    </style>
  </ul>
);
