import React, { Component } from 'react'
import './App.css'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import User from './components/user/User'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header/>
        <Navbar/> 
        <h4>App Componenti</h4>
        <User/>  
      </div>
    )
  }
}
export default App;