import { createContext, useState } from "react";


export const primaryContext = createContext();

// create provider 
// return provider JSX

const PrimaryProvider = (props) => {
    
 const [products, setProducts] = useState([ 
    { name: 'Laptop', price: 1000, inCart: false }, 
    { name: 'Smartphone', price: 500, inCart: false }, 
    { name: 'Headphones', price: 100, inCart: false }, 
    { name: 'Keyboard', price: 50, inCart: false }, 
    { name: 'Mouse', price: 30, inCart: false } 
]); 

    console.log(products);

    return (
        <primaryContext.Provider value={{products, setProducts}}>
            {props.children}
        </primaryContext.Provider>
    )
}


export default PrimaryProvider;