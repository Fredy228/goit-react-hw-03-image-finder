import { Item, Image, ImageLarge } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({imgData, name, toggleModal}) => {
    return(
        <Item>
            <Image src={imgData.webformatURL} alt={name} onClick={() => {toggleModal(imgData.largeImageURL)}}/>
        </Item>
    )
}