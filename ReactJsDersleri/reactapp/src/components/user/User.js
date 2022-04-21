import React, { Component } from 'react'
import PropTypes from 'prop-types'
import "./user.css"


class User extends Component {
  render() {
    //Destructing
    const {name,department,salary } = this.props;
    return (
      <div className='user'>
        <ul className='userList'>
          <li className='userListTitle'>Name: {name}</li>
          <li>Departman: {department}</li>
          <li>Salary: {salary}</li>
        </ul>
      </div>
    )
  }
}

User.propTypes = {
  name : PropTypes.string.isRequired,
  department : PropTypes.string.isRequired,
  salary : PropTypes.string.isRequired
}

User.defaultProps = {
  name : "İsim bilgisi yok",
  department : "Departman bilgisi yok",
  salary : "Ücret bilgisi yok",
}

export default User;
