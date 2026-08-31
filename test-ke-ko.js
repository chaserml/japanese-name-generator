// Regression tests: English names ending in "ke" must not map to "ko".
// Silent-e names (Blake, Mike, Luke) should end in "ku", matching Japanese
// katakana (ブレイク, マイク, ルーク). Pronounced "ke" (Enrique) stays "ke".
// Genuine "ko" names (Francisco, Nico) must still end in "ko".

global.localStorage = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
    clear: () => {}
};

const TransliterationEngine = require('./translation-engine.js');
const engine = new TransliterationEngine();

function assert(condition, message) {
    if (!condition) {
        throw new Error(message);
    }
}

function endsWithKo(romaji) {
    return /ko$/.test(romaji);
}

const cases = [
    // Dictionary path — curated -ke names
    { name: 'Blake', expected: 'bureiku' },
    { name: 'Blayke', expected: 'bureiku' },
    { name: 'Mike', expected: 'maiku' },
    { name: 'Jake', expected: 'jeiku' },
    { name: 'Luke', expected: 'ruku' },
    { name: 'Brooke', expected: 'buruku' },
    { name: 'Drake', expected: 'doreiku' },
    { name: 'Duke', expected: 'duuku' },
    { name: 'Ike', expected: 'aiku' },
    { name: 'Zeke', expected: 'jiiku' },
    { name: 'Lake', expected: 'reiku' },
    { name: 'Burke', expected: 'baaku' },
    { name: 'Clarke', expected: 'kuraaku' },
    { name: 'Spike', expected: 'supaiku' },

    // Phonetic path — names not in the dictionary
    { name: 'Rake', expectedPhonetic: true, mustEnd: 'ku', mustNotEnd: 'ko' },
    { name: 'Hake', expectedPhonetic: true, mustEnd: 'ku', mustNotEnd: 'ko' },
    { name: 'Snake', expectedPhonetic: true, mustEnd: 'ku', mustNotEnd: 'ko' },
    { name: 'Flake', expectedPhonetic: true, mustEnd: 'ku', mustNotEnd: 'ko' },
    { name: 'Pike', expectedPhonetic: true, mustEnd: 'ku', mustNotEnd: 'ko' },
    { name: 'Puke', expectedPhonetic: true, mustEnd: 'ku', mustNotEnd: 'ko' },

    // Final /k/ without silent e should also get ku, not ko
    { name: 'Kirk', expectedPhonetic: true, mustEnd: 'ku', mustNotEnd: 'ko' },
    { name: 'York', expectedPhonetic: true, mustEnd: 'ku', mustNotEnd: 'ko' },

    // Genuine ko endings must be preserved
    { name: 'Francisco', expected: 'furanshisuko' },
    { name: 'Nico', expectedPhonetic: true, mustEnd: 'ko' },
    { name: 'Niko', expectedPhonetic: true, mustEnd: 'ko' },

    // Latin pronounced -ke stays ke (Enrique → Enrike)
    { name: 'Enrique', language: 'la', expectedContains: 'ke', mustNotEnd: 'ko' },
];

let passed = 0;
let failed = 0;

cases.forEach((testCase) => {
    const language = testCase.language || 'en';
    const romaji = engine.translateName(testCase.name, language);
    const phonetic = engine.phoneticTransliteration(testCase.name.toLowerCase(), language);

    try {
        if (testCase.expected) {
            assert(
                romaji === testCase.expected,
                `${testCase.name}: expected "${testCase.expected}", got "${romaji}"`
            );
        }
        if (testCase.mustEnd) {
            const source = testCase.expectedPhonetic ? phonetic : romaji;
            assert(
                source.endsWith(testCase.mustEnd),
                `${testCase.name}: expected to end with "${testCase.mustEnd}", got "${source}"`
            );
        }
        if (testCase.mustNotEnd) {
            const source = testCase.expectedPhonetic ? phonetic : romaji;
            assert(
                !source.endsWith(testCase.mustNotEnd),
                `${testCase.name}: must not end with "${testCase.mustNotEnd}", got "${source}"`
            );
        }
        if (testCase.expectedContains) {
            assert(
                romaji.includes(testCase.expectedContains),
                `${testCase.name}: expected to contain "${testCase.expectedContains}", got "${romaji}"`
            );
        }
        // Universal guard: English -ke names must never resolve to -ko
        if (/ke$/i.test(testCase.name) && language === 'en') {
            assert(
                !endsWithKo(romaji) && !endsWithKo(phonetic),
                `${testCase.name}: -ke name mapped to ko (${romaji} / ${phonetic})`
            );
        }
        passed++;
        console.log(`✓ ${testCase.name.padEnd(12)} → ${romaji}${testCase.expectedPhonetic ? ` (phonetic ${phonetic})` : ''}`);
    } catch (err) {
        failed++;
        console.error(`✗ ${err.message}`);
    }
});

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) {
    process.exit(1);
}
