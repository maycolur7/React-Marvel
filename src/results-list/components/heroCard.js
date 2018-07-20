<<<<<<< HEAD
import React from 'react'
import './heroCard.css'

function HeroCard (props) {
  return (
    <div className="card">
      <img className="card-img-top"  alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
          <a href="#" className="btn btn-danger">Go somewhere</a>
        </div>
    </div>
  )
}
=======
import React from 'react'
import './heroCard.css'

function HeroCard (props) {
  return (
    <div className="card">
      <img className="card-img-top" src={`${props.thumbnail.path}.${props.thumbnail.extension}`}  alt={props.name} />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          {
            props.description &&
              <p>{props.description}</p>            
          }
          <a href="#" className="btn btn-danger">Go somewhere</a>
        </div>
    </div>
  )
}
>>>>>>> c8ecd1f8ac3abf2cc545f11a0c4ac5d7dc19f443
export default HeroCard