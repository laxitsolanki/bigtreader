import './App.css';
import Login from './Components/Login/Login';
import Buyear from './Components/buyear/Buyear';
import Buyear2 from './Components/buyear/Buyear2';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/buyear" element={<Buyear />} />
          <Route path="/buyear2" element={<Buyear2/>} />
        </Routes>
      </BrowserRouter>
      {/* <Login /> */}
  
    </div>
  );
}

export default App;
