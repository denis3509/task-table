import React, {Component} from 'react'
import HomePage from '../../components/HomePage'
import {connect} from 'react-redux'
import {compose, bindActionCreators} from 'redux'

const HomePageContainer = WrappedComponent => {
  return class HomePageContainer extends  Component {
    constructor(props) {
      super(props);
    }

    render () {
      return <WrappedComponent
        {...this.props}
      />
    }
  }
};
const mapStateToProps = state => ({

});

export default compose(HomePageContainer)(HomePage);