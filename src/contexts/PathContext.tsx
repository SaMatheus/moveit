// HOOKS
import { createContext, ReactNode, useState } from 'react'

// INTERFACES
interface PathContextData {
  url: string;
  setUrl: (url: string) => void;
}

interface PathProviderProps {
  children: ReactNode;
}

export const PathContext = createContext({} as PathContextData)

export function PathProvider({ children }: PathProviderProps) {
  const [url, setUrl] = useState('')

  return (
    <PathContext.Provider
      value={{
        url,
        setUrl
      }}
    >
      {children}
    </PathContext.Provider>
  )
}