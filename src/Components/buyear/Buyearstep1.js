import React from 'react'
import '../buyear/Buyearstep1.css';

const Buyearstep1 = () => {
  return (
    <div className='flex'>
<div className="imges1">
      <p className="text">Doing business in middle east <br/> made easy</p>
      <img
        src={require("../../asets/Frame 37.png")}
        className="img1"
        alt=""
        srcset=""
      />
    </div>
    <div className="main1">
    <img src={require("../../asets/Mask group.png")}  className="logos" alt="" srcset="" />
     <ul className="ull">
                <li>
                  <span className="e">Ecommerce</span> <span className="c">Commodity Trade</span> <span className="s">Service</span>
                </li>
            </ul>
            <div className="h1">Hi there welcome</div>
            <div className="h2">Please create your new account for.</div>
            <form action="" className="form">

            <div className='radio1'>
            <input type="radio" name="gender" defaultValue="male" className='' /> Buyer
            </div>
            <div className='radio2'>
  <input type="radio" name="gender" defaultValue="female"  className=''/> seller
  </div>

  <br/>
  <form action="">
  <div className="h1">Business Details</div>
  </form>
<img src={require('../../asets/Group 427320789.png')} alt="" srcset="" />
  <input type="text" id="fname" name="fname" className='inputCompny' placeholder='Company name'/><br/>
  <img src={require('../../asets/Group 427320789.png')} alt="" srcset="" />
  <input type="text" id="fname" name="fname" className='inputBussines' placeholder='Business category'/><br/>
  
                {/* <Link to="/Buyear">
                        <i class="fa-sharp fa-solid fa-eye text-black"></i>
                      </Link> */}
                {/* <Link to="/Buyear" className="create">create account</Link><br /><br /><br /> */}
                <span className="spana"><a href="#" className="logingest">login </a>
                As Guest</span>
            </form>
    </div>
    </div>
  )
}

export default Buyearstep1
