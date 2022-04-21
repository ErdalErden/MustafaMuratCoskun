import React, { Component } from 'react'
import './App.css'
import Bar from './components/bar/Bar'
import User from './components/user/User'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Bar title="User App"/>
        <User name="Mustafa Coşkun" salary="5000" department="Software"/>
        <hr />  
        <User name="Ahmet Aksoy" salary="3000" department="Security"/>
        <hr />  
        <User name="Burcu Beyaz" salary="6000" department="Manager"/>  
      </div>
    )
  }
}
export default App;