// Regression tests: English names ending in "ke" must not map to "ko".
// Silent-e names (Blake, Mike, Luke) should end in "ku" (ク), not "ko" (コ).
// Pronounced "ke" syllables (Chijioke, katakana チジオケ) stay "ke".
// Genuine "ko" names (Francisco, Nico) must still end in "ko".

global.localStorage = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
    clear: () => {}
};

const TransliterationEngine = require('./translation-engine.js');
const { romajiToSyllables } = require('./test-syllables-node.js');
const engine = new TransliterationEngine();

function assert(condition, message) {
    if (!condition) {
        throw new Error(message);
    }
}

function endsWithKo(romaji) {
    return /ko$/.test(romaji);
}

function lastSyllable(input, mode = 'english', language = 'en') {
    if (mode === 'katakana') {
        const parsed = engine.katakanaToSyllables(input);
        return { romaji: parsed.syllables.join(''), syllables: parsed.syllables, last: parsed.syllables[parsed.syllables.length - 1] };
    }
    const romaji = engine.translateName(input, language);
    const syllables = romajiToSyllables(romaji);
    return { romaji, syllables, last: syllables[syllables.length - 1] };
}

const cases = [
    // Dictionary path — curated -ke names ending in ku
    { name: 'Blake', expected: 'bureku', lastSyllable: 'ku' },
    { name: 'Blayke', expected: 'bureku', lastSyllable: 'ku' },
    { name: 'Mike', expected: 'maiku', lastSyllable: 'ku' },
    { name: 'Jake', expected: 'jeiku', lastSyllable: 'ku' },
    { name: 'Luke', expected: 'ruku', lastSyllable: 'ku' },
    { name: 'Brooke', expected: 'buruku', lastSyllable: 'ku' },
    { name: 'Drake', expected: 'doreiku', lastSyllable: 'ku' },
    { name: 'Duke', expected: 'duuku', lastSyllable: 'ku' },
    { name: 'Ike', expected: 'aiku', lastSyllable: 'ku' },
    { name: 'Zeke', expected: 'jiiku', lastSyllable: 'ku' },
    { name: 'Lake', expected: 'reiku', lastSyllable: 'ku' },
    { name: 'Burke', expected: 'baaku', lastSyllable: 'ku' },
    { name: 'Clarke', expected: 'kuraaku', lastSyllable: 'ku' },
    { name: 'Spike', expected: 'supaiku', lastSyllable: 'ku' },

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

    // Pronounced -ke syllable (not English silent e): stays ke
    { name: 'Chijioke', expectedPhonetic: true, lastSyllable: 'ke', mustNotEnd: 'ko' },
    { name: 'Chijioke', language: 'la', expectedPhonetic: true, lastSyllable: 'ke', mustNotEnd: 'ko' },

    // Katakana input: ケ must stay ke, not ko
    { name: 'チジオケ', mode: 'katakana', lastSyllable: 'ke', mustNotEnd: 'ko' },
    { name: 'ブレク', mode: 'katakana', lastSyllable: 'ku', mustNotEnd: 'ko' },

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
    const mode = testCase.mode || 'english';
    const romaji = mode === 'katakana'
        ? engine.katakanaToSyllables(testCase.name).syllables.join('')
        : engine.translateName(testCase.name, language);
    const phonetic = engine.phoneticTransliteration(testCase.name.toLowerCase(), language);
    const parsed = lastSyllable(testCase.name, mode, language);

    try {
        if (testCase.expected) {
            assert(
                romaji === testCase.expected,
                `${testCase.name}: expected "${testCase.expected}", got "${romaji}"`
            );
        }
        if (testCase.lastSyllable) {
            assert(
                parsed.last === testCase.lastSyllable,
                `${testCase.name}: expected last syllable "${testCase.lastSyllable}", got "${parsed.last}" (${parsed.syllables.join('-')})`
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
            assert(
                parsed.last !== 'ko',
                `${testCase.name}: must not parse to ko syllable, got "${parsed.last}" (${parsed.syllables.join('-')})`
            );
        }
        if (testCase.expectedContains) {
            assert(
                romaji.includes(testCase.expectedContains),
                `${testCase.name}: expected to contain "${testCase.expectedContains}", got "${romaji}"`
            );
        }
        if (/ke$/i.test(testCase.name) && language === 'en' && mode === 'english' && !testCase.lastSyllable) {
            assert(
                !endsWithKo(romaji) && !endsWithKo(phonetic),
                `${testCase.name}: -ke name mapped to ko (${romaji} / ${phonetic})`
            );
        }
        passed++;
        console.log(`✓ ${testCase.name.padEnd(12)} → ${romaji}${testCase.expectedPhonetic ? ` (phonetic ${phonetic})` : ''} [${parsed.syllables.join('-')}]`);
    } catch (err) {
        failed++;
        console.error(`✗ ${err.message}`);
    }
});

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) {
    process.exit(1);
}
