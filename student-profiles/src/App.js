import React, { useState, useEffect } from 'react'
import './styles.css'
import Axios from 'axios'

function App() {
	const [loading, setLoading] = useState(true)
	const [content, setContent] = useState()
	const [input, setInput] = useState('')
	const [output, setOutput] = useState([])
	const [data, setData] = useState([])

	useEffect(() => {
		async function getContent() {
			const res = await Axios.get(
				'https://api.hatchways.io/assessment/students'
			)
			setContent(res.data.students)
			setLoading(false)
			console.log(content)
		}
		getContent()
	}, [])

	useEffect(() => {
		async function getData() {
			const res = await Axios.get(
				'https://api.hatchways.io/assessment/students'
			)
			setData(res.data.students)
		}
		getData()
	}, [])

	useEffect(() => {
		setOutput([])
		data.filter((val) => {
			if (val.firstName.toLowerCase().includes(input.toLowerCase())) {
				setOutput((output) => [...output, val])
			}
		})
	}, [input])

	return (
		<div className='App'>
			<div className='input'>
				<input
					onChange={(e) => setInput(e.target.value)}
					placeholder='Search...'
				/>
			</div>
			<div>
				{output.map((item) => (
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
				))}
			</div>
		</div>
	)
}

export default App
