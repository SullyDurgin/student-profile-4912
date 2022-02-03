import { useState } from 'react'
import StudentList from './Components/StudentList'
import './styles.css'

export default function App() {
	const [query, setQuery] = useState('')

	return (
		<div className='App'>
			<label>Search</label>
			<input type='text' onChange={(e) => setQuery(e.target.value)} />
			<StudentList />
		</div>
	)
}
