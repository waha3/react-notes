import { combineReducers } from 'redux';
import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE, TOGGLE_FAVORITE, SELECT_NOTE } from '../actions/index.js';

function notesList(state = [], action) {
  switch (action.type) {
    case ADD_NOTE:
      return [
        ...state,
        {
          text: 'a new note',
          favorite: false
        }
      ];
    case EDIT_NOTE:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          text: action.text,
          favorite: false
        }),
        ...state.slice(action.index + 1)
      ];
    case DELETE_NOTE:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    case TOGGLE_FAVORITE:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          text: action.text,
          favorite: !state[action.index].favorite
        }),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
}

export function selectActive(state = 0, action) {
  switch (action.type) {
    case ADD_NOTE:
      return state + 1;
    case SELECT_NOTE:
      return action.index;
    default:
      return state;
  }
}

const noteApp = combineReducers({
  notesList,
  selectActive
});

export default noteApp;
