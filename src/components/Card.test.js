import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

// console.log(shallow(<Card />))
it('se espera renderizar el componente Card', () => {
  // expect(shallow(<Card />).length).toEqual(1);
  expect(shallow(<Card />)).toMatchSnapshot();
})

