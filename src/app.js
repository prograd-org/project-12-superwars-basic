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
    let detailedObject , i=1;
    // Create players using for loop
    for(let player of players){
        detailedObject = {
            name:player,
            strength:getRandomStrength(),
            image:`images/super-${i}.png`
        }
        if(i%2!=0){
            detailedObject.type = `hero`;//creating alternate type as heroes
        }
        else{
            detailedObject.type = `villain`;
        }
        detailedPlayers[detailedPlayers.length] = detailedObject;//appending player to list
        i++;
    }
    // Type your code here
    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    min = Math.ceil(0);
    max = Math.floor(100);
  return Math.floor(Math.random() * (max - min)) + min; //generating a random strength
    // Note: You can use Math.random() and Math.ceil()
}

const buildPlayers = (players, type1) => {
    let fragment = '';
    let div1 , pic ,div2 ,div3;
    for(let player of players){
        if(player.type == type1){//creating template only if type matches
        //creating required HTML template
            div1 = document.createElement('div');
            div1.className = 'player';
            pic = document.createElement('img');
            pic.src = `${player.image}`;
            pic.alt = ``;
            div2 = document.createElement('div');
            div2.className = 'name';
            div2.textContent  = `${player.name}`;
            div3 = document.createElement('div');
            div3.className = 'strength';
            div3.textContent  = `${player.strength}`;
            div1.appendChild(pic);
            div1.appendChild(div2);
            div1.appendChild(div3);
        //converting HTML object into string format
            fragment = fragment + div1.outerHTML;
        }
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