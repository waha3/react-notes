import React, { Component, PropTypes } from 'react';

class ToolBar extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(text, index) {
    switch (text) {
      case 'add':
        this.props.onAddClick();
        break;
      case 'like':
        this.props.onToggleClick(index);
        break;
      case 'delete':
        this.props.onDeleteClick(index);
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className="tool_bar">
        <div onClick={() => this.handleClick('add')}>ADD</div>
        <div onClick={(index) => this.handleClick('like', index)}>LIKE</div>
        <div onClick={(index) => this.handleClick('delete', index)}>DELETE</div>
      </div>
    );
  }
}

ToolBar.propTypes = {
  onAddClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onToggleClick: PropTypes.func.isRequired
};

export default ToolBar;
