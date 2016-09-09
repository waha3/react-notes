export const ADD_NOTE = 'ADD_NOTE';
export const SELECT_NOTE = 'SELECT_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const FILTER_SHOW = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_FAVORITES: 'SHOW_FAVORITES'
};

export function addNote(text) {
  return {
    type: ADD_NOTE,
    text
  };
}

export function selectNote(index) {
  return {
    type: SELECT_NOTE,
    index
  };
}

export function editNote(text) {
  return {
    type: EDIT_NOTE,
    text
  };
}

export function deleteNote(index) {
  return {
    type: DELETE_NOTE,
    index
  };
}

export function toggleFavorite(index) {
  return {
    type: TOGGLE_FAVORITE,
    index
  };
}

export function filterShow(filter) {
  return {
    type: FILTER_SHOW,
    filter
  };
}
