import React from "react";
import "../footer/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        {/* <img src={require("../../../asets/image 8.png")} alt="" srcset="" /> */}
        <img src={require("../../asets/image 8.png")} alt="" srcset=""  style={{width:"300px"}}/>

        <div className="lines">
          BigTrader is an Online B2B platform in Qatar. We provide Online
          platform serving as a marketplace for <br /> connecting suppliers and
          buyers in Qatar for selling and promoting their products.
        </div>
        <div className="qr">Scan this QR code to contact us</div>
        <img
          src={require("../../asets/image 1.png")}
          className="image1"
          alt=""
          srcset=""
          style={{width:"130px"}}
        />
      </div>
      <div className="footer1">
        <div className="follow">follow us </div>
        <img
          src={require("../../asets/Group 16703.png")}
          className="logoss"
          alt=""
        />
        <span className="all">2021 Bigtrader.biz . All rights reserved.</span>
      </div>
    </>
  );
};

export default Footer;
