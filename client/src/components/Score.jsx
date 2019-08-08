import React from 'react';

class Score extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { index, grade } = this.props;
    return (
      <div>
        Test {index + 1}: <span className="grade">{grade}%</span>
      </div>
    );
  }
}

export default Score;