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
      console.log(res.data.students)
      setLoading(false)
    }
    getStudents()
  }, [])

	return (
		<div className='App'>
      {loading?<h1>Loading...</h1>:<h1>Data fetched</h1>}
		</div>
	)
}

export default App