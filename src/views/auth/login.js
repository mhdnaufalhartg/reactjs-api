import React from 'react'

function Login(props) {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">Login</div>
            <div className="card-body">
              <form action="">
                <div className="mb-4">
                  <label htmlFor="" className="form-label">
                    Username :
                    <input type="text" className="form-control" />
                  </label>
                </div>
                <div className="mb-4">
                  <label htmlFor="" className="form-label">
                    Password :
                    <input type="password" className="form-control" />
                  </label>
                </div>
                <button className="btn btn-block btn-primary" type="submit">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
