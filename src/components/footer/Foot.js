import React from "react";
import './Foot.css'

function Foot () {
    return (
        <div className="mainContainer">
            <div className="contentWrapper">
                <div className="firstDiv">
                    <ul>
                        <label>Current Movies</label> <br/>
                        <label>Book Tickets</label> <br/>
                        <label>Admin</label>
                    </ul>
                </div>
                <div className="middleDiv">
                    <ul>
                        <label>Back to Top</label> <br/>
                        <label>Contact Us</label> <br/>
                        <label>Location</label> 
                    </ul>
                </div>
                <div className="lastDiv">
                    <label>Developer Website</label> <br/>
                    <label>Developer GitHub</label> <br/>
                    <label>Github Repo</label>
                </div>
            </div>
        </div>
    ) 
}
export default Foot;