import React, { useState, useEffect } from 'react'
import TagsInput from './Components/TagsInput.jsx'
import './styles.css'
import Axios from 'axios'


function App() {
	const [loading, setLoading] = useState(true)
	const [content, setContent] = useState()
	const [nameInput, setNameInput] = useState('')
  const [tagInput, setTagInput] = useState('')
	const [output, setOutput] = useState([])
	const [data, setData] = useState([])
	const [expand, setExpand] = useState(true)


	useEffect(() => {
		async function getContent() {
			const res = await Axios.get(
				'https://api.hatchways.io/assessment/students'
			)
			setContent(res.data.students)
			setLoading(false)
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
			if (val.firstName.toLowerCase().includes(nameInput.toLowerCase())) {
				setOutput((output) => [...output, val])
			}
		})
	}, [nameInput])



	return (
		<div className='App'>
			<div className='input'>
				<input
					onChange={(e) => setNameInput(e.target.value)}
					placeholder='Search by name'
				/>
			</div>
			<div className='input'>
				<input
					onChange={(e) => setTagInput(e.target.value)}
					placeholder='Search by tag'
				/>
			</div>

			<div>
				{output.map((item) => (
					<div className='studentCard' key={item.firstName + item.lastName}>
						<img alt='' src={item.pic} />
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
								<div>
									<ul>
										{!expand
											? item.grades.map((test, index) => (
													<li key={index}>
														{'Test ' +
															(item.grades.indexOf(test) + 1).toString() +
															': ' +
															test.toString()}
														%
													</li>
											  ))
											: ''}
									</ul>
									<TagsInput />
								</div>
							</div>
						</div>
						<div className='buttonBox'>
							<button
								className='toggleButton'
								onClick={() => setExpand(!expand)}>
								{expand ? '+' : '-'}
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	)

  
}

export default App
