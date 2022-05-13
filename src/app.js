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
const initPlayers = (players) => {
    let detailedPlayers = [];
    // Create players using for loop
    players.forEach((player, i) => {
        detailedPlayers.push({
            name: player,
            image: "images/super-" + (i + 1) + ".png",
            strength: getRandomStrength(),
            type: i % 2 == 0 ? "hero" : "villain"
        });
    })

    return detailedPlayers;
}
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    return Math.ceil(Math.random() * (100 - 1) + 1);
};
const buildPlayers = (players, type) => {
    let fragment = '';

    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    players.forEach((player) => {
        fragment += `
            <div class="player">
                <img src="${player.image}" alt="">
                <div class="name">${player.name}</div>
                <div class="strength">${player.strength}</div>
            </div>
        `
    })

    return fragment;
}
