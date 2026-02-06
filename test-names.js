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

// Names 201-700 from name95pct.txt
const testNames = [
    "Angel", "Russell", "Annie", "Jamie", "Irene", "Wayne", "Howard", "Shannon",
    "Ella", "Kayla", "Fred", "Philip", "Lori", "Cameron", "Tiffany", "Florence",
    "Mason", "Shawn", "Robin", "Louise", "Liam", "Ava", "Lois", "Kathy",
    "Randy", "Tammy", "Crystal", "Bonnie", "Victor", "Eleanor", "Josephine", "Isaac",
    "Erin", "Anne", "Bobby", "Phyllis", "Lucas", "Johnny", "Allison", "Caleb",
    "Francis", "Luke", "Martin", "Alyssa", "Bradley", "Tracy", "Phillip", "Travis",
    "Carlos", "Audrey", "Clarence", "Theodore", "Ernest", "Stanley", "Craig", "Dale",
    "Mia", "Hazel", "Clara", "Edna", "Cody", "Lee", "Leonard", "Alex",
    "Peggy", "Tina", "Luis", "Earl", "Jackson", "Jimmy", "Dawn", "Evan",
    "Danny", "Nathaniel", "Rita", "Eva", "Adrian", "Todd", "Wanda", "Paula",
    "Courtney", "Jessie", "Joel", "Ethel", "Norma", "Ellen", "Marjorie", "Connie",
    "Hunter", "Allen", "Valerie", "Jayden", "Edith", "Esther", "Amelia", "Morgan",
    "Gladys", "Carrie", "Frederick", "Brianna", "Wendy", "Antonio", "Curtis", "Elaine",
    "Vanessa", "Marion", "Melanie", "Julian", "Jasmine", "Cindy", "Oliver", "Marvin",
    "Aiden", "Norman", "Ian", "Tony", "Leo", "Leah", "Monica", "Glenn",
    "Isaiah", "Chloe", "Rodney", "Caroline", "Edwin", "Melvin", "Dana", "Wesley",
    "Alexandra", "Sylvia", "Alfred", "Jesus", "April", "Steve", "Chad", "Marcus",
    "Katie", "Riley", "Sheila", "Owen", "Derek", "Lynn", "Connor", "Erica",
    "Lucille", "Jeffery", "Lucy", "Sherry", "Alicia", "Avery", "Herbert", "Vivian",
    "Eddie", "Pauline", "Thelma", "Michele", "Ricky", "Veronica", "Jeremiah", "Kristen",
    "Charlie", "Suzanne", "Calvin", "Troy", "Anita", "Kim", "Dolores", "Oscar",
    "Joanne", "Geraldine", "Gail", "Claire", "Lorraine", "Carter", "Ray", "Sebastian",
    "Dustin", "Bertha", "Rhonda", "Juanita", "Jill", "June", "Levi", "Mike",
    "Jared", "Holly", "Sally", "Darlene", "Madeline", "Blake", "Wyatt", "Stella",
    "Leroy", "Bernard", "Randall", "Brooke", "Jay", "Shane", "Beatrice", "Corey",
    "Casey", "Dean", "Manuel", "Dominic", "Ronnie", "Clifford", "Miguel", "Eileen",
    "Savannah", "Elsie", "Gavin", "Ida", "Debbie", "Nora", "Renee", "Naomi",
    "Sydney", "Stacy", "Bernice", "Landon", "Lydia", "Regina", "Warren", "Lily",
    "Chase", "Barry", "Leon", "Tommy", "Kristin", "Jo", "Hailey", "Sofia",
    "Violet", "Rosa", "Gertrude", "Loretta", "Tara", "Molly", "Devin", "Roberta",
    "Cassandra", "Bessie", "Cathy", "Jackie", "Chris", "Annette", "Jon", "Don",
    "Laurie", "Kaitlyn", "Max", "Seth", "Alma", "Lindsey", "Mitchell", "Shelby",
    "Georgia", "Jeanette", "Jeanne", "Colleen", "Chelsea", "Pearl", "Aubrey", "Brett",
    "Rosemary", "Alvin", "Jerome", "Lloyd", "Stacey", "Trevor", "Bill", "Darrell",
    "Haley", "Minnie", "Agnes", "Beth", "Lillie", "Addison", "Carmen", "Zoe",
    "Xavier", "Parker", "Erik", "Joann", "Edgar", "Yvonne", "Micheal", "Daisy",
    "Lewis", "Floyd", "Kelsey", "Gordon", "Cora", "Jim", "Vicki", "Gina",
    "Nellie", "Cole", "Destiny", "Mario", "Johnnie", "Eli", "Carla", "Heidi",
    "Colton", "Clyde", "Ivan", "Jenna", "Vera", "Vernon", "Mackenzie", "Paige",
    "Terri", "Faith", "Ricardo", "Derrick", "Sadie", "Lena", "Alejandro", "Sue",
    "Maureen", "Hayden", "Josiah", "Autumn", "Arlene", "Marian", "Joy", "Francisco",
    "Sabrina", "Franklin", "Mabel", "Marc", "Wilma", "Tom", "Brent", "Constance",
    "Kaylee", "Gabrielle", "Jorge", "Harper", "Clayton", "Maurice", "Peyton", "Carson",
    "Kristina", "Myrtle", "Herman", "Melinda", "Brayden", "Garrett", "Lindsay", "Jimmie",
    "Gabriella", "Grant", "Billie", "Sophie", "Deanna", "Charlene", "Katelyn", "Gene",
    "Cory", "Mattie", "Marcia", "Colin", "Viola", "Nina", "Everett", "Dakota",
    "Isabel", "Andre", "Lester", "Alexa", "Tamara", "Elmer", "Nolan", "Bailey",
    "Marlene", "Gilbert", "Tristan", "Micah", "Jake", "Claudia", "Spencer", "Sam",
    "Jennie", "Harvey", "Grayson", "Patsy", "Glen", "Bryce", "Erika", "Angelina",
    "Brooklyn", "Diego", "Gwendolyn", "Layla", "Genevieve", "Preston", "Priscilla", "Maggie",
    "Chester", "Jaime", "Marissa", "Tonya", "Kylie", "Elias", "Jeff", "Aidan",
    "Maya", "Cooper", "Milton", "Ariana", "Delores", "Camila", "Tanya", "Miles",
    "Miriam", "Alison", "Ruben", "Duane", "Mateo", "Maxine", "Mae", "Miranda",
    "Mariah", "Cecil", "Yolanda", "Roberto", "Leona", "Madelyn", "Jocelyn", "Caitlin",
    "Reginald", "Zoey", "Melody", "Joanna", "Carole", "Jaxon", "Ana", "Vickie",
    "Eduardo", "Glenda", "Cecilia", "Brandy", "Sidney", "Hector", "Makayla", "Maxwell",
    "Hudson", "Aaliyah", "Javier", "Dan", "Damian", "Bobbie", "Jade", "Dora",
    "Margie", "Scarlett", "Ashton", "Isabelle", "Lance", "Ada", "Omar", "Asher",
    "Neil", "Hattie", "Gianna", "Marsha", "Darren", "Arnold", "Alexandria", "Skylar",
    "Whitney", "Penelope", "Elena", "Ezra", "Fernando", "Arianna", "Kay", "Abraham",
    "Brandi", "Lincoln", "Kara", "Toni", "Karl", "Katrina", "Lonnie", "Kendall",
    "Roland", "Bethany", "Ellie", "Penny", "Christy", "Sierra", "Nicolas", "Tanner",
    "Ariel", "Roman", "Kerry", "Iris"
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
console.log("Testing Next 500 US Names (201-700)\n");
console.log("=" .repeat(80));

const issues = [];
let totalTests = 0;

testNames.forEach((name, index) => {
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
        console.log(`Tested ${index + 1}/${testNames.length} names...`);
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
