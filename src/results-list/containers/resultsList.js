import React from 'react'
import HeroCard from '../components/heroCard'

function ResultsList(props) {
  return(
    props.results.map((hero, index) => {
      return (
        <HeroCard
          key={index}
          {...hero}
        />
      )
    })
  )
}

export default ResultsList