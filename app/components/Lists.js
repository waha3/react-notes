import React, { Component, PropTypes } from 'react';

class Lists extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(index) {
    this.props.onSelectNote(index);
  }
  render() {
    return (
      <div className="note_lists">
        <h2>NOTES WITH REDUX</h2>
        <div className="activeBar">
          <button className="active">All Notes</button>
          <button>Favorites</button>
        </div>
        <div className="lists">
        {
          this.props.lists.map((v, i) =>
            <div key = {i} onClick={() => this.handleClick(i)}>{v.text}</div>
          )
        }
        </div>
      </div>
    );
  }
}

Lists.propTypes = {
  lists: PropTypes.array.isRequired,
  onSelectNote: PropTypes.func.isRequired
};

export default Lists;
