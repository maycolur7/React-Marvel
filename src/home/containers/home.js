import React from 'react'
import HomeLayout from '../components/home'
import HandleError from '../../error/containers/handleError'
import Navbar from '../../navbar/containers/navbar'
import * as serviceApi from '../../services/marvelService'
import ResultsList from '../../results-list/containers/resultsList'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      results: []
    }
  }

  handleSearchService = (query) => {
    if(query && query !== ' ') {
      serviceApi.searchSuperHero(query)
        .then(results => {
          this.setState({
            results: results
          })
          console.log(this.state.results)
        })
    }
  }

  render() {
    return(
      <HandleError>
        <HomeLayout>
          <Navbar search={this.handleSearchService} />
          <div className="container">
            <ResultsList results={this.state.results}/>
          </div>
        </HomeLayout>
      </HandleError>
    )
  }
}

export default Home