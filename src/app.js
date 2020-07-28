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
    "Slingo",
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here
    var k = 0;
    var i = 1;
    for (let x of players) {
        let playersObject = {
            name: x,
            strength: getRandomStrength(),
            image: "images/super-" + i + ".png",
        };
        if (i % 2 == 1) {
            playersObject.type = "hero";
        } else {
            playersObject.type = "villain";
        }
        i++;
        detailedPlayers[k++] = playersObject;
    }
    return detailedPlayers;
};

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    return Math.ceil(Math.random() * 100 + 1);
};

const buildPlayers = (players, type) => {
    let fragment = "";
    let fragment1 = '';


    for (x of players) {
        fragment =
            `<div class="player">
    <img src="${x.image}" alt="">
    <div class="name">${x.name}</div>
    <div class="strength">${x.strength}</div>
    </div>`

        fragment1 = fragment1 + fragment
    }

    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here

    return fragment1;
};
// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById("heroes").innerHTML = buildPlayers(players, "hero");
    document.getElementById("villains").innerHTML = buildPlayers(
        players,
        "villain"
    );
};

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
};