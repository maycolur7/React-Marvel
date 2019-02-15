
import React from 'react'
import './heroCard.css'

function HeroCard (props) {
  return (
    <div className="card">
      <img className="card-img-top" src={`${props.thumbnail.path}.${props.thumbnail.extension}`} alt={props.name} />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        {
          props.description ? 
            <p className="card-text">{props.description}</p>
          :
            <p>** no description found  **</p>
        
        }
      </div>
    </div>
    
  )
}
export default HeroCard
