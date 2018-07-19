import React from 'react'
import HomeLayout from '../components/home'
import HandleError from '../../error/containers/handleError'

class Home extends React.Component {
  render() {
    return(
      <HandleError>
        <HomeLayout>
          <h1>Hello</h1>
        </HomeLayout>
      </HandleError>
    )
  }
}

export default Home