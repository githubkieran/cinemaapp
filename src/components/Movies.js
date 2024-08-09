//oppenheimer, deadpool & wolverine, garfield, kung fu panda 4
import React from "react";

function Movies() {
    return (
        <div className="moviesContainer">
            <div className="movie">
                <h3 className="movieHeader">
                    Garfield
                </h3>
                <label>
                    Rating: PG
                </label>
                <p className="description">
                    Lock up your lasagne – because the world’s favourite fat 
                    cat is padding back onto the big. 
                    It feels like a long time since we’ve had Garfield in our lives. 
                    Now, with the Bill Murray-voiced live action capers of the 
                    noughties a distant memory, Garfield 2024 returns the gourmet 
                    furball to his animated roots – and it’s about time.
                </p>
            </div>
            <div className="movie">
                <h3 className="movieHeader">
                    Kung Fu Panda 4
                </h3>
                <label>
                    Rating: 12
                </label>
                <p className="description">
                    True, it’s been a long eight years since 2016’s Kung Fu Panda 3, 
                    with DreamWorks parking its plus-size panda to focus on the Trolls 
                    and Boss Baby universes. But the animation studio always promised 
                    a fourth Kung Fu Panda movie “if a fantastic story presents itself” – 
                    and now, with a slippery new baddie called The Chameleon channelling 
                    classic villains from across the franchise, Po will need to serve up 
                    a whole platter of knuckle sandwiches.
                </p>
            </div>
            <div className="movie">
                <h3 className="movieHeader">
                    Borderlands
                </h3>
                <label>
                    Rating: 15
                </label>
                <p className="description">
                    The upcoming film, directed by Eli Roth, is an action-comedy based on 
                    the popular video game series of the same name. The story follows Lilith 
                    (Cate Blanchett), an infamous bounty hunter with a mysterious past, who 
                    reluctantly returns to her home planet of Pandora, the most chaotic planet 
                    in the galaxy. Her mission is to find the missing daughter of Atlas 
                    (Edgar Ramírez), the universe’s most powerful S.O.B. Along the way, Lilith 
                    forms an unexpected alliance with a ragtag team of misfits.
                </p>
            </div>
            <div className="movie">
                <h3 className="movieHeader">
                    Deadpool & Wolverine
                </h3>
                <label>
                    Rating: 18
                </label>
                <p className="description">
                    There are so many reasons to be buzzing for Deadpool And Wolverine on 25 
                    July, we can’t count them on our adamantium claws. Any new Marvel movie 
                    is always going to get our blood pumping. But this time we’re tingling for 
                    the return of Ryan Reynolds’ R-rated mercenary after six years off the big 
                    screen. And the cherry on top? That’s the resurrection of Hugh Jackman’s 
                    scratchy X-Men icon Wolverine, appearing onscreen for the first time since 
                    his ‘death’ in 2017’s Logan.
                </p>
            </div>
        </div>
    )
}

export default Movies;