//PROGRESSION -1

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
// Create players using for loop
const initPlayers = players => {
  let detailedPlayers = [];
  for (let i = o; i < players.length; i++) {
    detailedPlayers[i] = {
      name: players[i],
      strength: getRandomStrength(),
      image: "./images/super-" + (i + 1) + ".png",
      type: i % 2 == 0 ? "hero" : "villain"
    };
  }

  return detailedPlayers;
};

//PROGRESSION -2
// getting random strength
// Note: You can use Math.random() and Math.ceil()
// Return a random integer (0,100]

const getRandomStrength = () => {
  return Math.floor(Math.random() * 100) + 1;
};

// PROGRESSION -3

const buildPlayers = (players, type) => {
  let fragment = "";
  for (let i = 0; i < players.length; i++) {
    player = `       
    <div class="player">
    <img src="${players[i].image}" alt="">
    <div class="name">${players[i].name}</div>
    <div class="strength">${players[i].strength}</div>
</div>
 `;

    if (players[i].type == type) {
      fragment = fragment + player;
    }
  }
  return fragment;
};

// Loop through players and accumulate HTML template
// depending of type of player(hero|villain)
// Type your code here

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
