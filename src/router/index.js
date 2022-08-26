import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../views/home'
import About from '../views/about'
import NotFound from '../views/erorrs/NotFound'
import Login from '../views/auth/login'
import Users from '../views/users'
import Show from '../views/users/show'

function Router(props) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:identifier" element={<Show />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Router
