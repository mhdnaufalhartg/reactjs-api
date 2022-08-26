import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import Navbar from '../../components/navbar'
import { NavLink } from 'react-router-dom'

function Users(props) {
  const [users, setUsers] = useState('')

  const getUsers = async () => {
    try {
      let response = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
      )
      setUsers(response.data)
    } catch (e) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div>
      <Navbar />
      <div className="py-5">
        <div className="container">
          <div className="row">
            <h5>All Users</h5>
            {Array.from(users).map((user, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <div className="card mb-4">
                    <div className="card-header">{user.name}</div>
                    <div className="card-body">
                      <div className="mb-4">
                        {user.username}
                        <NavLink
                          to={`https://${user.website}`}
                          target="__blank"
                          className="d-block"
                        >
                          {user.website}
                        </NavLink>
                      </div>
                      <a
                        className="btn btn-block btn-primary"
                        href={`/users/${user.id}`}
                      >
                        Show Profile
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Users
