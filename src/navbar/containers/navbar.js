import React from 'react'
import NavbarLayout from '../components/navbarLayout'
import Search from '../components/search'

class Navbar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      input: HTMLElement,
    }
  }

  setRef = (el) => {
    this.setState({
      input: el
    })
  }

  handleInputChanges = (ev) => {
    this.props.search(ev.target.value)
  }

  render() {
    return (
      <NavbarLayout>
        <nav className="navbar navbar-expand-lg navbar-light bg-danger">
          <a className="navbar-brand text-white" href="#">React-Marvel</a>
          <Search handleRef={this.setRef} handleChanges={this.handleInputChanges}/>
        </nav>
      </NavbarLayout>
    )
  }
}

export default Navbar