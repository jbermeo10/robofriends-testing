import React, { Component } from 'react';
import { connect } from 'react-redux'; //for Redux use
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
//Importing the actions:
import { setSearchField, requestRobots } from '../actions'; //for Redux use 


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
  // constructor () {
  //   super()
  //   this.state = {
  //     robots: [],
  //     //searchfield: ''
  //   }
  // }

  componentDidMount() {
    this.props.onRequestRobots();
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response =>response.json())
    // .then(users => this.setState({ robots: users}));
  }

// onSearchChange = (event) => {
//   this.setState({searchfield: event.target.value})
// }

  render() {
    // const { robots } = this.state;
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    
    return isPending ?
    <h1>Cargando...</h1> :
    (
      <div className='tc'>
        <h1 className='f1'>Amigos Robots</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots}/>
          </ErrorBoundry>
        </Scroll>
      </div>
    );

  }
}

//below a change made for redux
export default connect(mapStateToProps, mapDispatchToProps)(App); 