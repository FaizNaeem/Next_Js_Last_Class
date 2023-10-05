'use client'
import React, { createContext, useState,  } from 'react'
export const Authcontext = createContext() 
const AuthProvider = ({children}) =>{
    const [login , setLogin] = useState(false)
return(
    <Authcontext.Provider value={{login ,setLogin}}>
        {children}
    </Authcontext.Provider>
)
}
export default AuthProvider