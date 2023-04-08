import Home from "./screens/Home";
import Mycart from "./screens/Mycart";
import Myorders from "./screens/Myorders";
import Login from "./screens/Login";
import Signin from "./screens/Signin";
import Navbar from "./components/Navbar";
import {ContextReducer} from './components/ContextReducer'


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
   
   <ContextReducer>
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/mycart' element={<Mycart/>}/>
       
          <Route exact path='/myorders' element={<Myorders/>}/> 
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/signin' element={<Signin/>}/>
        </Routes>
      </Router>
      </ContextReducer>
    </>
  );
}

export default App;
