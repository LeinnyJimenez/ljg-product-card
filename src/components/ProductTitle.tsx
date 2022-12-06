import { useContext, CSSProperties } from "react"
import { ProductContext } from "./ProductCart"
import styles from '../styles/styles.module.css'
import React from "react"

export interface ProductTitleProps {
    title?: string,
    className?: string,
    activeClass?: string,
    style?: CSSProperties
}

export const ProductTitle = ({ title, className, style }: ProductTitleProps) => {

    const { product } = useContext(ProductContext);

    return (
        <span className={`${styles.productDescription} ${className}`} style={style}>
            {title ? title : product.title}
        </span>
    )
}