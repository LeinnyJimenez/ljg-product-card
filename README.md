# LJS-PRODUCT-CARD

Este es un paquete de pruebas de despliegue en npm

### Leinny Jimenez Gonzalez

## Elemplo
...

import {ProductCart, ProductImage, ProductTitle, ProductButtons} from 'ljg-product-card';
...

... 
<ProductCart
    product={product}
    initialValues={{
        count: 4,
        maxCount: 10
    }}
>

    {
        ({ reset, increaseBy, isMaxCountReached, count }) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />

            </>
        )
    }
</ProductCart>