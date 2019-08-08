import React from 'react';
import axios from 'axios';
import StudentList from './StudentList.jsx';
import SearchName from './SearchName.jsx';
import SearchTag from './SearchTag.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      searchedName: '',
      searchedTag: '',
    };

    this.handleSearchName = this.handleSearchName.bind(this);
    this.handleSearchTag = this.handleSearchTag.bind(this);
  }

  componentDidMount() {
    axios.get(`https://www.hatchways.io/api/assessment/students`)
      .then((response) => {
        this.setState({
          students: response.data.students
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleSearchName(e) {
    this.setState({
      searchedName: e.target.value.toLowerCase(),
    });
  }

  handleSearchTag(e) {
    this.setState({
      searchedTag: e.target.value.toLowerCase(),
    })
  }

  render() {
    const { students, searchedName, searchedTag } = this.state;

    let filteredNames = students.filter(student => ((student.firstName + ' ' + student.lastName).toLowerCase().includes(searchedName)));

    return (
      <div className="app-container">
        <SearchName handleSearch={this.handleSearchName}/>
        <SearchTag handleSearch={this.handleSearchTag}/>
        <StudentList students={filteredNames} searchedTag={searchedTag}/>
      </div>
    );
  }
}

export default App;
