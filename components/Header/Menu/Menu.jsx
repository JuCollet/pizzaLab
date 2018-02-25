import React from 'react';
import styled from 'styled-components';
import Link from '../Link/Link';

const links = [
  { title: "L'atelier", page: 'configurator' },
  { title: 'Les créations', page: 'collection' },
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
