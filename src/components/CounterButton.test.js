import React from 'react';
import { shallow } from 'enzyme';
import CounterButton from './CounterButton';

it('se espera renderizar el componente CounterButton', () => {
  const mockColor = 'red'
  expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
})

it('incrementa correctamente el contador', () => {
  const mockColor = 'red'
  const wrapper = shallow(<CounterButton color={mockColor} />);

  wrapper.find('[id="counter"]').simulate('click');
  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.state()).toEqual({ count: 2 });
  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.state()).toEqual({ count: 3 });
  wrapper.find('[id="counter"]').simulate('keypress');
  expect(wrapper.state()).toEqual({ count: 3 });

  // expect(wrapper.props().color).toEqual({ color: 'red' });
  expect(wrapper.props().color).toEqual('red');
})