// src/context/IdiomaContext.tsx
'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type IdiomaContextType = {
  idioma: string
  setIdioma: (lang: string) => void
}

const IdiomaContext = createContext<IdiomaContextType>({
  idioma: 'es',
  setIdioma: () => {},
})

export function IdiomaProvider({ children }: { children: React.ReactNode }) {
  const [idioma, setIdioma] = useState('es')

  useEffect(() => {
    const guardado = localStorage.getItem('idioma')
    if (guardado) setIdioma(guardado)
  }, [])

  useEffect(() => {
    localStorage.setItem('idioma', idioma)
  }, [idioma])

  return (
    <IdiomaContext.Provider value={{ idioma, setIdioma }}>
      {children}
    </IdiomaContext.Provider>
  )
}

export const useIdioma = () => useContext(IdiomaContext)
