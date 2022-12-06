import { ProductCartHOCProps } from "../interfaces/ProductsInterfaces";
import { ProductButtons } from "./ProductButtons";
import { ProductCart as ProductCartHOC } from "./ProductCart";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";


export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";
export { ProductButtons } from "./ProductButtons";

export const ProductCart: ProductCartHOCProps = Object.assign(ProductCartHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})

export default ProductCart