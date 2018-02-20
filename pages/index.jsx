import React from 'react';
import withRedux from 'next-redux-wrapper';
import NextLink from 'next/link';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Button from '../components/Button/Button';
import initStore from '../store';

const Content = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  padding: 0;
  margin: 50px 0px 15px 0px;
  font-family: Bitter;
  font-size: 3.5em;
  opacity: .9;
  color: white;
  text-align: center;
`;

const SubTitle = styled.h3`
  padding: 0;
  margin: 0px 0px 30px 0px;
  font-size: 1.5em;
  font-family: Roboto;
  font-weight: 100;
  color: #FFFFFF;
  max-width: 600px;
  text-align: center;
`;

const Index = () => (
  <Layout>
    <Content>
      <Title>Votre pizza sur-mesure</Title>
      <SubTitle>Lorem ipsum dolor amet neutra four loko fashion
        axe forage hexagon sartorial food truck trust fund squid tbh.
      </SubTitle>
      <NextLink href="/pizzas">
        <a><Button title="Créer ma pizza" /></a>
      </NextLink>
    </Content>
  </Layout>
);

export default withRedux(initStore, null, null)(Index);
