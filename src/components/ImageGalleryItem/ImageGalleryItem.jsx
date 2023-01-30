import { Item, Image } from "./ImageGalleryItem.styled"

export const ImageGalleryItem = ({imgData, name}) => {
    return(
        <Item>
            <Image src={imgData.webformatURL} alt={name}/>
        </Item>
    )
}