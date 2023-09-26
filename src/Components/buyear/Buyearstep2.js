import React from 'react'
import '../buyear/Buyearstep2.css';
import { Link } from "react-router-dom";


const Buyearstep2 = () => {
  return (
    <>
    <div className='flex2'>
<div className="imges2">
      <p className="text">Doing business in middle east <br/> made easy</p>
      <img
        src={require("../../asets/Group 427321406.png")}
        className="img2"
        alt=""
        srcset=""
      />
    </div>
    <div className="main2">
    <img src={require("../../asets/Mask group.png")}  className="logos2" alt="" srcset="" />
     <ul className="ull">
                <li>
                  <span className="e">Ecommerce</span> <span className="c">Commodity Trade</span> <span className="s">Service</span>
                </li>
            </ul>
            <div className="h1">Hi there welcome</div>
            <div className="h2">Please create your new account for.</div>
            <form action="" className="form">

            <div className='radio1'>
            <input type="radio" name="radio" defaultValue="buyer" className='' /> Buyer
            </div>&nbsp;&nbsp;&nbsp;
            <div className='radio2'>
  <input type="radio" name="radio" defaultValue="seller"  className=''/> seller
  </div>

  <br/>
  <form action="">
  <div className="h1">Business Details</div>
  <input type="tel" id="phone" name="phone" placeholder="Company telephone number" className='phone2' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required /><br/>
<Link to="Buyear2" target="_blank">
<button className='button'>Next</button>
      </Link>
  </form>
  <span className="already">Already have an Account?</span>
          <Link to="/Buyear2" className="create">
          Login
          </Link>
    
            </form>

    </div>
    </div>
    </>
  )
}

export default Buyearstep2
