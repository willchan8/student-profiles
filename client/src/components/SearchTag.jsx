import React from 'react';

class SearchTag extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.handleSearch(e);
  }

  render() {
    return (
      <form onSubmit={e => e.preventDefault()}>
        <input className="searchTag" type="text" placeholder="Search by tags" onChange={ this.handleChange } />
      </form>
    )
  }
}

export default SearchTag;