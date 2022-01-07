import React, { Component } from 'react';
//for Redux use
import { connect } from 'react-redux'; 
import { setSearchField, requestRobots } from '../actions'; //Importing the actions

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import Header from '../components/Header';
import './App.css';


//piece of state to listen to and send as props
const mapStateToProps = (state) => {
  return {
    // searchField: state.searchField
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
  constructor () {
    super()
    this.state = {
      count: 1
    }
  }

  componentDidMount() {
    this.props.onRequestRobots();
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response =>response.json())
    // .then(users => this.setState({ robots: users}));
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    
    return isPending ?
    <h1>Cargando...</h1> :
    (
      <div className='tc'>
        {/* <h1 className='f1'>Amigos Robots</h1> */}
        <Header count={this.state.count}/>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          { isPending ? <h1>Cargando...</h1> :
            <ErrorBoundry>
              <CardList robots={filteredRobots}/>
            </ErrorBoundry>
          }
        </Scroll>
      </div>
    );

  }
}

//below a change made for redux
export default connect(mapStateToProps, mapDispatchToProps)(App); 