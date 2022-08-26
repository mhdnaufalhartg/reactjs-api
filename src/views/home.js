import React from 'react'
import Navbar from '../components/navbar'
import { theme } from '../store'
import { useRecoilState } from 'recoil'

function Home(props) {
  const [currentTheme, setCurrentTheme] = useRecoilState(theme)

  return (
    <div>
      <Navbar />
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">Home Page</div>
            <select
              value={currentTheme}
              onChange={(e) => setCurrentTheme(e.target.value)}
              className="form-control"
            >
              <option value="dark">dark mode</option>
              <option value="light">light mode</option>
            </select>
            <div className="mt-3">
              <div>You're Selected The {currentTheme} Theme.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
