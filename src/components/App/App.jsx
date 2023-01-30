import React from "react";
import { Container } from "./App.styled";
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import { Button } from "components/Button/Button";

class App extends React.Component {
  state = {
    query: '',
    page: 1
  }

  hendleSearchQuery = (searchName) => {
    if(searchName !== this.state.query) {
      this.setState({query: searchName, page: 1})
    }
    
  }

  changePage = () => {
    this.setState(prevState => ({page: prevState.page + 1}))
  }

  render () {
    const {query, page} = this.state;
    
    return (
      <Container>
        <Searchbar onSubmitForm={this.hendleSearchQuery}/>
        <ImageGallery 
        querySearch={query} 
        pageSearch={page}/>
        <Button onLoadMore={this.changePage}/>
      </Container>
    )
  }
}
 export default App;