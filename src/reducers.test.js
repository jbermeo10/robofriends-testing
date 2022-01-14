import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants.js';

import * as reducers from './reducers';

describe('searchRobots 1er reducer', () => {
  
  const initialStateSearch = {
    searchField: ''
  }

  it('debe retornar el estado inicial', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: ''})
  })

  // El reducer searchRobots debe sensar cambios en CHANGE_SEARCHFIELD
  // para cambiar de estado
  it('debe manejar CHANGE_SEARCHFIELD', () => {
    expect(reducers.searchRobots(initialStateSearch, {
      type: CHANGE_SEARCH_FIELD,
      payload: 'abc'
    })).toEqual({ searchField: 'abc'})
  })

})

// El reducer requestRobots debe manejar 3 acciones
describe('requestRobots 2do reducer', () => {
  
  const initialStateRobots = {
    robots: [],
    isPending : false,
    error: ''
  }

  it('debe retornar el estado inicial', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots)
  })

  it('debe manejar la accion REQUEST_ROBOTS_PENDING', () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_PENDING
    })).toEqual({ 
      robots: [],
      isPending: true,
      error: ''
    })
  })

  it('debe manejar la accion REQUEST_ROBOTS_SUCCESS', () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_SUCCESS,
      payload: [{
        id: '123',
        name: 'test',
        email: 'test@gmail.com'
      }]
    })).toEqual({ 
      robots: [{
        id: '123',
        name: 'test',
        email: 'test@gmail.com'
      }],
      isPending: false,
      error: ''
    })
  })

  it('debe manejar la accion REQUEST_ROBOTS_FAILED', () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_FAILED,
      payload: 'NOOOOO!!!!!'
    })).toEqual({
      robots: [],
      isPending: false,
      error: 'NOOOOO!!!!!'
    })
  })
})