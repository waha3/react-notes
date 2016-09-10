// const state = {
//   noteList: [{
//     content: 'xxxxx',
//     active: true,
//     favorite: false,
//   }, {
//     content: 'aaaaa',
//     active: false,
//     favorite: false
//   }]
// };

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
          content: 'xxxx',
          active: true,
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
