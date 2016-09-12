import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

class Editor extends Component {
  constructor(props) {
    super(props);
  }

  handleChange() {
    const node = findDOMNode(this.refs.textarea);
    const text = node.value;
    this.props.onEditNote(text);
  }

  render() {
    const { editContent } = this.props;
    return (
      <div className="editor">
        <textarea
          onChange = {() => this.handleChange()}
          ref="textarea"
          value={editContent}
        >
        </textarea>
      }
      </div>
    );
  }
}

Editor.propTypes = {
  onEditNote: PropTypes.func.isRequired,
  editContent: PropTypes.string.isRequired
};

export default Editor;
