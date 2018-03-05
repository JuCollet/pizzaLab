import React, { PureComponent } from 'react';
import withRedux from 'next-redux-wrapper';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { deleteSelection, toppingsFetch } from '../actions/configurator';

import store from '../store';
import Layout from '../components/Layout';
import ToppingList from '../components/ToppingList/ToppingList';
import Button from '../components/Button/Button';

const PageWrapper = styled.div`
  display: flex;
  height: 100%;
`;

const PagePreview = styled.div`
  width: 50%;
  background-image: url("/static/pizza.png");
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
`;

const PageTools = styled.div`
  overflow: auto;
  height: calc(100% - 125px);
  padding: 100px 5% 25px 5%;
  width: 50%;
`;

const Title = styled.h1`
  display: inline-block;
  padding-bottom: 15px;
  font-family: Bitter;  
  font-size: 2em;
  color: white;
  text-align: center;
  border-bottom: 1px dotted white;

`;

class Configurator extends PureComponent {
  componentDidMount() {
    this.props.toppingsFetch();
  }

  render() {
    if (this.props.isFetching) return null;
    return (
      <Layout>
        <PageWrapper>
          <PagePreview />
          <PageTools>
            <Title>Configurateur</Title>
            <ToppingList toppings={this.props.toppings} selection={this.props.selection} />
            <Button title="Ajouter au panier" size={40} />
            <Button title="Reset" color="grey" size={40} clickHandler={this.props.deleteSelection} />
          </PageTools>
        </PageWrapper>
      </Layout>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteSelection, toppingsFetch }, dispatch);
}

function mapStateToProps(state) {
  return {
    toppings: state.configurator.toppings,
    selection: state.configurator.selection,
    isFetching: state.isFetching,
  };
}

Configurator.propTypes = {
  isFetching: PropTypes.bool,
  toppings: PropTypes.objectOf(PropTypes.object).isRequired,
  selection: PropTypes.shape({
    price: PropTypes.number.isRequired,
  }).isRequired,
  deleteSelection: PropTypes.func.isRequired,
  toppingsFetch: PropTypes.func.isRequired,
};

Configurator.defaultProps = {
  isFetching: false,
};

export default withRedux(store, mapStateToProps, mapDispatchToProps)(Configurator);

