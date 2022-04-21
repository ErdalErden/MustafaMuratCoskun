import React, { Component } from 'react'
import './App.css'
import Bar from './components/bar/Bar'
import User from './components/user/User'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Bar />
        <User/>  
      </div>
    )
  }
}
export default App;