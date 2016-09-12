import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addNote, deleteNote, toggleFavorite, selectNote, editNote, filterShow } from '../actions/index.js';
import ToolBar from '../components/ToolBar.js';
import Lists from '../components/Lists.js';
import Editor from '../components/Editor';

import '../styles/app.less';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { dispatch, notesList, filters, editContent } = this.props;
    return (
      <div className="note_app">
        <ToolBar
          onAddClick={text => dispatch(addNote(text))}
          onDeleteClick={index => dispatch(deleteNote(index))}
          onToggleClick={index => dispatch(toggleFavorite(index))}
        />
        <Lists
          onSelectNote ={index => dispatch(selectNote(index))}
          onFilterShow={filter => dispatch(filterShow(filter))}
          filters={filters}
          lists={notesList}
        />
      <Editor
        onEditNote={text => dispatch(editNote(text))}
        editContent={editContent}
      />
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  notesList: PropTypes.array.isRequired,
  filters: PropTypes.string.isRequired,
  editContent: PropTypes.string.isRequired
};

function selectFilter(state) {
  switch (state.setFilterShow) {
    case 'show_all':
      return state.notesList;
    case 'show_favorites':
      return state.notesList.filter(val => {
        if (val.favorite) {
          return val;
        }
      });
    default:
      return state.notesList;
  }
}

function filterContent(lists) {
  let content = '';
  for (let i of lists) {
    if (i.active) {
      content = i.content;
    }
  }
  return content;
}

function select(state) {
  return {
    notesList: selectFilter(state),
    filters: state.setFilterShow,
    editContent: filterContent(state.notesList)
  };
}

export default connect(select)(App);
