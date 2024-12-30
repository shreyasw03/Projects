import React from "react";
import "./nav.css"

function Nav(){
    const exit = (e) => {
        const hide = document.querySelector(".navbar");
        console.log(hide.style.display="none");
      };
    return (
        <div className="navbar">Join our Focus Rooms - for all ages 16+! ✨ <i className="fa-solid fa-xmark" onClick={exit}></i></div>
    )

}

export default Nav;

