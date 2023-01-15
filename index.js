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

/*
const words = [
    "accommodating",
    "adept",
    "admirable",
    "admiring",
    "adorable",
    "agreeable",
    "alluring",
    "amazing",
    "appealing",
    "appreciative",
    "approachable",
    "attractive",
    "awesome",

    "beautiful",
    "benevolent",
    "bold",
    "bountiful",
    "brainy",
    "brave",
    "breathtaking",
    "bright",
    "brilliant",

    "calm",
    "calming",
    "capable",
    "careful",
    "charismatic",
    "charitable",
    "charming",
    "cheerful",
    "chill",
    "chilled",
    "civil",
    "clean",
    "colorful",
    "comfy",
    "commendable",
    "composed",
    "conscious",
    "considerate",
    "consummate",
    "cool",
    "cooperative",
    "correct",
    "courageous",
    "courteous",
    "creative",
    "cute",

    "daring",
    "dazzling",
    "decent",
    "dedicated",
    "delightful",
    "dependable",
    "deserving",
    "determined",
    "detailed",
    "devoted",
    "different",
    "discerning",
    "driven",
    "dutiful",

    "effervescent",
    "elegant",
    "elevating",
    "enchanting",
    "encouraging",
    "endearing",
    "energetic",
    "engaging",
    "enhanced",
    "enjoyable",
    "enough",
    "enthusiastic",

    "fair",
    "fantastic",
    "favorable",
    "fine",
    "first-class",
    "flattering",
    "fortitudinous",
    "friendly",
    "fun",
    "funny",

    "gallant",
    "generous",
    "gentle",
    "genuine",
    "gifted",
    "giving",
    "gleaming",
    "glittering",
    "glorious",
    "glowing",
    "goal-driven",
    "good",
    "goofy",
    "gorgeous",
    "graceful",
    "gracious",
    "grateful",
    "great",

    "handsome",
    "happy",
    "hard-working",
    "hardy",
    "helpful",
    "hilarious",
    "honest",
    "honorable",

    "impeccable",
    "incredible",
    "innocent",
    "insightful",
    "inspiring",
    "intelligent",
    "interesting",
    "irresistible",

    "joyful",
    "judicious",

    "kind",
    "kindred",

    "likable",
    "lovable",
    "loved",
    "lovely",
    "loving",
    "loyal",
    "luminous",

    "magnanimous",
    "magnificent",
    "marvelous",
    "mellow",
    "mesmerizing",
    "mindful",
    "momentous",
    "moving",

    "neat",
    "nice",
    "noticeable",

    "observant",
    "optimistic",
    "opulent",
    "ordered",
    "organized",

    "patient",
    "perceptive",
    "perfect",
    "pleasant",
    "pleasing",
    "polite",
    "positive",
    "praiseworthy",
    "precious",
    "pretty",
    "priceless",
    "principled",
    "prudent",
    "punctual",
    "pure",

    "quick",

    "radiant",
    "rational",
    "real",
    "respectful",

    "self-aware",
    "sensational",
    "sensible",
    "serene",
    "sharp",
    "shining",
    "shrewd",
    "sincere",
    "smart",
    "sparkling",
    "special",
    "specialist",
    "spectacular",
    "splendid",
    "spontaneous",
    "steadfast",
    "strong",
    "stunning",
    "stylish",
    "super",
    "superb",
    "supercalifragilisticexpialidocious",
    "superior",
    "supporting",
    "supportive",
    "supreme",
    "sweet",

    "tenacious",
    "thoughtful",
    "trusting",
    "trustworthy",

    "unequalled",
    "unique",
    "upbeat",

    "valiant",
    "valuable",
    "valued",
    "vigilant",
    "vigorous",
    "virtuous",

    "warm",
    "mannered",
    "whimsical",
    "wholesome",
    "wise",
    "witty",
    "wonderful",
    "wondrous",
    "worthy",

    "zealous",
    "zesty"
];
*/
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