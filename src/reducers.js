import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants.js'

const initialStateSearch = {
    searchField : ''
}

// A Reducer take an action and spit out a state
// Reducer 1
export const searchRobots = (state=initialStateSearch, action={}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      //This is a way to return a new state with everything in the state
      //plus the updating of searchField with the payload text  
      //It's standard redux syntax
      return Object.assign({}, state, {searchField: action.payload});
      //another way:
      //return { ...state, searchField: action.payload }
    default:
      return state;
  }
}

const initialStateRobots = {
  robots: [],
  isPending : false,
  error: ''
}

// Reducer 2
export const requestRobots = (state=initialStateRobots, action={}) => {
  switch(action.type) {
    case REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, { isPending: true })
    case REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, state, { robots: action.payload, isPending: false})
    case REQUEST_ROBOTS_FAILED:
      return Object.assign({}, state, { error: action.payload, isPending: false})
    default:
      return state;
  }
}