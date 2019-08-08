import React from 'react';
import Tag from './Tag.jsx';

class TagList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tags } = this.props;
    return (
      <div className="">
        { tags.map((tag, index) => <Tag key={index} tag={tag} />) }
      </div>
    );
  }
}

export default TagList;