import React from 'react';

class AddTag extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="addTag" onSubmit={this.props.handleSubmit}>
        <input type="text" value={this.props.newTag} placeholder="Add a tag" onChange={ this.props.handleChange } />
      </form>
    )
  }
}

export default AddTag;