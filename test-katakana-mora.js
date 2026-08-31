// Katakana is tokenized to mora, then ン attaches like the old look-ahead
// (アン → "an"). Never flatten to romaji and re-parse (that mapped ケ → ko).

global.localStorage = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
    clear: () => {}
};

const TransliterationEngine = require('./translation-engine.js');
const kanjiDatabase = require('./kanji-database.js');
const engine = new TransliterationEngine();

function assert(condition, message) {
    if (!condition) throw new Error(message);
}

function assertEqual(actual, expected, label) {
    const a = JSON.stringify(actual);
    const e = JSON.stringify(expected);
    if (a !== e) throw new Error(`${label}: expected ${e}, got ${a}`);
}

const cases = [
    { input: 'チジオケ', syllables: ['chi', 'ji', 'o', 'ke'], kana: ['チ', 'ジ', 'オ', 'ケ'] },
    { input: 'ケ', syllables: ['ke'], kana: ['ケ'] },
    { input: 'コ', syllables: ['ko'], kana: ['コ'] },
    { input: 'ブレイク', syllables: ['bu', 're', 'i', 'ku'], kana: ['ブ', 'レ', 'イ', 'ク'] },
    { input: 'ブレク', syllables: ['bu', 're', 'ku'], kana: ['ブ', 'レ', 'ク'] },
    { input: 'サラ', syllables: ['sa', 'ra'], kana: ['サ', 'ラ'] },
    { input: 'ケン', syllables: ['ken'], kana: ['ケン'] },
    { input: 'ジュリアン', syllables: ['ju', 'ri', 'an'], kana: ['ジュ', 'リ', 'アン'] },
    { input: 'アンジェリ', syllables: ['an', 'je', 'ri'], kana: ['アン', 'ジェ', 'リ'] },
    { input: 'アンジェリー', syllables: ['an', 'je', 'ri'], kana: ['アン', 'ジェ', 'リー'] },
    { input: 'アンゲリ', syllables: ['an', 'ge', 'ri'], kana: ['アン', 'ゲ', 'リ'] },
    { input: 'キャ', syllables: ['kya'], kana: ['キャ'] },
    { input: 'ジェ', syllables: ['je'], kana: ['ジェ'] },
    { input: 'シェ', syllables: ['she'], kana: ['シェ'] },
    { input: 'チェ', syllables: ['che'], kana: ['チェ'] },
    { input: 'キー', syllables: ['ki'], kana: ['キー'] },
    { input: 'ジャッキー', syllables: ['ja', 'ki'], kana: ['ジャ', 'キー'] },
    { input: 'ちじおけ', syllables: ['chi', 'ji', 'o', 'ke'] },
    { input: 'チ・ジ・オ・ケ', syllables: ['chi', 'ji', 'o', 'ke'] },
];

let passed = 0;
let failed = 0;

cases.forEach((testCase) => {
    try {
        assert(engine.isKanaInput(testCase.input), `${testCase.input}: should be detected as kana`);
        const parsed = engine.katakanaToSyllables(testCase.input);
        assertEqual(parsed.syllables, testCase.syllables, `${testCase.input} syllables`);
        if (testCase.kana) {
            assertEqual(parsed.kana, testCase.kana, `${testCase.input} kana`);
        }
        parsed.syllables.forEach((syl) => {
            assert(
                Array.isArray(kanjiDatabase[syl]) && kanjiDatabase[syl].length > 0,
                `${testCase.input}: no kanji for mora "${syl}"`
            );
        });
        assert(
            parsed.syllables[parsed.syllables.length - 1] !== 'ko' || /コ$/.test(engine.normalizeToKatakana(testCase.input)),
            `${testCase.input}: ケ must not become ko`
        );
        passed++;
        console.log(`✓ ${testCase.input.padEnd(12)} → ${parsed.syllables.join('-')}`);
    } catch (err) {
        failed++;
        console.error(`✗ ${err.message}`);
    }
});

try {
    assert(!engine.isKanaInput('Blake'), 'Blake should not be treated as kana');
    assert(!engine.isKanaInput(''), 'empty should not be kana');
    const half = engine.katakanaToSyllables('ﾁｼﾞｵｹ');
    assertEqual(half.syllables, ['chi', 'ji', 'o', 'ke'], 'halfwidth ﾁｼﾞｵｹ');
    passed++;
    console.log('✓ halfwidth ﾁｼﾞｵｹ → chi-ji-o-ke');
} catch (err) {
    failed++;
    console.error(`✗ ${err.message}`);
}

const groupingCases = [
    { input: 'アンジェリー', syllables: ['an', 'je', 'ri'], kana: ['アン', 'ジェ', 'リー'] },
    { input: 'ア・ン・ジェリー', syllables: ['a', 'n', 'je', 'ri'], kana: ['ア', 'ン', 'ジェ', 'リー'] },
    { input: 'アン・ジェ・リー', syllables: ['an', 'je', 'ri'], kana: ['アン', 'ジェ', 'リー'] },
    { input: 'ア ン ジェリー', syllables: ['a', 'n', 'je', 'ri'] },
    { input: 'チジオケ', syllables: ['chi', 'ji', 'o', 'ke'] },
    { input: 'チ・ジ・オ・ケ', syllables: ['chi', 'ji', 'o', 'ke'] },
];

groupingCases.forEach((testCase) => {
    try {
        const parsed = engine.groupKatakanaForKanji(testCase.input);
        assertEqual(parsed.syllables, testCase.syllables, `${testCase.input} grouped syllables`);
        if (testCase.kana) {
            assertEqual(parsed.kana, testCase.kana, `${testCase.input} grouped kana`);
        }
        passed++;
        console.log(`✓ group ${testCase.input} → ${parsed.syllables.join('-')}`);
    } catch (err) {
        failed++;
        console.error(`✗ ${err.message}`);
    }
});

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
