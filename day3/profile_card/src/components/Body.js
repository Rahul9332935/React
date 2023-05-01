import React from "react";
import Name from "./Name";
import Description from "./Description";
import Header from "./Header";
import Contact from "./Contact";

function Body(){

    return (
        <div className="body">
            <Header/>
            <div className="About" >
                <Name/>
                <Description/> 
            </div>
           <Contact/>
        </div>
    )

}
export default Body