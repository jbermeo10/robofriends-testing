import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

// it('se espera renderizar el componente MainPage', () => {
//   const mockStore = {
//     robots: [],
//     searchField: ''
//   }
//   expect(shallow(<MainPage store={mockStore}/>)).toMatchSnapshot();
// })

let wrapper;

beforeEach( () =>  {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false,
    error: ''
  }
  wrapper = shallow(<MainPage { ...mockProps}/>)
})


it('renderiza MainPage sin caerse', () => {
  expect(wrapper).toMatchSnapshot();
})

it('filtra los robots correctamente', () => {
  expect(wrapper.instance().filterRobots()).toEqual([]);
})

it('filtra los robots correctamente 2', () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'John',
      email: 'john@gmail.com'
    }],
    searchField: 'john',
    isPending: false,
    error: ''
  }
  const wrapper2 = shallow(<MainPage { ...mockProps2}/>)
  expect(wrapper2.instance().filterRobots()).toEqual([{
    id: 3,
    name: 'John',
    email: 'john@gmail.com'
  }])
})

it('filtra los robots correctamente 3', () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'John',
      email: 'john@gmail.com'
    }],
    searchField: 'a',
    isPending: false,
    error: ''
  }
  const filteredRobots = []
  const wrapper3 = shallow(<MainPage { ...mockProps3}/>)
  expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots)
})