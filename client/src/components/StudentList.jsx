import React from 'react';
import Student from './Student.jsx';

class StudentList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { students, searchedTag } = this.props;

    return (
      <div className="student-list">
        { students.map(student => <Student key={student.id} student={student} searchedTag={searchedTag}/>) }
      </div>
    );
  }
}

export default StudentList;