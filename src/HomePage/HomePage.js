import React from "react";
import Navbar from "../Navbar/Navbar";
import Caraousel from "../caraousel/caraousel";
import Options from "../Options/Options";
import './Homepage.css'
// import Electronics from "../bestitems/Electronics";
import Beauty from "../bestitems/Beauty";


function HomePage() {
    return (
        <div className="ui homepage">
            <Navbar />
            <div className="options">
                <Options />
            </div>
            <div className="carousel">
                <Caraousel />
            </div>
            {/* <div>
                <Electronics />
            </div> */}
            <Beauty />
            
            
            
        </div>
    )
}

export default HomePage;