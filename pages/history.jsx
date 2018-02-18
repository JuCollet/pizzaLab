import React from 'react';

import Layout from '../components/Layout';
import Article from '../components/Article/Article';

const articleFamily = {
  title: 'Une histoire de famille',
  text: "Mlkshk thundercats hexagon intelligentsia ugh. Messenger bag hella pork belly portland, selfies master cleanse gluten-free blue bottle food truck. Shabby chic iceland cloud bread cold-pressed dreamcatcher. Small batch adaptogen unicorn tumblr swag fixie you probably haven't heard of them austin, pop-up irony seitan. VHS raw denim whatever humblebrag poke.",
};

const articleTradition = {
  title: 'La recherche du goût',
  text: "Mlkshk thundercats hexagon intelligentsia ugh. Messenger bag hella pork belly portland, selfies master cleanse gluten-free blue bottle food truck. Shabby chic iceland cloud bread cold-pressed dreamcatcher. Small batch adaptogen unicorn tumblr swag fixie you probably haven't heard of them austin, pop-up irony seitan. VHS raw denim whatever humblebrag poke.",
};

const History = () => (
  <Layout>
    <div>
      <div className="history-row history-row-1">
        <div className="history-slide history-slide-left" />
        <div className="history-slide">
          <Article
            title={articleFamily.title}
            text={articleFamily.text}
          />
        </div>
      </div>
      <div className="history-row history-row-2">
        <div className="history-slide history-slide-left">
          <Article
            title={articleTradition.title}
            text={articleTradition.text}
            boxed
          />
        </div>
        <div className="history-slide" />
      </div>
      <style jsx>{`
        .history-row {
          display: flex;
          flex-wrap: wrap;
        }
        .history-row-1 {
          background-color: #EADBCB;
        }
        .history-slide {
          display: flex;
          align-items: center;
          position: relative;
          flex-grow: 1;
          min-height: 500px;
          min-width: 400px;
        }
        .history-row-1 .history-slide-left {
          background-image: url("/static/history-slide1-family.png");
          background-size: 80%;
          background-repeat: no-repeat;
          background-position: center center;
        }
        .history-row-2 {
          background-image: url("/static/history-slide2-fire.png");
          background-size: cover;
          background-repeat: no-repeat;
          background-position: top center;
        }
      `}
      </style>
    </div>
  </Layout>
);

export default History;

