import React from "react";
import Twitter from "./img/Twitter Icon.png"
import facebook from "./img/Facebook Icon.png"
import instagram from "./img/Instagram Icon.png"
import github from "./img/GitHub Icon.png"

function Contact(){
    return (
        <div className="contact" >
            <img src={Twitter} alt="Twitter" />
            <img src={facebook} alt="Facebook" />
            <img src={instagram} alt="Instagram" />
            <img src={github} alt="Github" />
        </div>
    )
}
console.log(Contact())
export default Contact