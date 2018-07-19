import React from 'react'
import HomeLayout from '../components/home'
import HandleError from '../../error/containers/handleError'
import Navbar from '../../navbar/containers/navbar'

class Home extends React.Component {
  render() {
    return(
      <HandleError>
        <HomeLayout>
          <Navbar />
        </HomeLayout>
      </HandleError>
    )
  }
}

export default Home