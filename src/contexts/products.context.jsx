import { createContext, useState } from "react";

import PRODUCTS from '../sourceData/shop-items.data.json';

export const ProductsContext = createContext({
    products : [],

});


export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState(PRODUCTS);
    const value = {products};
    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}