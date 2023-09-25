import React from "react";
import "../loginwithimg/loginwithimg.css";
import { Link } from "react-router-dom";

const Loginimg = () => {
  return (
    <div style={{ display: "flex" }}>
      <div className="imges">
        <p className="text">
          Doing business in middle east <br /> made easy
        </p>
        <img
          src={require("../../../asets/Frame 34.png")}
          className="img"
          alt=""
          srcset=""
        />
      </div>
      <div className="main">
        <img
          src={require("../../../asets/Mask group.png")}
          className="logos"
          alt=""
          srcset=""
        />
        <ul className="ull">
          <li>
            <span className="e">Ecommerce</span>{" "}
            <span className="c">Commodity Trade</span>{" "}
            <span className="s">Service</span>
          </li>
        </ul>
        <div className="h1">Welcome back</div>
        <div className="h2">Please login your account to continue.</div>
        <form action="" className="form">
          <img src={require("../../../asets/Message.png")} alt="" srcset="" />
          <span class="vl"></span>
          <input type="email" placeholder="Email address" className="input" />
          <br />
          <img
            src={require("../../../asets/Lock.png")}
            alt=""
            className="inputf"
          />
          <span class="vl"></span>
          <input type="password" placeholder="Password" className="input" />
          <img src={require("../../../asets/Hide.png")} alt="" srcset="" />
          <p>
            <a href="#" className="forget">Forget password?</a>
          </p>
          <button className="buttoncs">Log in</button>
          <br />
          <span className="span1">Don’t have an Account?</span>
          <Link to="/Buyear" className="create">
            create account
          </Link>
          <br />
          <br />
          <br />
          {/* <a href="#" className="create">create account</a><br /><br /><br /> */}
          <span className="spana">
            <a href="#" className="logingest">
              login{" "}
            </a>
            As Guest
          </span>
        </form>
      </div>
    </div>
  );
};

export default Loginimg;
