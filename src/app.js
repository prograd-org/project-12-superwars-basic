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
        //console.log(decideherovillain());
        detailedPlayers.push({
            name:players[i],
            strength: getRandomStrength(),
            image: "images/super-"+(i+1)+".png",
            type: decideherovillain()
        });
    }

    console.log(detailedPlayers);

    // Create players using for loop
    // Type your code here

    return detailedPlayers;
}

// getting random strength
const decideherovillain = () => {
    let result=Math.floor(Math.random() * 2);
    if(result==0)
    {
        return "villain";
    }
    if(result==1)
    {
        return "hero";
    }
}

// getting random strength
const getRandomStrength = () => {
    let strength=Math.floor(Math.random() * 101);
    return strength;
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
}

const buildPlayers = (players, type) => {
    let fragment='';
    for(let i=0;i<players.length;i++)
    {
        if(players[i].type==type)
        {
            fragment = fragment+'<div class="player"><img src='+players[i].image+'><div class="name">'+players[i].name+'</div><div class="strength">'+players[i].strength+'</div></div>';
            //console.log(fragment)
        }
    }
       
    return fragment;

    // Loop through players and accumulate HTML template    
    // depending of type of player(hero|villain)
    // Type your code here

    
}
// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}