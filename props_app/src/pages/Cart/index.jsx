
const Cart = ({ products }) => {

  const cartProducts = products.filter((product) => product.inCart);

  // same as products.filter((product) => if (product.inCart) {return true} else {return false});

  return (
    <div>
      {/* we need products array here */}
      {cartProducts.map((cartProduct, index) => <div key={index + cartProduct.name}>
        <div>Name: {cartProduct.name}</div>
        <div>Price: ${cartProduct.price}</div>
      </div>
      )}
    </div>
  )
}

export default Cart