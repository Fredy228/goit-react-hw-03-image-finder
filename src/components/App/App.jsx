import React from "react";
import { ColorRing } from  'react-loader-spinner'
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

        {status === 'pending' && <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />}

        {isShowButton && <Button onLoadMore={this.changePage}/>}
      </Container>
    )
  }
}
 export default App;