import React from 'react'
import '../buyear/Buyearstep1.css';
import { Link } from "react-router-dom";


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
            <input type="radio" name="radio" defaultValue="buyer" className='' /> Buyer
            </div>&nbsp;&nbsp;&nbsp;
            <div className='radio2'>
  <input type="radio" name="radio" defaultValue="seller"  className=''/> seller
  </div>

  <br/>
  <form action="">
  <div className="h1">Business Details</div>

<img src={require('../../asets/Group 427320789.png')} alt="" srcset="" />
<span class="vl"></span>
<input type="text" name='iinputcompny' className='inputCompny' placeholder='Compny name' /><br/>
  <img src={require('../../asets/Group 427320766.png')} alt="" srcset="" />
  <span class="vl"></span>
  <input list="browsers" name="inputcompny" className='inputCompny' placeholder='Business category' /><br/>
  <datalist id="browsers">
    <option value="zestbrains"></option>
    <option value="plus"></option>
    <option value="Chrome"></option>
    <option value="xyz"></option>
    <option value="Safari"></option>
  </datalist>
  <img src={require('../../asets/Group 427321386.png')} alt="" />
  <span class="vl"></span>
  <input list="browsers" name="inputcompny" className='inputCompny' placeholder='Business category' /><br/>
  <datalist id="browsers">
    <option value="zestbrains"></option>
    <option value="plus"></option>
    <option value="Chrome"></option>
    <option value="xyz"></option>
    <option value="Safari"></option>
  </datalist>
  </form>
  <form action="">
  <div className="h1">Personal Details</div>
  <img src={require('../../asets/Profile.png')} alt="" />
  <span class="vl"></span>
  <input type="text" name='iinputcompny' className='inputCompny' placeholder='First name' /><br/>
  <img src={require('../../asets/Profile.png')} alt="" />
  <span class="vl"></span>
  <input type="text" name='iinputcompny' className='inputCompny' placeholder='Last name' /><br/>

  <div className='inputnumber-main'>
  <img src={require('../../asets/Call.png')} alt="" className='iconphone' />
  <span class="vl"></span>
  <input list="phone" name="phone" className='inputnumber' placeholder='91+' required=""
  pattern="[0-9]{10}" /><br/>
  <datalist id="phone">
    <option value="91+"></option>
    <option value="92+"></option>
    <option value="93+"></option>
    <option value="94+"></option>
    <option value="85+"></option>
  </datalist>
    <input type="phone" className='number' placeholder='Mobile number'  /><br/>
</div>
<img src={require('../../asets/Location.png')} alt="" className='address' />
<span class="vl"></span>
    <input type="phone" className='Address1' placeholder='Address1'  /><br/>
    <img src={require('../../asets/Location.png')} alt="" className='address' />
    <span class="vl"></span>
    <input type="phone" className='Address1' placeholder='Address1'  /><br/>

    <img src={require('../../asets/Group 427321426.png')} alt="" className='cityimg' />
    <span class="vl"></span>
    <input type="phone" className='city' placeholder='city/Town'  /><br/>
    <img src={require('../../asets/Vector.png')} alt="" />
    <span class="vl"></span>
    <input list="phone" name="state" className='state' placeholder='state' required=""
  pattern="[0-9]{10}" /><br/>
  <datalist id="phone">
    <option value="91+"></option>
    <option value="92+"></option>
    <option value="93+"></option>
    <option value="94+"></option>
    <option value="85+"></option>
  </datalist>
<img src={require('../../asets/Group 427320766.png')} alt="" />
<span class="vl"></span>
  <input list="phone" name="country" className='country' placeholder='country' required=""
  pattern="[0-9]{10}" /><br/>
  <datalist id="phone">
    <option value="91+"></option>
    <option value="92+"></option>
    <option value="93+"></option>
    <option value="94+"></option>
    <option value="85+"></option>
  </datalist>
<img src={require('../../asets/Group 427321427.png')} alt="" />
<span class="vl"></span>
  <input type="phone" className='pincode' placeholder='Pincode/zip'  /><br/>
<Link to="/Buyear2" target="_blank">
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
  )
}

export default Buyearstep1
