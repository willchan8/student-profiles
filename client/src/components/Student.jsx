import React from 'react';
import ExpandedList from './ExpandedList.jsx';

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      tags: [],
      newTag: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }));
  }

  handleChange(e) {
    this.setState({newTag: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let newTag = this.state.newTag;
    this.setState({ 
      tags: [...this.state.tags, newTag],
      newTag: ''
    });
  }

  render() {

    const { expanded, tags, newTag } = this.state;
    const { searchedTag, student } = this.props;

    const average = arr => arr.reduce(((a, b) => a + Number(b)), 0) / arr.length;

    const expandText = expanded ? '−' : '+';

    let studentClass = (tags.some(tag => tag.toLowerCase().includes(searchedTag)) || !searchedTag) ? 'student-container' : 'hide';

    return (
      <div className={studentClass}>
        <img src={student.pic} className="pic" />
        <div className="info-and-name">
          <div className="name">{student.firstName + ' ' + student.lastName}</div>
          <div className="info">
            <div>Email: {student.email}</div>
            <div>Company: {student.company}</div>
            <div>Skill: {student.skill}</div>
            <div>Average: {average(student.grades)}%</div>
            <ExpandedList 
              grades={student.grades} 
              expanded={expanded} 
              tags={tags}
              newTag={newTag}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          </div>
        </div>

        <span className="expand-icon" onClick={this.handleClick}>{expandText}</span>
      </div>
    );
  }
}

export default Student;