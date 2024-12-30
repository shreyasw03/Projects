import React from "react";
import "./nav2.css"
// import myImage from "./images/org.png";

function Nav2(){
    return (
        <div className="navbar2">
              <div className="container">
              <div className="left-side">
              {/* <div className="logo"><img src={myImage} alt="logo" className="logoimg"></img></div> */}
              <button className="left-button">Left Button</button>
              </div>
    <ul className="center-list">
      <li><a href="#">Focus Room</a></li>
      <li><a href="#">How it works</a></li>
      <li><a href="#">Community</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Contact Us</a></li>
    </ul>
    <button className="right-button">SEE OTHERS LIVE</button>
  </div>
        </div>
    )
}

export default Nav2;

