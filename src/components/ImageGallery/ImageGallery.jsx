import React from "react";
import {ImageGalleryList} from './ImageGallery.styled';
import {getImgagesAPI} from '../PixabayAPI/PixabayAPI';

class ImageGallery extends React.Component {
    state = {
        hits: [],
    }

    async componentDidUpdate(prevProps) {
        const {querySearch, pageSearch} = this.props;
        const {hits} = this.state;

        if(querySearch !== prevProps.querySearch) {
            const resalt = await hitsPushArr([]);
            this.setState({hits: resalt});
        }

        if(pageSearch !== prevProps.pageSearch) {
            const resalt = await hitsPushArr(hits);
            this.setState({hits: resalt});
        }

        async function hitsPushArr(parametrHits) {
            const response = await getImgagesAPI(querySearch, pageSearch);
            let hitArray = [...parametrHits];
                response.map(({id, webformatURL, largeImageURL}) => {
                 return hitArray.push({
                     id,
                     webformatURL,
                     largeImageURL
                 })
                })
            return hitArray
        }
    }

    render() {
        return(
            <ImageGalleryList>

            </ImageGalleryList>
        )
    }
}

export default ImageGallery