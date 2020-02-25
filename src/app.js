const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];
let detailedPlayers = [];

// initialize players with image and strength
const initPlayers = players => {
    for (var i = 0; i < PLAYERS.length; i++) {
        var players = {
            name: PLAYER[i],
            strength: getRandomStrength(),
            image: "./images/super-" + (i + 1) + ".png",
            type: "hero|villan"
        };
        detailedPlayer.push(players);
        console.log(detailedplayers);
    }
    // Create players using for loop
    // Type your code here

    // Where is villain? One image goes to hero and other image goes as villain?
    //Use a ternary operator to push even numbers to hero and odd numbers to hero

    // player = i % 2 == 0 ? 'true' : 'false';
};
return detailedPlayers;

// getting random strength
//https://www.w3schools.com/jsref/jsref_random.asp - check this to generate random numbers

const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.randm() and Math.ceil()
    let random = Math.floor(Math.random() * 10 + 1);
    return random;
};

const buildPlayers = (players, type) => {
    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
    var fragment = "";
    for (var i = 0; i < PLAYERS.length; i++) {
        fragment = `
            <div class="player">
            <img src="${detailedPlayers[i].image}" alt = "characters">
            <h4> ${detailedPlayers[i].name}</h4>
            <h1>${detailedPlayers[i].strength}</h1>
            </div>
             `;

        //Where did you add the alternate name for the image? (Note: Use alt inside the image tag)
    }
    return fragment;
};
// Display players in HTML
const viewPlayers = players => {
    document.getElementById("heroes").innerHTML = buildPlayers(players, "hero");
    document.getElementById("villains").innerHTML = buildPlayers(
        players,
        "villain"
    );
};

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
};