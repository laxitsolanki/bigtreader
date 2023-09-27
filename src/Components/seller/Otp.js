import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "../../Components/seller/Otp.css";
import { Link } from "react-router-dom";

const Otp = () => {
  return (
    <>
      <Header />
      <div className="mainotp">
        <div className="step1">
          <img src={require("../../asets/Frame 33.png")} alt="" />
        </div>

        <div className="step2">
          <img src={require("../../asets/Group 27.png")} alt="" />
          <div className="forgeth1"> OTP Verification</div>
          <span>We just sent you 6-Digit OTP at</span><span>988 036 1974</span>
         
          <div class="inputfield">
        <input type="number" maxlength="1" class="input00"  />
        <input type="number" maxlength="1" class="input00"  />
        <input type="number" maxlength="1" class="input00"  />
        <input type="number" maxlength="1" class="input00"  />
        <input type="number" maxlength="1" class="input00"  />
        <input type="number" maxlength="1" class="input00"  /><br/>
      </div>
      <div>
        <Link to="/forgetpassword">
<button className='buttonotp'>Confirm</button>
      </Link>
      </div>
      <div className="linklogin">
      <Link to="/Seller" className="createotp">
      RESEND OTP
          </Link>
          </div>
      </div>
      </div>
        

      <Footer />
    </>
  );
};

export default Otp;
