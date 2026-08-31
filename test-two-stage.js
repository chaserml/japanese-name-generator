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

check('Angelie English suggested is アンジェリー, grouped an-je-ri', () => {
    const options = engine.generateKatakanaOptions('Angelie', 'en');
    const spellings = options.map((o) => o.katakana);
    const suggested = options.find((o) => o.recommended);
    assert(suggested, 'missing suggested option');
    assert(suggested.katakana === 'アンジェリー', `got ${suggested.katakana}`);
    assert(suggested.syllables.join('-') === 'an-je-ri', `got ${suggested.syllables.join('-')}`);
    assert(JSON.stringify(suggested.kana) === JSON.stringify(['アン', 'ジェ', 'リー']),
        `got ${JSON.stringify(suggested.kana)}`);
    assert(spellings.includes('アンジェリ'), `short i missing in ${spellings.join(', ')}`);
    assert(spellings.some((s) => s.includes('ゲ')), `hard G option missing in ${spellings.join(', ')}`);
});

check('Angelie as-written vowels suggested is hard G (ゲ), still offers ジェ', () => {
    const options = engine.generateKatakanaOptions('Angelie', 'la');
    const spellings = options.map((o) => o.katakana);
    const suggested = options.find((o) => o.recommended);
    assert(suggested, 'missing suggested option');
    assert(suggested.katakana.includes('ゲ'), `as-written suggested should use ゲ, got ${suggested.katakana}`);
    assert(!suggested.katakana.includes('ジェ'), `as-written suggested should not be ジェ, got ${suggested.katakana}`);
    assert(spellings.some((s) => s.includes('ジェ')), `soft G option missing in ${spellings.join(', ')}`);
    assert(!suggested.syllables.includes('n'),
        `ン should attach to the previous mora, got ${suggested.syllables.join('-')}`);
});

check('Chijioke as-written vowels suggested ends in ケ', () => {
    const options = engine.generateKatakanaOptions('Chijioke', 'la');
    const spellings = options.map((o) => o.katakana);
    const suggested = options.find((o) => o.recommended);
    assert(suggested, 'missing suggested option');
    assert(suggested.katakana.endsWith('ケ'), `suggested should end in ケ, got ${suggested.katakana}`);
    assert(suggested.syllables[suggested.syllables.length - 1] === 'ke',
        `last slot must be ke, got ${suggested.syllables.join('-')}`);
    assert(spellings.some((s) => s.endsWith('ク')), `ク ending missing in ${spellings.join(', ')}`);
    assert(!spellings.some((s) => s.endsWith('コ')), `should not offer コ: ${spellings.join(', ')}`);
});

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
