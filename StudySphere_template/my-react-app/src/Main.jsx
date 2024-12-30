import React from "react";
import "./main.css";
import "./nav.css";
// import videoSource from "./images/envv.mp4";

function Main() {

  return (
    <div className="main">
      <div className="countText">
        <span className="greenDot">🟢</span> 20 000 online now
      </div>
      <h1 className="headingone">
        Working towards your dreams is hard. Not reaching them is harder.
      </h1>
      <p className="pheading">Get work done with others from around the 🌎</p>
      <button className="right-button">SEE OTHERS LIVE</button>

      <div className="mainimg">
        <div className="card">
          <div className="tools">
            <div className="circle">
              <span className="red box"></span>
            </div>
            <div className="circle">
              <span className="yellow box"></span>
            </div>
            <div className="circle">
              <span className="green box"></span>
            </div>
          </div>
          <div className="card__content">
          {/* <video src={videoSource} width="740" height="416" loop autoPlay controls></video> */}
          </div>
        </div>
      </div>

      <div>
      <p className="pheading phb">Time to get productive! Our app has everything you need to manage your workload and have more efficient study sessions.</p>
      <button className="right-button">SEE OTHERS LIVE</button>
      </div>
    </div>
  );
}

export default Main;
