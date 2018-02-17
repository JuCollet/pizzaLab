import React from 'react';

import Layout from '../components/Layout';

const History = () => (
  <Layout>
    <div>
      <div className="history-slide1">
        <div className="history-slide1-left" />
        <div className="history-slide1-right" />
      </div>
      <div className="history-slide2" />
      <style jsx>{`
        .history-slide1 {
          display: flex;
          flex-wrap: wrap;
          background-color: #EADBCB;
        }
        .history-slide1-left {
          flex-grow: 1;
          min-width: 384px;
          min-height: 450px;
          background-image: url("/static/history-slide1-family.png");
          background-size: 80%;
          background-repeat: no-repeat;
          background-position: center center;
        }
        .history-slide1-right {
          flex-grow: 1;
          min-width: 384px;
          min-height: 450px;
        }
        .history-slide2 {
          min-height: 500px;
        }
      `}
      </style>
    </div>
  </Layout>
);

export default History;

