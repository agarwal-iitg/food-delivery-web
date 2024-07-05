import "./App.css";
import Home from "./Screen/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import Login from "./Screen/Login";
import SignUp from "./Screen/SignUp";
import { CartProvider } from "./Component/ContextReducer";


function App() {
  return (
    // <CartProvider>

      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/login" element={<Login/>}></Route>
            <Route exact path="/creteuser" element={<SignUp/>}></Route>
  
          </Routes>
        </div>
      </Router>
    // </CartProvider>
    );
}

export default App;
