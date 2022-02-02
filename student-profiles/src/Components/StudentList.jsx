import React from "react"

export default class StudentList extends React.Component {

  state = {
    loading: true
  }


  //check if component has rendered at least once
  componentDidMount() {

  }

  render() {
    return <div>
      {this.state.loading ? <div>loading...</div> : <div>student..</div>}
    </div>
  }
}