
const ProductsDisplay = ({ products, setProducts }) => {

  const handleProductClick = (product, id) => {
    // we have the id of the clicked property
    // 1. make a new products array (from the old state)
    const productsCopy = [...products];
    // 2. set inCart = true for the clicked product
    productsCopy[id].inCart = true;
    // 3. set state to this new products array
    // EVEN IF THE VALUES OF THE ARRAY OF OBJECTS ARE THE SAME (WHEN ALL PRODUCTS HAVE BEEN ADDED TO THE CART), THE ARRAY REFERENCE WILL ALWAYS CHANGE BECAUSE WE MADE A COPY & WE'RE SETTING IT TO THE COPY
    setProducts(productsCopy);

  
  }

  return (
    <div>
      {/* we need the products array here */}
      {products.map((product, id) => {
        return <div key={id} onClick={() => handleProductClick(product, id)}>{product.name}</div>
      })}
    </div>
  )
}

export default ProductsDisplay