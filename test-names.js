// Test script for Japanese Name Generator
// Tests the top 200 US names for proper parsing

// Mock localStorage for Node.js environment
global.localStorage = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
    clear: () => {}
};

// Load the translation engine
const TransliterationEngine = require('./translation-engine.js');

// Create an instance
const engine = new TransliterationEngine();

// Top 200 names from name95pct.txt
const top200Names = [
    "James", "John", "Robert", "Michael", "William", "Mary", "David", "Joseph", "Richard", "Charles",
    "Thomas", "Christopher", "Daniel", "Elizabeth", "Matthew", "Patricia", "George", "Anthony", "Jennifer", "Linda",
    "Barbara", "Donald", "Paul", "Mark", "Andrew", "Edward", "Steven", "Kenneth", "Margaret", "Joshua",
    "Kevin", "Brian", "Susan", "Dorothy", "Sarah", "Timothy", "Ronald", "Jason", "Jessica", "Helen",
    "Nancy", "Betty", "Karen", "Ryan", "Jacob", "Jeffrey", "Lisa", "Nicholas", "Frank", "Anna",
    "Gary", "Emily", "Eric", "Sandra", "Ashley", "Jonathan", "Stephen", "Kimberly", "Ruth", "Donna",
    "Carol", "Benjamin", "Michelle", "Samuel", "Larry", "Laura", "Justin", "Amanda", "Raymond", "Scott",
    "Brandon", "Emma", "Melissa", "Henry", "Rebecca", "Jack", "Stephanie", "Deborah", "Alexander", "Sharon",
    "Kathleen", "Gregory", "Cynthia", "Amy", "Shirley", "Patrick", "Angela", "Catherine", "Virginia", "Katherine",
    "Walter", "Evelyn", "Jerry", "Dennis", "Tyler", "Aaron", "Brenda", "Frances", "Pamela", "Willie",
    "Nicole", "Jose", "Samantha", "Peter", "Christine", "Alice", "Nathan", "Adam", "Rachel", "Maria",
    "Douglas", "Janet", "Carolyn", "Kelly", "Olivia", "Harold", "Martha", "Debra", "Zachary", "Arthur",
    "Marie", "Jordan", "Grace", "Heather", "Victoria", "Terry", "Diane", "Noah", "Julie", "Joyce",
    "Carl", "Rose", "Kyle", "Albert", "Joan", "Jean", "Christina", "Lauren", "Ethan", "Julia",
    "Lillian", "Ann", "Christian", "Doris", "Joe", "Lawrence", "Hannah", "Kathryn", "Judith", "Mildred",
    "Gerald", "Andrea", "Jeremy", "Roger", "Jesse", "Taylor", "Megan", "Charlotte", "Cheryl", "Austin",
    "Keith", "Sara", "Dylan", "Jacqueline", "Sophia", "Sean", "Harry", "Madison", "Teresa", "Gloria",
    "Ralph", "Logan", "Alexis", "Roy", "Abigail", "Louis", "Janice", "Isabella", "Theresa", "Gabriel",
    "Bryan", "Billy", "Bruce", "Judy", "Eugene", "Leslie", "Beverly", "Jane", "Natalie", "Ruby",
    "Amber", "Denise", "Marilyn", "Danielle", "Elijah", "Diana", "Juan", "Alan", "Brittany", "Vincent"
];

// Syllable parser (simplified from script.js)
function romajiToSyllables(romaji) {
    romaji = romaji.toLowerCase().trim();
    const syllables = [];
    let i = 0;

    const threeLetterSyllables = [
        'jyu', 'kya', 'kyu', 'kyo', 'sha', 'shu', 'sho', 
        'cha', 'chu', 'cho', 'nya', 'nyu', 'nyo', 'hya', 
        'hyu', 'hyo', 'mya', 'myu', 'myo', 'rya', 'ryu', 
        'ryo', 'gya', 'gyu', 'gyo', 'bya', 'byu', 'byo', 
        'pya', 'pyu', 'pyo', 'she', 'che',
        'kan', 'kin', 'kun', 'ken', 'kon',
        'san', 'sen', 'son',
        'tan', 'ten', 'ton',
        'nan', 'nun', 'nen', 'non',
        'han', 'hin', 'hun', 'hen', 'hon',
        'man', 'min', 'mun', 'men', 'mon',
        'yan', 'yun', 'yon',
        'ran', 'run', 'ren', 'ron', // removed 'rin'
        'wan', 'won',
        'gan', 'gin', 'gun', 'gen', 'gon',
        'zan', 'zen', 'zon',
        'dan', 'den', 'don',
        'ban', 'bin', 'bun', 'ben', 'bon',
        'pan', 'pin', 'pun', 'pen', 'pon'
    ];

    const twoLetterSyllables = [
        'ka', 'ki', 'ku', 'ke', 'ko',
        'sa', 'shi', 'si', 'su', 'se', 'so',
        'ta', 'chi', 'tsu', 'te', 'to',
        'na', 'ni', 'nu', 'ne', 'no',
        'ha', 'hi', 'fu', 'he', 'ho',
        'ma', 'mi', 'mu', 'me', 'mo',
        'ya', 'yu', 'yo',
        'ra', 'ri', 'ru', 're', 'ro',
        'wa', 'wi', 'we', 'wo',
        'ga', 'gi', 'gu', 'ge', 'go',
        'za', 'ji', 'zu', 'ze', 'zo',
        'da', 'di', 'du', 'de', 'do',
        'ba', 'bi', 'bu', 'be', 'bo',
        'pa', 'pi', 'pu', 'pe', 'po',
        'ju', 'ja', 'jo', 'je',
        'fa', 'fi', 'fe', 'fo',
        'va', 'vi', 'vu', 've', 'vo',
        'ti', 'tu',
        'an', 'in', 'un', 'en', 'on'
    ];

    const vowels = ['a', 'i', 'u', 'e', 'o'];

    while (i < romaji.length) {
        let matched = false;

        // Try three-letter syllables
        if (i < romaji.length - 2) {
            const threeChar = romaji.substring(i, i + 3);
            if (threeLetterSyllables.includes(threeChar)) {
                syllables.push(threeChar);
                i += 3;
                matched = true;
            }
        }

        // Try two-letter syllables
        if (!matched && i < romaji.length - 1) {
            const twoChar = romaji.substring(i, i + 2);
            if (twoLetterSyllables.includes(twoChar)) {
                syllables.push(twoChar);
                i += 2;
                matched = true;
            }
        }

        // Try single vowels or 'n'
        if (!matched) {
            const oneChar = romaji.charAt(i);
            if (vowels.includes(oneChar) || oneChar === 'n') {
                syllables.push(oneChar);
                i++;
                matched = true;
            }
        }

        // Fallback
        if (!matched) {
            const oneChar = romaji.charAt(i);
            syllables.push('?' + oneChar);
            i++;
        }
    }

    return syllables;
}

// Test results
console.log("Testing Top 200 US Names\n");
console.log("=" .repeat(80));

const issues = [];
let totalTests = 0;

top200Names.forEach((name, index) => {
    totalTests++;
    const romaji = engine.translateName(name, 'en');
    const syllables = romajiToSyllables(romaji);
    
    // Check for issues
    const hasUnknownSyllables = syllables.some(s => s.startsWith('?'));
    const hasTooManySyllables = syllables.length > 6;
    
    if (hasUnknownSyllables || hasTooManySyllables) {
        issues.push({
            name,
            romaji,
            syllables: syllables.join('-'),
            issue: hasUnknownSyllables ? 'Unknown syllables' : 'Too many syllables'
        });
    }
    
    // Print progress every 50 names
    if ((index + 1) % 50 === 0) {
        console.log(`Tested ${index + 1}/${top200Names.length} names...`);
    }
});

console.log("\n" + "=".repeat(80));
console.log(`\nTotal names tested: ${totalTests}`);
console.log(`Names with issues: ${issues.length}`);
console.log(`Success rate: ${((totalTests - issues.length) / totalTests * 100).toFixed(1)}%\n`);

if (issues.length > 0) {
    console.log("Issues found:\n");
    console.log("Name".padEnd(15) + "Romaji".padEnd(20) + "Syllables".padEnd(25) + "Issue");
    console.log("-".repeat(80));
    
    issues.forEach(issue => {
        console.log(
            issue.name.padEnd(15) +
            issue.romaji.padEnd(20) +
            issue.syllables.padEnd(25) +
            issue.issue
        );
    });
} else {
    console.log("✓ All names parsed successfully!");
}

console.log("\n" + "=".repeat(80));
