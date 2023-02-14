function test() { console.log("Test"); }

const words = [
    "accommodate",
    "admire",
    "adore",
    "agree with",
    "appreciate",

    "claim",

    "depend on",
    "deserve",
    "devote",

    "effervescent",
    "elegant",
    "elevate",
    "enchant",
    "encourage",
    "endear",
    "energize",
    "engage",
    "enhance",
    "enjoy",

    "favor",
    "flatter",

    "gallant",
    "glorify",
    "grace",

    "help",
    "honor",

    "inspire",
    "interest",

    "joy",

    "like",
    "LOVE",
    
    "magnify",
    "marvel at",
    "mellow",
    "mesmerize",
    "momentous",
    "move",
    
    "notice",
    
    "observe",

    "please",
    "promise",
    
    "rejoice",
    "remember",
    "respect",
    
    "sense",
    "sharpen",
    "shine",
    "sparkle",
    "stun",
    "style",
    "support",

    "think about",
    "trust",

    "value",

    "warm",
    "wait for"
];

var usedWords = [];
function changeWord() {
    while (true) {
        if (usedWords.length === words.length) usedWords = [];
        const word = words[Math.floor(Math.random() * words.length)];
        if (usedWords.every(w => w !== word)) {
            usedWords.push(word);
            if (word === "LOVE") document.querySelector("h1").innerHTML = "I <span></span> YOU";
            else document.querySelector("h1").innerHTML = "I <span></span> you";
            document.querySelector("span").innerHTML = word;
            break;
        }
    }
}
changeWord();
