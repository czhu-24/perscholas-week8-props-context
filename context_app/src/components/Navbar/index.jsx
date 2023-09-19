import { Link } from "react-router-dom"

const Navbar = () => {

  console.log("Navbar component is re-rendering! :(");
  
  return (
    <div>
      {/* we need products array here */}
        <div>Random Product: {products[0]}</div>
        <Link to="/">Products</Link>
        <Link to="/cart">Cart</Link>
    </div>
  )
}

export default Navbar