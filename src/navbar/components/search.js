import React from 'react'
import './search.css'

function Search (props) {
  return(
    <form className="form-inline my-2 my-lg-0 ">
      <input ref={props.handleRef} onChange={props.handleChanges}  className="form-control mr-sm-2 text-dark" type="search" placeholder="Search" aria-label="Search"/>
    </form>
  )
}

export default Search