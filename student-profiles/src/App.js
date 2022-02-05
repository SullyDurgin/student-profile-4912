import React from 'react'
import StudentList from './Components/StudentList'
import SearchBar from './Components/SearchBar';


function App() {
  return (
    <div className='App'>
      <div>
        <SearchBar />
        <StudentList />
      </div>
    </div>
  );
}

export default App;