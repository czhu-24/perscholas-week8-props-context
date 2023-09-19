import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; // ES6


const Navbar = ({ products }) => {
  console.log("navbar is re-rendering");
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 5));
  // making randomNumber a state variable means it'll only change via setRandomNumber
  //const randomNumber = Math.floor(Math.random() * 5); 
  Navbar.propTypes = {
    products: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inCart: PropTypes.bool.isRequired,
      })
    ).isRequired,
  };

  // if products doesn't meet specifications above, React will give a warning in the console :), see example below

  /* Warning: Failed prop type: Invalid prop `products[0].inCart` of type `string` supplied to `Navbar`, expected `boolean`.
Navbar@http://localhost:5173/src/components/Navbar/index.jsx?t=1695090869049:14:16
App@http://localhost:5173/src/App.jsx?t=1695090885360:20:45
Router@http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=9b84f73d:3724:7
BrowserRouter@http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=9b84f73d:4202:7 */

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