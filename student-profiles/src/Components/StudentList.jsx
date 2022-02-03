
import React from "react";

export default class getStudentList extends React.Component {
  state = {
    loading: true,
    people: []
  };

  async componentDidMount() {
    const url = "https://api.hatchways.io/assessment/students";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ people: data.students, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.people.length) {
      return <div>List Not Found</div>;
    }


    return (
      <div>
        {this.state.people.map(person => (
          <div key={person.firstName + person.lastName}>
            <img src={person.pic} />
            <div>{person.firstName + " " + person.lastName}</div>
             <div>{"email: " + person.email}</div>
            <div>{"city: " + person.city}</div>
            <div>{"company: " + person.company}</div>
            <div>{"ID# " + person.id}</div>
          </div>
        ))}
      </div>
    );
  }
}