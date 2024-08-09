//popcorn, hotdog, picknmix, bag of sweets

import React from "react";

function Menu () {
    return(
        <div className="menuContainer">
            <p>
                No movie experience is complete without the perfect snacks. Discover our 
                curated selection of food and drinks, available at all showtimes, to 
                elevate your cinematic journey. From classic popcorn and candy to gourmet
                treats and refreshing beverages, we have everything you need to make your 
                movie night unforgettable. Explore our offerings below and indulge in a 
                delightful array of choices right at your seat.
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