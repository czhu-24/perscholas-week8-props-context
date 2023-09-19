import { useContext } from "react";
import { primaryContext } from "../../context/PrimaryContext"


const ProductsDisplay = () => {

  const {products, setProducts} = useContext(primaryContext);

    const handleProductClick = (id) => {
        // we have the id of the clicked property
        // 1. make a new products array (from the old state)
        const productsCopy = [...products];
        // 2. set inCart = true for the clicked product
        productsCopy[id].inCart = true;
        // 3. set state to this new products array
        setProducts(productsCopy);
    }

  return (
    <div>
        {/* we need the products array here */}
        {products.map((product, index) => {
            return <div key={index} onClick={() => handleProductClick(index)}>{product.name}</div>
        })}
    </div>
  )
}

export default ProductsDisplay