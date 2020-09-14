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
    for(i=0;i<players.length;i++)
    {
        detailedPlayers=[{
            name:PLAYERS[i],
            strength:100,
   image:"images/super-"+(i+1)+".png",
   type:"hero|villian"
        }]
    }
       
        return detailedPlayers;
    

    }

    // Create players using for loop
    // Type your code here

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    for (let index = 0; index < PLAYERS.length; index++) {
        strength = Math.random(0,100);
        
    }
    return strength;
}

const buildPlayers = (players, type) => {
    let fragment = '';

    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
    
    

    for (i = 0; i < players.length; i++) {
        player = `
            <div class="player">
                <img src="${players[i].image}" alt="">
                <div class="name">${players[i].name}</div>
                <div class="strength">${players[i].strength}</div>
            </div> `;
        if (players[i].type == type)
            fragment += player;
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