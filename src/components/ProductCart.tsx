import React from 'react';

import { createContext, CSSProperties } from 'react'

import { ProductsContextProps, Product, onChangeArgs, InitialValues, ProductCartHandlers } from '../interfaces/ProductsInterfaces';

import useProduct from '../hooks/useProduct'


import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as ProductsContextProps);

const { Provider } = ProductContext

export interface ProductCartProps {
    product: Product,
    // children?: ReactElement | ReactElement[],
    children: (args: ProductCartHandlers) => JSX.Element,
    className?: string,
    style?: CSSProperties,
    onChange?: (args: onChangeArgs) => void,
    value?: number,
    initialValues: InitialValues
}

export const ProductCart = ({ product, children, className, style, onChange, value, initialValues }: ProductCartProps) => {

    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({
        onChange,
        product,
        value,
        initialValues
    })

    return (
        <Provider value={{ counter, increaseBy, product, maxCount }}>
            <div
                className={`${styles.productCard} ${className}`}
                style={style}
            >

                {
                    children({
                        count: counter,
                        isMaxCountReached,
                        maxCount: initialValues.maxCount,
                        product,

                        increaseBy,
                        reset
                    })
                }

                {/* <ProductImage img={product.img} />

            <ProductTitle title={product.title} />

            <ProductButtons counter={counter} increaseBy={increaseBy} /> */}

            </div>
        </Provider >
    )
}