import React from 'react'
import '../../Components/Login/Login.css';
import Loginimg from '../Login/loginwithimg/Loginimg';
import Footer from './footer/Footer';


const Login = () => {
  return (
    <div className='layout'>
    <img src={require('../../asets/Mask group.png')} className='logo' alt="" srcset="" />
<Loginimg />      
<Footer />
    </div>
  )
}

export default Login
