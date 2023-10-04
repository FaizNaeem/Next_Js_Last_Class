'use client'
import { Authcontext } from '@/context/AuthProvider'
import React, { useContext } from 'react'
export default function Navbar() {
    const hi = useContext(Authcontext)
    console.log(hi);
  return (
    <div className='fixed-top'>
        <nav class="navbar navbar-light bg-light justify-content-between">
  <a class="navbar-brand"> <i>Faiz</i></a>
    <button class="btn btn-danger my-2 my-sm-0" type="submit">Login</button>
</nav>
    </div>
  )
}
