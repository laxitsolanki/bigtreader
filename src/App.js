import './App.css';
import Login from './Components/Login/Login';
import Buyear from './Components/buyear/Buyear';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Buyear" element={<Buyear />} />
        </Routes>
      </BrowserRouter>
      {/* <Login /> */}
  
    </div>
  );
}

export default App;
