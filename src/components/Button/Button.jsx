import { BtnLoadMore } from "./Button.styled"

export const Button = ({onLoadMore}) => {
    return(
        <BtnLoadMore type="button" onClick={onLoadMore}>Load more</BtnLoadMore>
    )
}