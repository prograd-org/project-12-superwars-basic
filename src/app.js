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
    // Create players using for loop
    // Type your code here
    for(i=0;i<players.length;i++)
    {
        detailedPlayers = [{
            name: players[i],
            strength: 100,
            image: "images/super-1.png",
            type: (i % 2 == 0) ? 'hero' : 'villain'
        }]
    }

    return detailedPlayers;
}



// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    return(Math.random(0,100))
}

//### Progression 3: No player should fall
const buildPlayers = (players, type) => {


    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
    let fragment = '';

    for (let i of players) {

        if(i.type==type)
        {
            fragment = `
            <div class="player">
                <img src="${i.image}" alt="">
                <div class="name">${i.name}</div>
                <div class="strength">${i.strength}</div>
            </div>`;
        }

        // Loop through players and accumulate HTML template
        // depending of type of player(hero|villain)
        // Type your code here
    }
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