// import React from 'react'
import { Link } from "react-router-dom";
import React, { useRef } from 'react';

const Sellerstep2 = () => {
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    // Trigger the click event of the hidden file input
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      console.log(`Selected file: ${selectedFile.name}`);
      // You can perform further actions with the selected file here
    }
  };
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
  <div className="h1">Company Details</div>
  <img src={require('../../asets/Call.png')} alt="" />
  <input type="tel" id="phone" name="phone" placeholder="Company telephone number" className='phone2' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required /><br/>
  <img src={require('../../asets/Message.png')} alt="" />
  <input type="email" name="Email address" id="" className='phone2' placeholder='Email address' /><br/>
  <img src={require("../../asets/Lock.png")} alt="" />
  <input type="password" name="password" id="" className='phone2' placeholder='password' /><br/>
  <img src={require("../../asets/Lock.png")} alt="" />
  <input type="password" name="confirm password" className='phone2' placeholder='Confirm password' id="" /><br/>
  <img src={require('../../asets/Group 427320767.png')} alt="" />
<input type="text" name='option' className='phone2' placeholder='Trade license number (Optional)' /><br/>
<img src={require('../../asets/Group 427320767.png')} alt="" />
<input type="text" name='option' className='phone2' placeholder='Trade license expiry date (Optional)' />

<div className="my">My business is not eligible for a VAT Certificate. 
<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='checkbox'/>
</div><br/>
<img src={require('../../asets/Group 427320767.png')} alt="" />
<input type="text" name='option' className='phone2' placeholder='Trade license expiry date (Optional)' />
<div>
<div className='choseop'>Upload document (CR Copy / Trade license copy/GST)<br/>
(Optional)</div>
<div className="clickable-image">
      <img
        src={require('../../asets/Group 17061.png')} // Replace with your image URL
        alt="Click me"
        
        onClick={handleImageClick}
      />
      <input
        type="file"
        accept=".jpg, .jpeg, .png, .gif" // Specify the allowed file types
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      </div>
<div className='choseop'>Upload document(Vat Certification/Tax Certification)<br/>
(Optional)</div>
<div className="clickable-image">
<img
        src={require('../../asets/Group 17061.png')} // Replace with your image URL
        alt="Click me"
        onClick={handleImageClick}
      />
      <input
        type="file"
        accept=".jpg, .jpeg, .png, .gif" // Specify the allowed file types
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
</div>
    </div>
  </form>
  <div>
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='checkbox10'/>
  <span className="already1">Agree to user</span>
          <Link to="/Buyear2" className="create">
          Terms & Conditions and &nbsp;&nbsp;Privacy Policy
          </Link>
</div>
            </form>
            <Link to="/Seller">
<button className='button1'>create now</button>
      </Link>
      <div className='ittakes'>(It takes 2 days to verify your profile)</div>

      <span className="already">Already have an Account?</span>
          <Link to="/Seller" className="create">
          Login
          </Link>
    </div>  
    </div>
    </>
  )
}

export default Sellerstep2
