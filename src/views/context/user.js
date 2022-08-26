import React from 'react'
import { createContext } from 'react'

const UserContext = createContext()

const UserProvider = ([children]) => {
  const user = {
    name: 'Habib Ritonga',
  }

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  )
}
