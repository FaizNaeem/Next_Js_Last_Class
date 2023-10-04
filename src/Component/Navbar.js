'use client'
import { Authcontext } from '@/context/AuthProvider'
import React, { useContext } from 'react'
export default function Navbar() {
    const check = useContext(Authcontext)
    // console.log(check);
    const CheckUser =()=>{
if (check== false){
setAuth(true)
}
else{
    setAuth(false)
}
    }
  return (
    <div className='fixed-top'>
        <nav class="navbar navbar-light bg-light justify-content-between">
  <a class="navbar-brand"> <i>Faiz</i></a>
    <button class="btn btn-danger my-2 my-sm-0" type="submit" onClick={CheckUser}>{check ? }</button>
</nav>
    </div>
  )
}
