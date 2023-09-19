import { useContext } from "react"
import { primaryContext } from "../../context/PrimaryContext"

const Cart = () => {

  const {products} = useContext(primaryContext);

  const cartProducts = products.filter((product) => product.inCart);

  return (
    <div>
        {/* we need products array here */}
        {cartProducts.map((product, index) => {
            return (
            <div key={index}>
              <div>{product.name}</div>
              <div>${product.price}</div>
              <br/>
            </div>
            
            )
        })}
    </div>
  )
}

export default Cart