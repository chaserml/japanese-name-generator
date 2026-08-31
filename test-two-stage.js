// Two-stage roman names: dictionary skips katakana picker;
// unknown names get ク/ケ (and similar) katakana choices.

global.localStorage = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
    clear: () => {}
};

const TransliterationEngine = require('./translation-engine.js');
const engine = new TransliterationEngine();

function assert(condition, message) {
    if (!condition) throw new Error(message);
}

let passed = 0;
let failed = 0;

function check(label, fn) {
    try {
        fn();
        passed++;
        console.log(`✓ ${label}`);
    } catch (err) {
        failed++;
        console.error(`✗ ${label}: ${err.message}`);
    }
}

check('Blake is curated (skips katakana picker)', () => {
    assert(engine.hasCuratedTranslation('Blake', 'en'), 'Blake should be in the dictionary');
});

check('Mike is curated', () => {
    assert(engine.hasCuratedTranslation('Mike', 'en'), 'Mike should be in the dictionary');
});

check('Chijioke is not curated', () => {
    assert(!engine.hasCuratedTranslation('Chijioke', 'en'), 'Chijioke should not be in the dictionary');
});

check('Rake is not curated', () => {
    assert(!engine.hasCuratedTranslation('Rake', 'en'), 'Rake should not be in the dictionary');
});

check('Chijioke options include チジオケ and チジオク', () => {
    const options = engine.generateKatakanaOptions('Chijioke', 'en');
    const spellings = options.map((o) => o.katakana);
    assert(spellings.includes('チジオケ'), `missing チジオケ in ${spellings.join(', ')}`);
    assert(spellings.includes('チジオク'), `missing チジオク in ${spellings.join(', ')}`);
    const ke = options.find((o) => o.katakana === 'チジオケ');
    const parsed = engine.katakanaToSyllables(ke.katakana);
    assert(parsed.syllables.join('-') === 'chi-ji-o-ke', `got ${parsed.syllables.join('-')}`);
    assert(parsed.syllables[parsed.syllables.length - 1] === 'ke', 'last mora must be ke');
});

check('Rake options include ク and ケ endings', () => {
    const options = engine.generateKatakanaOptions('Rake', 'en');
    const spellings = options.map((o) => o.katakana);
    assert(spellings.some((s) => s.endsWith('ク')), `no ク ending in ${spellings.join(', ')}`);
    assert(spellings.some((s) => s.endsWith('ケ')), `no ケ ending in ${spellings.join(', ')}`);
    assert(!spellings.some((s) => s.endsWith('コ')), `should not offer コ: ${spellings.join(', ')}`);
});

check('typed katakana is detected and does not need options', () => {
    assert(engine.isKanaInput('チジオケ'), 'should detect kana');
});

check('romaji ブレイク reading', () => {
    const reading = engine.romajiToKatakanaReading('bureku');
    assert(reading.katakana === 'ブレク', `got ${reading.katakana}`);
});

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
