import { combineReducers } from 'redux';
import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE, TOGGLE_FAVORITE, SELECT_NOTE, FILTER_SHOW } from '../actions/index.js';

function deleteNote(state) {
  const tempArr = state.filter(val => {
    if (!val.active) {
      return val;
    }
  });

  return tempArr.map((val, index) => {
    if (index === 0) {
      return Object.assign({}, val, {
        active: true
      });
    } else {
      return val;
    }
  });
}

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
      return deleteNote(state);
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

function setFilterShow(state = 'show_all', action) {
  switch (action.type) {
    case FILTER_SHOW:
      return action.filter;
    default:
      return state;
  }
}

const noteApp = combineReducers({
  notesList,
  setFilterShow
});

export default noteApp;
