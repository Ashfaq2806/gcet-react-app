import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Product from "./Product";
import Cart from "./Cart";
import Login from "./Login";
import Register from "./Register";
import Logout from "./Logout";
import Header from "./Header";
import Order from "./Order";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext } from "react";
export const AppContext = createContext();
function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  return (
    <div>
      <AppContext.Provider
        value={{
          users,
          setUsers,
          user,
          setUser,
          products,
          setProducts,
          cart,
          setCart,
        }}
      >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route index element={<Product />} />
            <Route path="/" element={<Product />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/login" element={<Login />}></Route>
             <Route path="/order" element={<Order />}></Route>
            <Route path="/logout" element={<Logout />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}
export default App;