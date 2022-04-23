import React, { Component } from 'react'
import './App.css'
import Bar from './components/bar/Bar'
import Users from './components/users/Users'

class App extends Component {  

  render() {
    return (
      <div className='container'>
        <Bar title="User App"/>
        <hr />
        <Users/>

      </div>
    )
  }
}
export default App;