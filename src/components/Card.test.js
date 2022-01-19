import React from 'react';
// import { shallow, mount, render } from 'enzyme';
import { shallow } from 'enzyme';
import Card from './Card';

// console.log(shallow(<Card />))
it('se espera renderizar el componente Card', () => {
  // Shallow solo renderiza el componente Card y no los 
  // componentes internos, de haberlos
  
  // expect(shallow(<Card />).length).toEqual(1);
  expect(shallow(<Card />)).toMatchSnapshot();

})

