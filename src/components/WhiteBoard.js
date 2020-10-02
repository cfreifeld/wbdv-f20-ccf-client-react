import React from "react";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseTable from "./CourseTable";
import CourseGrid from "./CourseGrid";
import axios from "axios";
import CourseEditor from "./CourseEditor";

export default class WhiteBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      selectedCourse: null,
      courses: []
    }
  }
  selectCourse = course =>
      this.setState({selectedCourse: course})

  componentDidMount() {
    axios.get('https://wbdv-generic-server.herokuapp.com/api/ccf/courses')
    .then(
        (result) => {
          //console.log(result)
          this.setState({
            isLoaded: true,
            courses: result.data,
            selectedCourse: result.data[0]
          })
        })
  }

  render() {
    return (
    <Router>
      <div>
        <Link to="/course/table">Table</Link>  |
        <Link to="/course/grid">Grid</Link>
        <Route path="/course/table"
               render={() => <CourseTable
                   selectCourse={this.selectCourse}
                   courses={this.state.courses}/>}/>
        <Route path="/course/grid"
               render={() => <CourseGrid
                   selectCourse={this.selectCourse}
                   courses={this.state.courses}/>}/>
        <Route path="/course/edit/:id"
                render={() => <CourseEditor
                   course={this.state.selectedCourse}/>}/>
      </div>
    </Router>
    )
  }
}