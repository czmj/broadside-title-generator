var gen = {
    getTitle: function(topic) {
        var title = "";

        switch (topic) {
            case "love":
                title = gen.getRandArr(gen.loveSongs);
                break;
            default:
                title = gen.getRandArr(gen.loveSongs);
        }

        title = title
            .replace(/getStoryType/g, function(){return gen.getStoryType()})
            .replace(/getFemaleChar/g, function(){return gen.getFemaleChar()})
            .replace(/getMaleChar/g, function(){return gen.getMaleChar()})
            .replace(/getNeutralChar/g, function(){return gen.getNeutralChar()})
            .replace(/getLoveAdverb/g, function(){return gen.getLoveAdverb()});
        
        return title;        
    },
    getRandArr: function(arr) {
        return arr[Math.floor(Math.random()*arr.length)]
    },
    getStoryType: function() {
        return gen.getRandArr(gen.storyType);
    },
    getMaleChar: function() {
        return gen.getRandArr(gen.maleChars);
    },
    getFemaleChar: function() {
        return gen.getRandArr(gen.femaleChars);
    },
    getNeutralChar: function() {
        return gen.getRandArr(gen.maleChars.concat(gen.femaleChars));
    },
    getLoveAdverb: function() {
        return gen.getRandArr(gen.adverbsLove);
    },
    loveSongs: [
        `The getStoryType of the getFemaleChar who fell in love with a getMaleChar`,
        `The getStoryType of the romance between a getFemaleChar and a getMaleChar`,
        `The getLoveAdverb getNeutralChar`,
        `The getLoveAdverb getNeutralChar's resolution`,
        `The getMaleChar's bride`,
        `The getLoveAdverb lovers`,
        `The getLoveAdverb lover's ghost`,
        `The getNeutralChar's farewell`,
        `The getLoveAdverb getMaleChar's answer to the getLoveAdverb getFemaleChar`,
        `A curious love letter addressed to a getNeutralChar`,
        `The getFemaleChar's complaint to the getMaleChar`,
        `The getNeutralChar's lamentable tragedy`,
        `The tragick ends of two getLoveAdverb lovers`
    ],
    maleChars: [
        "serving man",
        "shepherd",
        "blacksmith",
        "captain",
        "sailor",
        "young man",
        "soldier"
    ],
    femaleChars: [
        "shepherdess",
        "maid",
        "old woman",
        "widow",
        "seamstress",
        "lady",
        "northern lass",
        "virgin"
    ],
    adverbsLove: [
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
        "passionate"
    ],
    storyType: [
        "tragical ballad",
        "strange and true account",
        "curious tale",
        "true relation of the tale",
        "tragedy"
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