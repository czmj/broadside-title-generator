var gen = {
    getTitle: function(topic) {
        var title = "";

        switch (topic) {
            case "love":
                title = gen.getRandArr(gen.loveSongs);
                break;
            case "drinking":
                title = gen.getRandArr(gen.drinkingSongs);
                break;
            default:
                title = gen.getRandArr(gen.loveSongs.concat(gen.drinkingSongs));
        }

        title = title
            .replace(/getStoryType/g, function(){return gen.getRandArr(gen.storyType)})
            .replace(/getFemaleChar/g, function(){return gen.getRandArr(gen.femaleChars)})
            .replace(/getMaleChar/g, function(){return gen.getRandArr(gen.maleChars)})
            .replace(/getNeutralChar/g, function(){return gen.getRandArr(gen.maleChars.concat(gen.femaleChars))})
            .replace(/getDrinkingAdjective/g, function(){return gen.getRandArr(gen.adjectivesDrinking)})
            .replace(/getDrinkingVessel/g, function(){return gen.getRandArr(gen.drinkingVessels)})
            .replace(/getDrink/g, function(){return gen.getRandArr(gen.drinks)})
            .replace(/getPeopleAdjective/g, function(){return gen.getRandArr(gen.adjectivesPeople)});
        
        return title;        
    },
    getRandArr: function(arr) {
        return arr[Math.floor(Math.random()*arr.length)]
    },
    drinkingSongs: [
        `Fill the getDrinkingVessel`,
        `Pass the getDrinkingVessel`,
        `Sling the getDrinkingAdjective getDrinkingVessel`,
        `Bring us a getDrinkingAdjective getDrinkingVessel`,
        `The getDrinkingAdjective getDrinkingVessel`,
        `The merry getNeutralChar`,
        `The jovial getNeutralChar`,
        `The happy getNeutralChar`,
        `The getNeutralChar's getDrinkingVessel`,
        `A toast to the getNeutralChar`,
        `A getDrinkingVessel of getDrink`,
        `A toast to getDrink`
    ],
    loveSongs: [
        `A getStoryType of the getFemaleChar who fell in love with a getMaleChar`,
        `A getStoryType of the romance between a getFemaleChar and a getMaleChar`,
        `A getStoryType of the meeting of two getPeopleAdjective lovers`,
        `The getPeopleAdjective getNeutralChar`,
        `The getPeopleAdjective getNeutralChar's resolution`,
        `The getPeopleAdjective getFemaleChar and the getPeopleAdjective getMaleChar`,
        `The getMaleChar's bride`,
        `The getNeutralChar's daughter`,
        `The getPeopleAdjective lovers`,
        `The getPeopleAdjective lover's ghost`,
        `The getNeutralChar's farewell`,
        `The getPeopleAdjective getMaleChar's answer to the getPeopleAdjective getFemaleChar`,
        `A curious love letter addressed to a getNeutralChar`,
        `The getFemaleChar's complaint to the getMaleChar`,
        `The getNeutralChar's lamentable tragedy`,
        `The tragick ends of two getPeopleAdjective lovers`
    ],
    maleChars: [
        "serving man",
        "shepherd",
        "blacksmith",
        "captain",
        "sailor",
        "young man",
        "soldier",
        "beggar",
        "barber",
        "butcher",
        "cobbler",
        "peasant boy"
    ],
    femaleChars: [
        "shepherdess",
        "maid",
        "old woman",
        "widow",
        "seamstress",
        "lady",
        "northern lass",
        "virgin",
        "damsel",
        "female smuggler"
    ],
    adjectivesPeople: [
        "loyal",
        "pining",
        "amorous",
        "true-hearted",
        "faithful",
        "kind",
        "wronged",
        "fickle",
        "false",
        "constant",
        "slighted",
        "bashful",
        "passionate",
        "cruel",
        "fat",
        "ugly",
        "wicked",
        "poor",
        "beautiful",
        "brave",
        "bucksome",
        "handsome",
        "bold",
        "affectionate",
        "unfortunate",
        "fortunate",
        "faithless",
        "dark-eyed",
        "forlorn"
    ],
    drinks: [
        "English brown ale",
        "ale",
        "beer",
        "wine",
        "punch"
    ],
    adjectivesDrinking: [
        "sparkling",
        "flowing",
        "midnight",
        "social",
        "lusty",
        "precious"
    ],
    drinkingVessels: [
        "bowl",
        "jug",
        "glass",
        "bumper",
        "cup",
        "goblet",
        "bottle"
    ],
    storyType: [
        "tragical ballad",
        "strange and true account",
        "curious tale",
        "true relation of the tale",
        "tragick tale"
    ]
}

document.getElementById('button-generate').onclick = function(e){
    var output = document.getElementById('output');
    var node = document.createElement("p");
    output.innerHTML = "";

    for (var i = 0 ; i < 10 ; i ++){
        node = document.createElement("p");
        node.appendChild(document.createTextNode(gen.getTitle()));
        output.appendChild(node);
    }
}