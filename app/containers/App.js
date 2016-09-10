import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addNote, deleteNote, toggleFavorite, selectNote, editNote } from '../actions/index.js';
import ToolBar from '../components/ToolBar.js';
import Lists from '../components/Lists.js';
import Editor from '../components/Editor';

import '../styles/app.less';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { dispatch, notesList } = this.props;
    return (
      <div className="note_app">
        <ToolBar
          onAddClick = {text => dispatch(addNote(text))}
          onDeleteClick = {index => dispatch(deleteNote(index))}
          onToggleClick = {index => dispatch(toggleFavorite(index))}
        />
        <Lists
          onSelectNote = {index => dispatch(selectNote(index))}
          lists = {notesList}
        />
      <Editor
        onEditNote = {text => dispatch(editNote(text))}
      />
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  notesList: PropTypes.array.isRequired
};

function select(state) {
  return {
    notesList: state.notesList
  };
}

export default connect(select)(App);
