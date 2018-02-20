import React from 'react';
import styled from 'styled-components';
import Link from '../Link/Link';

const links = [
  { title: 'Notre histoire', page: 'history' },
  { title: 'Nos pizzas', page: 'pizzas' },
  { title: "L'atelier", page: 'shop' },
];

const Menu = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export default () => (
  <Menu className="menu">
    {links.map(link => <Link key={link.page} title={link.title} page={link.page} />)}
  </Menu>
);
