import { useState } from "react";
import { Link } from "react-router-dom"


const Navbar = ({ products }) => {

  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 5));

  return (
    <div>
      {/* we need products array here */}
      <div>Random Product: {products[randomNumber].name}</div>
      <Link to="/">Products</Link>
      <Link to="/cart">Cart</Link>
    </div>
  )

}

export default Navbar