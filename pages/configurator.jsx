import React, { PureComponent } from 'react';
import withRedux from 'next-redux-wrapper';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { toppingsFetch } from '../actions/configurator';

import store from '../store';
import Layout from '../components/Layout';
import ToppingList from '../components/ToppingList/ToppingList';

const PageWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

class Configurator extends PureComponent {
  componentDidMount() {
    this.props.toppingsFetch();
  }

  render() {
    if ((this.props.toppings && this.props.toppings.length === 0)
        || this.props.isFetching) return null;
    return (
      <Layout>
        <PageWrapper>
          <ToppingList toppings={this.props.toppings} />
        </PageWrapper>
      </Layout>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toppingsFetch }, dispatch);
}

function mapStateToProps(state) {
  return {
    toppings: state.configurator.toppings,
    isFetching: state.isFetching,
  };
}

Configurator.propTypes = {
  isFetching: PropTypes.bool,
  toppings: PropTypes.arrayOf(PropTypes.object),
  toppingsFetch: PropTypes.func.isRequired,
};

Configurator.defaultProps = {
  toppings: [],
  isFetching: false,
};

export default withRedux(store, mapStateToProps, mapDispatchToProps)(Configurator);

