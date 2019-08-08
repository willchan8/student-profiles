import React from 'react';

class Tag extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tag } = this.props;

    return (
      <div className="tag">
        { tag }
      </div>
    );
  }
}

export default Tag;