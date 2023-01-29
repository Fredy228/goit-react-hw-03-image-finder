import React from "react";
import { Container } from "./App.styled";
import Searchbar from '../Searchbar/Searchbar'

class App extends React.Component {
  state = {
    query: ''
  }

  hendleSearchQuery = (searchName) => {
    this.setState({query: searchName})
  }

  render () {
    return (
      <Container>
        <Searchbar onSubmitForm={this.hendleSearchQuery}/>
      </Container>
    )
  }
}
 export default App;