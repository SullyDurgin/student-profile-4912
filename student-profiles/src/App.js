import React, { useState, useEffect } from 'react'
import './styles.css'
import Axios from 'axios'

function App() {
  const[loading, setLoading] = useState(true)
  const[content, setContent] = useState()


  useEffect(() => {
    async function getStudents() {
      const res = await Axios.get(
				'https://api.hatchways.io/assessment/students'
			)
      setContent(res.data.students)
      console.log(content)
      setLoading(false)
    }
    getStudents()
  }, [])

	return (
		<div className='App'>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				content.map((item) => (
					<div className='studentCard' key={item.firstName + item.lastName}>
						<img src={item.pic} />
						<div className='studentInfo'>
							<div
								className='studentName'
								style={{ textTransform: 'uppercase' }}>
								{item.firstName + ' ' + item.lastName}
							</div>
							<div className='moreInfo'>
								<div>{'Email: ' + item.email}</div>
								<div>{'Company: ' + item.company}</div>
								<div>{'Skill: ' + item.skill}</div>
								<div>
									Average:{' '}
									{item.grades.reduce((a, b) => Number(a) + Number(b)) /
										item.grades.length}{' '}
									%
								</div>
							</div>
						</div>
					</div>
				))
			)}
		</div>
	)
}

export default App