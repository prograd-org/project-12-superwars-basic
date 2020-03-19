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
    let detailedPlayers = [
        {
            name: "Spiderman",
            strength: getRandomStrength(),
            image: "./images/super-1.png",
            type: "hero|villain"
        },

        {
            name: "Captain America",
            strength: getRandomStrength(),
            image: "./images/super-2.png",
            type: "hero|villain"
        },

        {
            name: "Wonderwomen",
            strength: getRandomStrength(),
            image: "./images/super-3.png",
            type: "hero|villain"
        },

        {
            name: "Popcorn",
            strength: getRandomStrength(),
            image: "./images/super-4.png",
            type: "hero|villain"
        },

        {
            name: "Gemwomen",
            strength: getRandomStrength(),
            image: "./images/super-5.png",
            type: "hero|villain"
        },

        {
            name: "Bolt",
            strength: getRandomStrength(),
            image: "./images/super-6.png",
            type: "hero|villain"
        },

        {
            name: "Antwomen",
            strength: getRandomStrength(),
            image: "./images/super-7.png",
            type: "hero|villain"
        },

        {
            name: "Mask",
            strength: getRandomStrength(),
            image: "./images/super-8.png",
            type: "hero|villain"
        },

        {
            name: "Tiger",
            strength: getRandomStrength(),
            image: "./images/super-9.png",
            type: "hero|villain"
        },

        {
            name: "Captain",
            strength: getRandomStrength(),
            image: "./images/super-10.png",
            type: "hero|villain"
        },

        {
            name: "Catwomen",
            strength: getRandomStrength(),
            image: "./images/super-11.png",
            type: "hero|villain"
        },

        {
            name: "Fish",
            strength: getRandomStrength(),
            image: "./images/super-12.png",
            type: "hero|villain"
        },

        {
            name: "Hulk",
            strength: getRandomStrength(),
            image: "./images/super-13.png",
            type: "hero|villain"
        },

        {
            name: "Ninja",
            strength: getRandomStrength(),
            image: "./images/super-14.png",
            type: "hero|villain"
        },

        {
            name: "Black Cat",
            strength: getRandomStrength(),
            image: "./images/super-15.png",
            type: "hero|villain"
        },

        {
            name: "Volverine",
            strength: getRandomStrength(),
            image: "./images/super-16.png",
            type: "hero|villain"
        },

        {
            name: "Thor",
            strength: getRandomStrength(),
            image: "./images/super-17.png",
            type: "hero|villain"
        },

        {
            name: "Slayer",
            strength: getRandomStrength(),
            image: "./images/super-18.png",
            type: "hero|villain"
        },

        {
            name: "Vander",
            strength: getRandomStrength(),
            image: "./images/super-19.png",
            type: "hero|villain"
        },

        {
            name: "Slingo",
            strength: getRandomStrength(),
            image: "./images/super-20.png",
            type: "hero|villain"
        }


    ];
    // Create players using for loop
    // Type your code here

    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    return Math.random(100)
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
}

const buildPlayers = (players, type) => {

    let fragment = '';

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