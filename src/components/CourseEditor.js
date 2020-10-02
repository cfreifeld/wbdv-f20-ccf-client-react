import React from 'react'
import ModuleList from "./ModuleList";

export default class CourseEditor extends React.Component {
  render() {
    return (
    <div className="row">
      <h3>{this.props.course.title}</h3>
      <div className="col-3">
        <ModuleList modules=
                        {this.props.course.modules}/></div>
      <div className="col-3">
        {/*
        <LessonTabs lessons={  }/>
        <TopicPills topics={  }/>
        */}
      </div>
    </div>
    )
  }
}