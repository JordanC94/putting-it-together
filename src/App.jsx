import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';



function App() {
  return (
    <div className="App">
      <PersonCard firstName = {'Jordan'}
      lastName = {'Carlson'}
      age ={28} hairColor = {'Red'}/>
      <PersonCard firstName = {'The'}
      lastName = {'Matrix'}
      age ={99} hairColor = {'Green'}/>
      <PersonCard firstName = {'Billy'}
      lastName = {'Bob'}
      age ={52} hairColor = {'Gray'}/>
      <PersonCard firstName = {'Michael'}
      lastName = {'Jordan'}
      age ={23} hairColor = {'Black'}/>
    </div>
  );
}

export default App;
