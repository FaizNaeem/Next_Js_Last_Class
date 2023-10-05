'use client'
import { Authcontext } from '@/context/AuthProvider'
import React, { useContext } from 'react'
export default function Navbar() {
    const {login} = useContext(Authcontext)
    // console.log(check);
//     const CheckUser =()=>{
// if (check== false){
// setAuth("")
// }
// else{
//     setAuth(false)
// }
//     }
  return (
    <div className='fixed-top'>
        <nav class="navbar navbar-light bg-light justify-content-between">
  <a class="navbar-brand"> <i>Faiz</i></a>
    <button class="btn btn-danger my-2 my-sm-0" type="submit" onClick={() => login ? setLogin(false) : setLogin(true)}>{login ? 'Logout' : 'Login'}</button>
</nav>
    </div>
  )
}
