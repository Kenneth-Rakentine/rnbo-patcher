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
      <img src="https://i.ibb.co/VmbwdDX/icons8-collection-50.png" className="collectionImg" alt="collection icon img"></img>
      <Link to="/orders">Collections</Link>
      &nbsp; | &nbsp;
      &nbsp;&nbsp;
      <img src="https://i.ibb.co/g7d7tXT/icons8-aux-cable-48.png" className="patchImg" alt="patch icon img"></img>
      <Link to="/orders/new">Patch</Link>
      &nbsp; | &nbsp;
      &nbsp;&nbsp;
      <img src="https://i.ibb.co/QYZSV86/icons8-user-32.pngg" className="userImg" alt="user icon img"></img>
      <span> {user.name}</span>
&nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
   
    </nav>
  )
}

export default NavBar