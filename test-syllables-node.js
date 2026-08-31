// Shared node test helper for syllable parsing
global.localStorage = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
    clear: () => {}
};

const kanjiDatabase = require('./kanji-database.js');
global.kanjiDatabase = kanjiDatabase;
const TransliterationEngine = require('./translation-engine.js');

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
        'shi', 'chi', 'tsu', 'rai',
        'kan', 'kin', 'kun', 'ken', 'kon',
        'san', 'sen', 'son', 'tan', 'ten', 'ton',
        'nan', 'nun', 'nen', 'non', 'han', 'hin', 'hun', 'hen', 'hon',
        'man', 'min', 'mun', 'men', 'mon', 'yan', 'yun', 'yon',
        'ran', 'run', 'ren', 'ron', 'wan', 'won',
        'gan', 'gin', 'gun', 'gen', 'gon', 'zan', 'zen', 'zon',
        'dan', 'den', 'don', 'ban', 'bin', 'bun', 'ben', 'bon',
        'pan', 'pin', 'pun', 'pen', 'pon'
    ];
    const twoLetterSyllables = [
        'ka', 'ki', 'ku', 'ke', 'ko',
        'sa', 'si', 'su', 'se', 'so', 'ta', 'te', 'to',
        'na', 'ni', 'nu', 'ne', 'no', 'ha', 'hi', 'fu', 'he', 'ho',
        'ma', 'mi', 'mu', 'me', 'mo', 'ya', 'yu', 'yo',
        'ra', 'ri', 'ru', 're', 'ro', 'wa', 'wi', 'we', 'wo',
        'ga', 'gi', 'gu', 'ge', 'go', 'za', 'ji', 'zu', 'ze', 'zo',
        'da', 'di', 'du', 'de', 'do', 'ba', 'bi', 'bu', 'be', 'bo',
        'pa', 'pi', 'pu', 'pe', 'po', 'ju', 'ja', 'jo', 'je',
        'fa', 'fi', 'fe', 'fo', 'va', 'vi', 'vu', 've', 'vo', 'ti', 'tu',
        'an', 'in', 'un', 'en', 'on'
    ];
    const vowels = ['a', 'i', 'u', 'e', 'o'];

    while (i < romaji.length) {
        let matched = false;

        if (i < romaji.length - 2) {
            const threeChar = romaji.substring(i, i + 3);
            if (threeLetterSyllables.includes(threeChar) && kanjiDatabase[threeChar]) {
                syllables.push(threeChar);
                i += 3;
                matched = true;
            }
        }

        if (!matched && i < romaji.length - 1) {
            const twoChar = romaji.substring(i, i + 2);
            if (!matched && i < romaji.length - 2 && romaji.charAt(i + 2) === 'n') {
                const threeCharWithN = twoChar + 'n';
                if (threeLetterSyllables.includes(threeCharWithN) && kanjiDatabase[threeCharWithN]) {
                    syllables.push(threeCharWithN);
                    i += 3;
                    matched = true;
                }
            }
            if (!matched && twoLetterSyllables.includes(twoChar) && kanjiDatabase[twoChar]) {
                syllables.push(twoChar);
                i += 2;
                matched = true;
            }
        }

        if (!matched) {
            const oneChar = romaji.charAt(i);
            if (vowels.includes(oneChar) && i < romaji.length - 1 && romaji.charAt(i + 1) === 'n') {
                const twoCharWithN = oneChar + 'n';
                if (twoLetterSyllables.includes(twoCharWithN) && kanjiDatabase[twoCharWithN]) {
                    syllables.push(twoCharWithN);
                    i += 2;
                    matched = true;
                }
            }
            if (!matched && (vowels.includes(oneChar) || oneChar === 'n')) {
                if (kanjiDatabase[oneChar]) syllables.push(oneChar);
                i++;
                matched = true;
            }
        }

        if (!matched) {
            const oneChar = romaji.charAt(i);
            const letterMap = {
                'b': 'ba', 'c': 'ka', 'd': 'da', 'f': 'fu',
                'g': 'ga', 'h': 'ha', 'j': 'ju', 'k': 'ka',
                'l': 'ra', 'm': 'ma', 'p': 'pa', 'q': 'ku',
                'r': 'ra', 's': 'sa', 't': 'ta', 'v': 'ba',
                'w': 'wa', 'x': 'ku', 'y': 'ya', 'z': 'za'
            };
            const mappedSyllable = letterMap[oneChar] || 'a';
            if (kanjiDatabase[mappedSyllable]) syllables.push(mappedSyllable);
            i++;
        }
    }

    return syllables;
}

function katakanaToRomaji(katakana) {
    const katakanaMap = {
        'ア': 'a', 'イ': 'i', 'ウ': 'u', 'エ': 'e', 'オ': 'o',
        'カ': 'ka', 'キ': 'ki', 'ク': 'ku', 'ケ': 'ke', 'コ': 'ko',
        'サ': 'sa', 'シ': 'shi', 'ス': 'su', 'セ': 'se', 'ソ': 'so',
        'タ': 'ta', 'チ': 'chi', 'ツ': 'tsu', 'テ': 'te', 'ト': 'to',
        'ナ': 'na', 'ニ': 'ni', 'ヌ': 'nu', 'ネ': 'ne', 'ノ': 'no',
        'ハ': 'ha', 'ヒ': 'hi', 'フ': 'fu', 'ヘ': 'he', 'ホ': 'ho',
        'マ': 'ma', 'ミ': 'mi', 'ム': 'mu', 'メ': 'me', 'モ': 'mo',
        'ヤ': 'ya', 'ユ': 'yu', 'ヨ': 'yo',
        'ラ': 'ra', 'リ': 'ri', 'ル': 'ru', 'レ': 're', 'ロ': 'ro',
        'ワ': 'wa', 'ヲ': 'wo', 'ン': 'n',
        'ガ': 'ga', 'ギ': 'gi', 'グ': 'gu', 'ゲ': 'ge', 'ゴ': 'go',
        'ザ': 'za', 'ジ': 'ji', 'ズ': 'zu', 'ゼ': 'ze', 'ゾ': 'zo',
        'ダ': 'da', 'ヂ': 'ji', 'ヅ': 'zu', 'デ': 'de', 'ド': 'do',
        'バ': 'ba', 'ビ': 'bi', 'ブ': 'bu', 'ベ': 'be', 'ボ': 'bo',
        'パ': 'pa', 'ピ': 'pi', 'プ': 'pu', 'ペ': 'pe', 'ポ': 'po',
        'キャ': 'kya', 'キュ': 'kyu', 'キョ': 'kyo',
        'シャ': 'sha', 'シュ': 'shu', 'ショ': 'sho',
        'チャ': 'cha', 'チュ': 'chu', 'チョ': 'cho',
        'ニャ': 'nya', 'ニュ': 'nyu', 'ニョ': 'nyo',
        'ヒャ': 'hya', 'ヒュ': 'hyu', 'ヒョ': 'hyo',
        'ミャ': 'mya', 'ミュ': 'myu', 'ミョ': 'myo',
        'リャ': 'rya', 'リュ': 'ryu', 'リョ': 'ryo',
        'ギャ': 'gya', 'ギュ': 'gyu', 'ギョ': 'gyo',
        'ジャ': 'ja', 'ジュ': 'ju', 'ジョ': 'jo',
        'ビャ': 'bya', 'ビュ': 'byu', 'ビョ': 'byo',
        'ピャ': 'pya', 'ピュ': 'pyu', 'ピョ': 'pyo',
        'ファ': 'fa', 'フィ': 'fi', 'フェ': 'fe', 'フォ': 'fo',
        'ウィ': 'wi', 'ウェ': 'we', 'ウォ': 'wo',
        'ヴァ': 'va', 'ヴィ': 'vi', 'ヴ': 'vu', 'ヴェ': 've', 'ヴォ': 'vo',
        'ティ': 'ti', 'トゥ': 'tu', 'ディ': 'di', 'ドゥ': 'du',
        'シェ': 'she', 'ジェ': 'je', 'チェ': 'che',
        'ッ': ''
    };

    let romaji = '';
    let i = 0;
    while (i < katakana.length) {
        if (i < katakana.length - 1) {
            const twoChar = katakana.substring(i, i + 2);
            if (katakanaMap[twoChar]) {
                romaji += katakanaMap[twoChar];
                i += 2;
                continue;
            }
        }
        const oneChar = katakana.charAt(i);
        if (katakanaMap[oneChar]) romaji += katakanaMap[oneChar];
        i++;
    }
    return romaji;
}

module.exports = { romajiToSyllables, katakanaToRomaji, TransliterationEngine };
