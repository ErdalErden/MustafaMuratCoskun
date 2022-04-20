import React, { Component } from 'react'
import './App.css'
import User from './components/user/User'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h4 className='title'>App Componenti</h4>
        <User/>  
      </div>
    )
  }
}
export default App;