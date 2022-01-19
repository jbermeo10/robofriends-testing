import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

it('se espera renderizar el componente CardList', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'John Snow',
      username: 'JohnJohn',
      email: 'john@gmail.com'
    }
  ]
  expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
})

