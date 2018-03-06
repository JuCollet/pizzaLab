import React, { PureComponent } from 'react';
import withRedux from 'next-redux-wrapper';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { updateSelection } from '../../../actions/configurator';
import store from '../../../store';
import Counter from '../../Counter/Counter';

const StyledDescriptionWrapper = styled.div`
  overflow: hidden;
  height: ${props => (props.isDescriptionHidden ? '0px' : 'initial')};
  background-color: rgba(1,1,1,.5);
  padding-bottom: ${props => (props.isDescriptionHidden ? '0px' : '12px')};
  border-radius: 0px 0px 4px 4px;
  transition: .2s;
`;

const Description = styled.span`
  font-family: Roboto;
  font-size: .9em;
  font-weight: 300;
  margin-left: 12px;
  opacity: ${props => (props.isDescriptionHidden ? 0 : 1)};
  transition: .2s;
  color: #FFFFFF;
`;

const StyledIngredientWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  padding: 12px;
  background-color: rgba(1,1,1,.5);
  border-radius: ${props => (props.isDescriptionHidden ? '4px' : '4px 4px 0px 0px')};
`;

const Ingredient = styled.span`
  font-family: Roboto;
  font-weight: 400;
  color: #FFFFFF;
`;

const StyledToppingItem = styled.li`
  margin-bottom: 10px;
`;

class ToppingItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isDescriptionHidden: true,
    };
    this.descriptionToggle = this.descriptionToggle.bind(this);
  }

  descriptionToggle() {
    this.setState({
      isDescriptionHidden: !this.state.isDescriptionHidden,
    });
  }

  render() {
    return (
      <StyledToppingItem>
        <StyledIngredientWrapper isDescriptionHidden={this.state.isDescriptionHidden} >
          <Ingredient onClick={this.descriptionToggle}>{this.props.name}</Ingredient>
          <Counter
            amount={this.props.amount}
            max={this.props.max}
            name={this.props.name}
            clickHandler={this.props.updateSelection}
          />
        </StyledIngredientWrapper>
        <StyledDescriptionWrapper isDescriptionHidden={this.state.isDescriptionHidden} >
          <Description isDescriptionHidden={this.state.isDescriptionHidden} >
            &quot;{this.props.description}&quot;
          </Description>
        </StyledDescriptionWrapper>
      </StyledToppingItem>
    );
  }
}

ToppingItem.propTypes = {
  description: PropTypes.string,
  name: PropTypes.string.isRequired,
  updateSelection: PropTypes.func.isRequired,
  amount: PropTypes.number,
  max: PropTypes.number,
};

ToppingItem.defaultProps = {
  amount: 0,
  description: 'Aucune description',
  max: 3,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateSelection }, dispatch);
}
export default withRedux(store, null, mapDispatchToProps)(ToppingItem);
