import axios from 'axios'

export default class Course {
  constructor() {
    this.url = 'https://wbdv-generic-server.herokuapp.com/api/ccf/courses'
  }

  createCourse(course) {
    return axios.post(this.url, course)

    // return fetch(this.url,
    //     {
    //       method: 'POST',
    //       body: JSON.stringify(course),
    //       headers: {
    //         'Content-Type': 'application/json'
    //       }
    //     }).then(resp => resp.json)
  }
}