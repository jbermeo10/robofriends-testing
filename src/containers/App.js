import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { setSearchField, requestRobots } from '../actions'; //Importing the actions

import MainPage from '../components/MainPage';
import './App.css';


//piece of state to listen to and send as props
const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

//actions to listen to that need to gets dispatched
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {
  render() {
    return <MainPage { ...this.props }/>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App); 