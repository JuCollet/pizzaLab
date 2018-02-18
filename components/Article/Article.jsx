import React from 'react';
import PropTypes from 'prop-types';

const Article = props => (
  <div className={`article-wrapper ${props.boxed ? 'article-wrapper-box' : ''}`}>
    <div className={`article ${props.boxed ? 'article-box' : ''}`} >
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </div>
    <style jsx>{`
        h1 {
          display: inline-block;
          padding: 0px 0px 10px 0px;
          margin: 0;
          font-family: Bitter;
          color: #2E2E2E;
          border-bottom: 2px dotted #2E2E2E;
        }
        p {
          font-family: Roboto;
          font-size: 1em;
          margin-bottom: 0;
        }
        .article-wrapper {
          position: absolute;
          width: 80%;
          margin: auto;
          left: 0;
          right: 0;
        }
        .article {
          padding: 30px;
        }
        .article-wrapper-box {
          background-color: rgba(255,255,255,.9);
          padding: 20px;
        }
        .article-box {
          border: 1px solid #2E2E2E;
        }
      `}
    </style>
  </div>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  boxed: PropTypes.bool,
};

Article.defaultProps = {
  boxed: false,
};

export default Article;
