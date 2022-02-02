import React from "react"

export default class StudentList extends React.Component {

  state = {
    loading: true
  }

  //check if component has rendered at least once
  async componentDidMount() {
    const url = "https://api.hatchways.io/assessment/students";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }

  render() {
    return <div>
      {this.state.loading ? <div>loading...</div> : <div>student..</div>}
    </div>
  }
}