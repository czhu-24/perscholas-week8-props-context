import { Route, Routes } from "react-router-dom";
import "./styles.css";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import { primaryContext } from './context/PrimaryContext'
import { useContext } from "react";


function App() {
  console.log("App.jsx is re-rendering! :(");

  return (
    <div>
      <h1>My Context App</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
