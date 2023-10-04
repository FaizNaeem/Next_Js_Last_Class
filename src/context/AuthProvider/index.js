'use client'
import React, { createContext, useState,  } from 'react'
export const Authcontext = createContext() 
const AuthProvider = ({children}) =>{
    const [Auth , setAuth] = useState(false)
return(
    <Authcontext.Provider value={{Auth ,setAuth}}>
        {children}
    </Authcontext.Provider>
)
}
export default AuthProvider