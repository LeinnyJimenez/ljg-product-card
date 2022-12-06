import { ProductButtonsProps } from "../components/ProductButtons";
import { ProductCartProps } from "../components/ProductCart";
import { ProductImageProps } from "../components/ProductImage";
import { ProductTitleProps } from "../components/ProductTitle";

export interface Product {
    id: string,
    title: string,
    img?: string
}

export interface ProductsContextProps {
    counter: number,
    increaseBy: (value: number) => void,
    product: Product,
    maxCount?: number
}

export interface ProductCartHOCProps {
    ({ product, children }: ProductCartProps): JSX.Element,
    Title: (Props: ProductTitleProps) => JSX.Element;
    Image: (Props: ProductImageProps) => JSX.Element;
    Buttons: (Props: ProductButtonsProps) => JSX.Element
}

export interface onChangeArgs {
    product: Product,
    count: number
}

export interface ProductInCart extends Product {
    count: number
}

export interface InitialValues {
    count?: number,
    maxCount?: number
}

export interface ProductCartHandlers {
    count: number,
    isMaxCountReached: boolean,
    maxCount?: number,
    product: Product,

    increaseBy: (value: number) => void,
    reset: () => void
}