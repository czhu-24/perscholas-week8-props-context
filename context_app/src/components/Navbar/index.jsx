import { useContext, useState } from "react";
import { Link } from "react-router-dom"
import { primaryContext } from "../../context/PrimaryContext";

const Navbar = () => {

  console.log("Navbar component is re-rendering! :(");
  
  const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 4));
  
  const {products} = useContext(primaryContext);
  
  return (
    <div>
      {/* we need products array here */}
        <div>Random Product: {products[randomNum].name}</div>
        <Link to="/">Products</Link>
        <Link to="/cart">Cart</Link>
    </div>
  )
}

export default Navbar