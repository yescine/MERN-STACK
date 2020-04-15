import React from 'react';
import {BrowserRouter ,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './components/Navbar';
import ExerciceList from './components/ExerciceList';
import EditExercice from './components/EditExercice'
import CreateExercice from './components/CreateExercice'
import CreateUser from './components/CreateUser'


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <br/>
        <Route path='/' exact component={ExerciceList}/>
        <Route path='/edit/:id' component={EditExercice}/>
        <Route path='/create' component={CreateExercice}/>
        <Route path='/user' component={CreateUser}/>
    </BrowserRouter>
  );
}

export default App;
