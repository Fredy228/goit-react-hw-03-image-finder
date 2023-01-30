import React from "react";
import { Container } from "./App.styled";
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import { Button } from "components/Button/Button";

class App extends React.Component {
  state = {
    query: '',
    page: 1,
    status: 'idle',
    isShowButton: false
  }
   // 'idle'
    // 'pending'
    // 'resolved'
    // 'rejected'

  hendleSearchQuery = (searchName) => {
    if(searchName !== this.state.query) {
      this.setState({query: searchName, page: 1})
    }
  }

  changePage = () => {
    this.setState(prevState => ({page: prevState.page + 1}))
  }

  changeStatus = (statusNow) => {
    this.setState({status: statusNow})
  }

  toggleButton = (totalHits) => {
    if (totalHits / 12 >= this.state.page) {
      this.setState({isShowButton: true})
    } else {
      this.setState({isShowButton: false})
    }
  }

  render () {
    const {query, page, status, isShowButton} = this.state;
   
    return (
      <Container>
        <Searchbar onSubmitForm={this.hendleSearchQuery}/>

        <ImageGallery 
        querySearch={query} 
        pageSearch={page}
        changeStatus={this.changeStatus}
        toggleButton={this.toggleButton}/>

        {isShowButton && <Button onLoadMore={this.changePage}/>}
      </Container>
    )
  }
}
 export default App;