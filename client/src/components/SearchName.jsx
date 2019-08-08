import React from 'react';

class SearchName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.handleSearch(e);
  }

  render() {
    return (
      <form onSubmit={e => e.preventDefault()}>
        <input className="searchName" type="text" placeholder="Search by name" onChange={ this.handleChange } />
      </form>
    )
  }
}

export default SearchName;