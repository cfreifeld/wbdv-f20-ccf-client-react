import React from 'react'
//import logo from './logo.svg'
//import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
//import HelloWorld from "./components/HelloWorld"
import CourseCard from "./components/CourseCard"
import ModuleList from "./components/ModuleList";

function App() {
  return (
      <div className="container">
        <h1>Whiteboard</h1>
        <ModuleList/>
        <div className="card-deck">
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
        </div>
      </div>
  )
}

export default App
