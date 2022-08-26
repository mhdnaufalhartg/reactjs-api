import React from 'react'

function Card(props) {
  return (
    <div className="card">
      <img
        src={props.content.imageUrl}
        alt="catPicture"
        className="card-img-top"
      />
      <div className="card-body">
        <h4>{props.content.title}</h4>
        <small className="text-muted">
          Published on {props.content.published}
        </small>
      </div>
    </div>
  )
}

export default Card
