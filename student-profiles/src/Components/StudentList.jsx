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
    this.setState({student: data.results[0] })
    console.log(data.results[0]);
  }

  render() {
    return <div>
      {this.state.loading || !this.state.student ? (
       <div>loading...</div>
       ) : (
       <div>student info</div>
       )}
    </div>
  }
}