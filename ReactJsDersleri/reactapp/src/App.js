import React, { Component } from 'react'
import './App.css'
import Bar from './components/bar/Bar'
import Users from './components/users/Users'

class App extends Component {
  
  deleteUser = (id) => {
    this.setState({
      users : this.state.users.filter(user => id !== user.id)
    })
  }
  render() {
    return (
      <div className='container'>
        <Bar title="User App"/>
        <hr />
        <Users deleteUser={this.deleteUser} users={this.state.users}/>

      </div>
    )
  }
}
export default App;