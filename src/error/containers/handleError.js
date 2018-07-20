import React from 'react'
import RegularError from '../components/regularError'

class HandleError extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      errorOcurred: false,
      error: ''
    }
  }

  componentDidCatch(error) {
    this.setState({
      errorOcurred: true,
      error: error
    })
  }

  render() {
   if (this.state.errorOcurred) {
     return <RegularError
              error={ this.state.error.message }
            />
   } else {
     return this.props.children
   }
  }
}

export default  HandleError