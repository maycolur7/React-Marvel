import React from 'react'
import NavbarLayout from '../components/navbarLayout'
import Search from '../components/search'

class Navbar extends React.Component {
  render() {
    return (
      <NavbarLayout>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">React-Marvel</a>
          <Search />
        </nav>
      </NavbarLayout>
    )
  }
}

export default Navbar