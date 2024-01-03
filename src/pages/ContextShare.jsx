import React, { createContext, useState } from 'react'

export const registerContext=createContext()
export const deleteContext=createContext()

function ContextShare({children}) {
    const[registerData,setregisterData]=useState("")
    const[deleteData,setDeleteData]=useState("")
  return (
    <>
       <registerContext.Provider value={{registerData,setregisterData}}>
       <deleteContext.Provider value={{deleteData,setDeleteData}}>

       {children}

       </deleteContext.Provider>


       </registerContext.Provider>
    </>
  )
}

export default ContextShare