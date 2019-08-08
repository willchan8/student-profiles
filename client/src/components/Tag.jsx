import React from 'react';

class Tag extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tag } = this.props;

    return (
      <div className="tag">
        { tag.charAt(0).toUpperCase() + tag.slice(1) }
      </div>
    );
  }
}

export default Tag;