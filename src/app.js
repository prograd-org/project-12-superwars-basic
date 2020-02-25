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


// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    detailedPlayers.length = 16;
    for(var i = 0; i < PLAYERS.length; i++)
    {
        var players = {
            name : PLAYERS[i],
            strength : getRandomStrength(),
            image : src = "../project-12-superwars-basic/src/images/super-"+(i+1)+".png",
            type : "hero|villain"
        }
        detailedPlayers.push(players);
        document.write(detailedPlayers);
    }
    // Create players using for loop
    // Type your code here
    player = i % 2 == 0 ? 'true' : 'false';
    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    let random_strength = Math.floor(Math.random()*100)+1;
    return random_strength;
}

const buildPlayers = (players, type) => {
    let fragment = ``;
    for(var i = 0;i < PLAYERS.length;i++)
    {
        fragment = `
        <div class="player">
        <img src="${detailedPlayers[i].image}" alt = "superheroes">
        <h3> ${detailedPlayers[i].name} </h3>
        <h1> ${detailedPlayers[i].strength} </h1>
        `;
    }
    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here

    return fragment;
}
// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}