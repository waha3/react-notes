import { combineReducers } from 'redux';
import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE, TOGGLE_FAVORITE, SELECT_NOTE } from '../actions/index.js';

function notesList(state = [], action) {
  switch (action.type) {
    case ADD_NOTE:
      return [
        ...state.map(value => {
          return Object.assign({}, value, {
            active: false
          });
        }),
        {
          content: 'new note',
          active: true,
          favorite: false
        }
      ];
    case EDIT_NOTE:
      return state.map(value => {
        if (value.active) {
          return Object.assign({}, value, {
            content: action.text
          });
        }
        return Object.assign({}, value);
      });
    case DELETE_NOTE:
      return state.filter(val => {
        if (!val.active) {
          return Object.assign({}, val);
        }
      });
    case TOGGLE_FAVORITE:
      return state.map(val => {
        if (val.active) {
          return Object.assign({}, val, {
            favorite: !val.favorite
          });
        }
        return val;
      });
    case SELECT_NOTE:
      return state.map((value, index) => {
        if (index === action.index) {
          return Object.assign({}, value, {
            active: true
          });
        }
        return Object.assign({}, value, {
          active: false
        });
      });
    default:
      return state;
  }
}

const noteApp = combineReducers({
  notesList
});

export default noteApp;
