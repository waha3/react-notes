import React, { Component, PropTypes } from 'react';

class Lists extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(index) {
    this.props.onSelectNote(index);
  }

  handleClickFilterShow(filter) {
    this.props.onFilterShow(filter);
  }

  render() {
    return (
      <div className="note_lists">
        <h2>redux notes</h2>
        <div className="activeBar">
          <button className={this.props.filters === 'show_all' ? 'active' : ''} onClick={() => this.handleClickFilterShow('show_all')}>All Notes</button>
          <button className={this.props.filters === 'show_favorites' ? 'active' : ''} onClick={() => this.handleClickFilterShow('show_favorites')}>Favorites</button>
        </div>
        <div className="lists">
        {
          this.props.lists.map((v, i) =>
            <div className={v.active ? 'active' : ''} key = {i} onClick={() => this.handleClick(i)}>{v.content}</div>
          )
        }
        </div>
      </div>
    );
  }
}

Lists.propTypes = {
  lists: PropTypes.array.isRequired,
  filters: PropTypes.string.isRequired,
  onSelectNote: PropTypes.func.isRequired,
  onFilterShow: PropTypes.func.isRequired
};

export default Lists;
