import withRedux from 'next-redux-wrapper';
import React from 'react';
import NextLink from 'next/link';

import Layout from '../components/Layout';
import Button from '../components/Button/Button';
import initStore from '../store';

const Index = () => (
  <Layout>
    <div className="index">
      <h1>Votre dealer de pizzas</h1>
      <h3>Lorem ipsum dolor amet neutra four loko fashion
        axe forage hexagon sartorial food truck trust fund squid tbh.
      </h3>
      <NextLink href="/pizzas">
        <a><Button title="Commander" size="btn-11" color="btn-red" /></a>
      </NextLink>
    </div>
    <style jsx>{`
      .index {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        background-image: url("/static/index-background.jpg");
        background-size: cover;
        background-position: center center;
      }
      h1 {
        padding: 0;
        margin: 0px 0px 15px 0px;
        font-family: Bitter;
        font-size: 3.5em;
        opacity: .9;
        color: white;
      }
      h3 {
        padding: 0;
        margin: 0px 0px 30px 0px;
        font-size: 1.5em;
        font-family: Roboto;
        font-weight: 100;
        color: #FFFFFF;
        max-width: 600px;
        text-align: center;
      }
    `}
    </style>
  </Layout>
);

export default withRedux(initStore, null, null)(Index);

