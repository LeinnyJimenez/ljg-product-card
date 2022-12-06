import { CSSProperties, useContext } from "react";

import { ProductContext } from "./ProductCart";

import styles from '../styles/styles.module.css'

import NoImage from '../assets/no-image.jpg'
import React from "react";

export interface ProductImageProps {
    img?: string,
    className?: string,
    style?: CSSProperties
}

export const ProductImage = ({ img, className, style }: ProductImageProps) => {

    const { product } = useContext(ProductContext)

    let imgToShow: string;

    if (img) {
        imgToShow = img
    } else if (product.img) {
        imgToShow = product.img
    } else {
        imgToShow = NoImage
    }

    return (
        <img
            className={`${styles.productImg} ${className}`}
            src={imgToShow}
            alt="Product Image"
            style={style}
        />
    )
}

