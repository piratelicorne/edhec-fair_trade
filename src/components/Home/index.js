import React from 'react';

import { FirebaseContext } from '../Firebase';

function handleClick() {
    var b = document.getElementById("button1");
    b.innerText = "Clicked"
    console.log("I was clicked")
}

const Home = () => (
    <FirebaseContext.Consumer>
        {firebase => {
            return <div>
                <img src="https://imgur.com/jqxPUrM"/>
                <h1>WHY FAIR TRADE?</h1>
                        <p>Fair trade is a global movement made up of a diverse network of producers, companies, shoppers, advocates, and organizations putting people and planet first.

We at Fair Trade USA® believe that everyone wants to do what’s right – for their families, fellow global citizens, and the planet. That’s why we’re committed to making the right choices the most obvious ones. Based on the simple idea that the products we buy and sell are connected to the livelihoods of others, fair trade is a way to make a conscious choice for a better world. A choice for Fair Trade Certified™ goods is a choice to support responsible companies, empower farmers, workers, and fishermen, and protect the environment. In other words, it’s a world-changing way of doing business.</p>
            <h2> HERE'S HOW YOU CAN HELP!</h2>
            <button id = "button1" onClick={handleClick}>VOLUNTEER</button>
                    </div>
        }}
    </FirebaseContext.Consumer>
);

export default Home;
