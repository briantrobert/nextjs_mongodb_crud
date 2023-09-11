'use client'

import { createContext, useState } from "react"

export const AppContext = createContext()

function StateProviders({children}) {

    const [showWays, setShowWays] = useState(false)

  return (
    <AppContext.Provider
    value={{
         showWays,
         setShowWays
        }}
        >
      {children}
    </AppContext.Provider>
  )
}

export default StateProviders
