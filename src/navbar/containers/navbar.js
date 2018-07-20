<<<<<<< HEAD
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

=======
import React from 'react'
import NavbarLayout from '../components/navbarLayout'
import Search from '../components/search'

class Navbar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      input: HTMLElement,
      value: ''
    }
  }

  setRef = (el) => {
    this.setState({
      input: el
    })
  }

  handleInputChanges = (ev) => {
    this.setState({
      value: ev.target.value
    })
    this.props.search(this.state.value)
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

>>>>>>> 0428114e5f4ec66147d6607d07ab511360786a09
export default Navbar