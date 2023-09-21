import React from "react";
import "../loginwithimg/loginwithimg.css";

const Loginimg = () => {
    
  return (
  <>
    <div className="imges">
      <p className="text">Doing business in middle east <br/> made easy</p>
      <img
        src={require("../../../asets/Group 427321406.png")}
        className="img"
        alt=""
        srcset=""
      />
    </div>
    <div className="main">
    <img src={require("../../../asets/Mask group.png")}  className="logos" alt="" srcset="" />
     <ul className="ull">
                <li>
                  <span className="e">Ecommerce</span> <span className="c">Commodity Trade</span> <span className="s">Service</span>
                </li>
            </ul>
            <div className="h1">Welcome back</div>
            <div className="h2">Please login your account to continue.</div>
            <form action="" className="form">
            <img src={require('../../../asets/Message.png')} alt="" srcset="" />
                <input type="email" placeholder="Email address" className="input"  /><br/>
                <img src={require('../../../asets/Lock.png')} alt="" className="inputf" />
                <input type="password" placeholder="Password" className="input"  />
                <img src={require('../../../asets/Hide.png')} alt="" srcset=""  />
            </form>
    </div>
    </>
  );
};

export default Loginimg;
