import React from "react";
import "../styles.css"

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
          <div className="studentCard" key={person.firstName + person.lastName}>
            <img src={person.pic} />
            <div className="studentInfo">
            <div className="studentName" style={{ textTransform: 'uppercase'}}>{person.firstName + " " + person.lastName}</div>
            <div className="moreInfo">
             <div>{"Email: " + person.email}</div>
            <div>{"Company: " + person.company}</div>
            <div>{"Skill: " + person.skill}</div>
            <div>Average:{" "}
            {person.grades.reduce((a, b) => Number(a) + Number(b)) /
              person.grades.length}{" "}
            %</div>
            </div>
          </div>
          </div>
        ))}
      </div>
    );
  }
}