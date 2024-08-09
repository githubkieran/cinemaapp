//popcorn, hotdog, picknmix, bag of sweets

import React from "react";

function Menu () {
    return(
        <div className="menuContainer">
            <p>
                No movie experience is complete without the perfect snacks. 
                Explore our curated selection of food and drinks below to 
                elevate your cinematic journey.
            </p>
            <div className="foodContainer">
                <label className="food">
                    Popcorn
                </label>
                <label className="food">
                    Hotdog
                </label>
                <label className="food">
                    Pick 'n' Mix
                </label>
                <label className="food">
                    Bag of Sweets
                </label>
            </div>
            <div className="drinksContainer">
                <label className="drink">
                    Ice Blast
                </label>
                <label className="drink">
                    Big Gulp
                </label>
                <label className="drink">
                    Coffee
                </label>
                <label className="drink">
                    Beer
                </label>
            </div>
        </div>
    )
}

export default Menu;