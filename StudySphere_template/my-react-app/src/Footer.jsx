import React from "react";
import "./footer.css"
import myImage from "./images/white.png";

function Footer(){
    return (
        <div className="footer">
        <img src={myImage} alt="logo" className="logoimg logoimgf" />
<h1 className="logoname">StudySphere</h1>
<ul className="center-list colorchange">
      <li><a href="#">Focus Room</a></li>
      <li><a href="#">How it works</a></li>
      <li><a href="#">Community</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Contact Us</a></li>
    </ul>
    <ul className="center-list changecolor2">
      <li><a href="#">Terms & Conditions</a></li>
      <li><a href="#">Privacy Policy</a></li>
    </ul>
    <div className="copyrightbox">
        <p className="copyright">2024 © All right reserved.</p>
    </div>
        </div>
    )

}

export default Footer;

