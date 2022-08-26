import React from 'react'
import Router from './router'
import { theme } from './store'
import { useRecoilState } from 'recoil'

function App(props) {
  const [currentTheme] = useRecoilState(theme)
  const defaultTheme =
    currentTheme === 'dark' ? 'bg-dark text-white' : 'bg-white text-dark'
  return (
    <div className={`${defaultTheme} vh-100`}>
      <Router />
    </div>
  )
}

export default App
