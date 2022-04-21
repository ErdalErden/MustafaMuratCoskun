import React, { Component } from 'react'

class User extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>İsim:{this.props.name}</li>
          <li>Departman:</li>
          <li>Maaş:</li>
        </ul>
      </div>
    )
  }
}

export default User;
