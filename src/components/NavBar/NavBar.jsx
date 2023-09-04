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
      <img src="https://i.ibb.co/5K9QRzX/icons8-audio-cable-100.png" className="patchImg" alt="patch icon img"></img>
      <Link to="/orders/new">Patch</Link>
      &nbsp; | &nbsp;
      &nbsp;&nbsp;<span> {user.name}</span>
&nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
   
    </nav>
  )
}

export default NavBar