import React from 'react'
import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'
import LogoImg from '../LogoImg'

function NavBar({ user, setUser }) {

function handleLogOut(){
  userService.logOut()

  setUser(null)
}

  return (
    <nav>
      <LogoImg/>  
      <Link to="/orders">Collections</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new">Patch</Link>
      &nbsp; | &nbsp;
      &nbsp;&nbsp;<span> {user.name}</span>
&nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
   
    </nav>
  )
}

export default NavBar