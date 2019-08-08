import React from 'react';
import Score from './Score.jsx';
import AddTag from './AddTag.jsx';
import TagList from './TagList.jsx';

class ExpandedList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { expanded, grades, tags, newTag, handleChange, handleSubmit } = this.props;

    const expandClass = expanded ? 'expanded-list' : 'hide';

    return (
      <div className={expandClass}>
        { grades.map((grade, index) => <Score key={index} index={index} grade={grade} />) }
        <TagList tags={tags} />
        <AddTag handleChange={handleChange} handleSubmit={handleSubmit} newTag={newTag}/>
      </div>
    );
  }
}

export default ExpandedList;