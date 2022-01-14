import React from 'react';
import { shallow } from 'enzyme';
import Cardlist from './Cardlist';

it('se espera renderizar el componente Cardlist', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'John Snow',
      username: 'JohnJohn',
      email: 'john@gmail.com'
    }
  ]
  expect(shallow(<Cardlist robots={mockRobots}/>)).toMatchSnapshot();
})

