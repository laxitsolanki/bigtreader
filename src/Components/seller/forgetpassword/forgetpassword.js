import React from 'react'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import { Link } from "react-router-dom";
import '../../../Components/seller/forgetpassword/forgetpassword.css';

const forgetpassword = () => {
  return (
    <div>
      <Header/>
      <div className="mainotp">
        <div className="step1">
          <img src={require("../../../asets/Frame 340.png")} alt=""
            style={{width:"100%",height:"100%"}} />
        </div>

        <div className="step2">
          <img src={require("../../../asets/Group 270.png")} alt="" />
          <br/>
          <div className='forgeth1'>Forgot Password!</div>
          <div>
          <span>Please enter your email which associate <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;to your account.</span>
</div>
        <br/>
        <div>
        <img src={require("../../../asets/Message.png")} alt="" srcset="" />
          <span class="vl"></span>
          <input type="email" placeholder="Email address" className="emaiil" />
       <br/>
       </div>
      <div>
        <Link to="/forgetpassword">
<button className='buttonotp'>Send Now</button>
      </Link>
      </div>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default forgetpassword
