import React from 'react'
import '../seller/Sellerstep1.css';
const Sellerstep1 = () => {
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

            <div className='radio10'>
            <input type="radio" name="radio" defaultValue="buyer" className='' /> Buyer
            </div>&nbsp;&nbsp;&nbsp;
            <div className='radio20'>
  <input type="radio" name="radio" defaultValue="seller"  className=''/> seller
  </div><br/>
  <div className="h1">Company Details</div>
  <img src={require('../../asets/Group 427320789.png')} alt=""  />
  <input type="text"  placeholder='Company name' className='phone2'/><br/>
  <img src={require('../../asets/Group 427321437.png')} alt="" />
  <input list="phone" name="state" className='state' placeholder='Product' required=""
  pattern="[0-9]{10}" /><br/>
  <datalist id="phone">
    <option value="91+"></option>
    <option value="92+"></option>
    <option value="93+"></option>
    <option value="94+"></option>
    <option value="85+"></option>
  </datalist><br/>
  <img src={require('../../asets/Group 427321386.png')} alt="" />
  <input list="phone" name="state" className='state' placeholder='Business type' required=""
  pattern="[0-9]{10}" /><br/>
  <datalist id="phone">
    <option value="91+"></option>
    <option value="92+"></option>
    <option value="93+"></option>
    <option value="94+"></option>
    <option value="85+"></option>
  </datalist><br/>
<img src={require('../../asets/Group 427320766 (1).png')} alt="" />
  <input list="phone" name="state" className='state' placeholder='Business category' required=""
  pattern="[0-9]{10}" /><br/>
  <datalist id="phone">
    <option value="91+"></option>
    <option value="92+"></option>
    <option value="93+"></option>
    <option value="94+"></option>
    <option value="85+"></option>
  </datalist><br/>

  <img src={require('../../asets/Group 427321386.png')} alt="" />
  <input list="phone" name="state" className='state' placeholder='Business sub category' required=""
  pattern="[0-9]{10}" /><br/>
  <datalist id="phone">
    <option value="91+"></option>
    <option value="92+"></option>
    <option value="93+"></option>
    <option value="94+"></option>
    <option value="85+"></option>
  </datalist><br/>
  <div className="h1">Personal Details</div>

  </form>         
    </div>   
    </div> 
    </>
  )
}

export default Sellerstep1
