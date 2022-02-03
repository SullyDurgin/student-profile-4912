import React, { Component } from 'react'
import StudentList from './Components/StudentList'
import './styles.css'

class App extends Component {
	state = {
		visible: true,
	}

	render() {
		return (
			<div className='App'>
				<StudentList />
			</div>
		)
	}
}

export default App
