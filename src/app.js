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
  for (let i = 0; i < players.length; i++) {
    let player = {};
    player.name = players[i];
    player.strength = Math.floor(Math.random() * 100) + 1;
    player.image = `images/super-${i + 1}.png`;
    player.type = i % 2 == 0 ? "hero" : "villan";
    detailedPlayers.push(Object.assign({}, player));
  }
  console.log(detailedPlayers);
  return detailedPlayers;
};

// getting random strength
const getRandomStrength = () => {
  // Return a random integer (0,100]
  // Note: You can use Math.random() and Math.ceil()
  return Math.floor(Math.random() * 100) + 1;
};

const buildPlayers = (players, type) => {
  let fragment = "";

  // Loop through players and accumulate HTML template
  // depending of type of player(hero|villain)
  // Type your code here

  //To build all players
  //   if (type == "hero") {
  //     for (let i = 0; i < 20; i++) {
  //       if (players[i].type == "hero") {
  //         fragment += `<div class="player">
  //                 <img src="${players[i].image}" alt="">
  //                 <div class="name">${players[i].name}</div>
  //                 <div class="strength">${players[i].strength}</div>
  //                 </div>`;
  //       }
  //     }
  //   } else {
  //     for (let i = 0; i < 20; i++) {
  //       if (players[i].type == "villan") {
  //         fragment += `<div class="player">
  //                 <img src="${players[i].image}">
  //                 <div class="name">${players[i].name}</div>
  //                 <div class="strength">${players[i].strength}</div>
  //                 </div>`;
  //       }
  //     }
  //   }

  // To build 1 player
  if (players[0].type == type) {
    fragment += `<div class="player">
                    <img src="${players[0].image}" alt="">
                    <div class="name">${players[0].name}</div>
                    <div class="strength">${players[0].strength}</div>
                    </div>`;
  } else {
    fragment += `<div class="player">
                    <img src="${players[1].image}">
                    <div class="name">${players[1].name}</div>
                    <div class="strength">${players[1].strength}</div>
                    </div>`;
  }
  return fragment;
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
