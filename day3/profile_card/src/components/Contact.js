import React from "react";
import Twitter from "./img/Twitter Icon.png"
import facebook from "./img/Facebook Icon.png"
import instagram from "./img/Instagram Icon.png"
import github from "./img/GitHub Icon.png"

function Contact(){
    return (
        <div className="contact" >
            <img src={Twitter} alt="twitter" />
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={github} alt="github" />
        </div>
    )
}
export default Contact