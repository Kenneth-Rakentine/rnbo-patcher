import React from 'react'
import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'

function NavBar({ user, setUser }) {

function handleLogOut(){
  userService.logOut()

  setUser(null)
}

  return (
    <nav>
      <Link to="/orders">New Order</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new">Search</Link>
      &nbsp; | &nbsp;
      &nbsp;&nbsp;<span> {user.name}</span>
&nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
      
    </nav>
  )
}

export default NavBar