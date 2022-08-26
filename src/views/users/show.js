import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar'
import { useParams } from 'react-router-dom'

function Show(props) {
  const [user, setUser] = useState([])
  let { identifier } = useParams()
  const getUser = async () => {
    try {
      let response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${identifier}`,
      )
      setUser(response.data)
    } catch (e) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    getUser()
  }, [identifier])

  return (
    <div>
      <Navbar />
      <div className="py-5">
        <div className="container">
          <div className="row">
            <h5>User Profile</h5>
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">{user.username}</div>
                <div className="card-body">
                  <div>{user.name}</div>
                  <div>{user.adress}</div>
                  <div>{user.email}</div>
                  <div>{user.phone}</div>
                  <div>{user.website}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Show
