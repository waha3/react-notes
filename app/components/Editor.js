import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

class Editor extends Component {
  constructor(props) {
    super(props);
  }

  handleKeyDown() {
    const node = findDOMNode(this.refs.textarea);
    const text = node.value.trim();
    this.props.onEditNote(text);
  }

  render() {
    return (
      <div className="editor">
        <textarea onKeyDown = {() => this.handleKeyDown()} ref="textarea"></textarea>
      </div>
    );
  }
}

Editor.propTypes = {
  onEditNote: PropTypes.func.isRequired
};

export default Editor;
