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

<img src={require('../../asets/Group 427320789.png')} alt="" srcset="" />
<input type="text" name='iinputcompny' className='inputCompny' placeholder='Compny name' /><br/>
  <img src={require('../../asets/Group 427320766.png')} alt="" srcset="" />
  <input list="browsers" name="inputcompny" className='inputCompny' placeholder='Business category' /><br/>
  <datalist id="browsers">
    <option value="zestbrains"></option>
    <option value="plus"></option>
    <option value="Chrome"></option>
    <option value="xyz"></option>
    <option value="Safari"></option>
  </datalist>
  <img src={require('../../asets/Group 427321386.png')} alt="" />
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
  <input type="text" name='iinputcompny' className='inputCompny' placeholder='First name' /><br/>
  <img src={require('../../asets/Profile.png')} alt="" />
  <input type="text" name='iinputcompny' className='inputCompny' placeholder='Last name' /><br/>

  <div className='inputnumber-main'>
  <img src={require('../../asets/Call.png')} alt="" className='iconphone' />
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
    <input type="phone" className='Address1' placeholder='Address1'  /><br/>
    <img src={require('../../asets/Location.png')} alt="" className='address' />
    <input type="phone" className='Address1' placeholder='Address1'  /><br/>

    <img src={require('../../asets/Group 427321426.png')} alt="" className='cityimg' />
    <input type="phone" className='city' placeholder='city/Town'  /><br/>
    <input list="phone" name="state" className='state' placeholder='state' required=""
  pattern="[0-9]{10}" /><br/>
  <datalist id="phone">
    <option value="91+"></option>
    <option value="92+"></option>
    <option value="93+"></option>
    <option value="94+"></option>
    <option value="85+"></option>
  </datalist>

  <input list="phone" name="country" className='country' placeholder='country' required=""
  pattern="[0-9]{10}" /><br/>
  <datalist id="phone">
    <option value="91+"></option>
    <option value="92+"></option>
    <option value="93+"></option>
    <option value="94+"></option>
    <option value="85+"></option>
  </datalist>
  </form>
                <span className="spana"><a href="#" className="logingest">login </a>
                As Guest</span>
            </form>

    </div>
    </div>
  )
}

export default Buyearstep1
