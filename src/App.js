import './App.css';
import Login from './Components/Login/Login';
import Buyear from './Components/buyear/Buyear';
import Buyear2 from './Components/buyear/Buyear2';
import Seller from './Components/seller/Seller';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Seller2 from './Components/seller/Seller2';
import Otp from './Components/seller/Otp';
import Forgetpassword from './Components/seller/forgetpassword/forgetpassword';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/buyear" element={<Buyear />} />
          <Route path="/buyear2" element={<Buyear2/>} />
          <Route path="/Seller" element={<Seller/>} />
          <Route path="/Seller2" element={<Seller2/>} />
          <Route path="/Otp" element={<Otp/>} />
          <Route path="/Forgetpassword" element={<Forgetpassword/>} />
        </Routes>
      </BrowserRouter>
      {/* <Login /> */}
  
    </div>
  );
}

export default App;
