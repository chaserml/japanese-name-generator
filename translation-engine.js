// Phonetic Transliteration Engine for Foreign Names to Japanese Katakana/Romaji
// Handles English, German, Latin, and Indian names

class TransliterationEngine {
    constructor() {
        // Load common name translations
        this.nameDict = this.loadNameDictionary();
        
        // Load custom translations from localStorage
        this.customTranslations = this.loadCustomTranslations();
    }

    /**
     * Main entry point: Convert any foreign name to Japanese romaji syllables
     * @param {string} name - The foreign name to convert
     * @param {string} language - Optional language hint ('en', 'de', 'hi', 'la')
     * @returns {string} - Romaji representation (e.g., "cheisu" for "Chase")
     */
    translateName(name, language = 'en') {
        const lowerName = name.toLowerCase().trim();
        
        // 1. Check custom translations first (user-added corrections)
        if (this.customTranslations[lowerName]) {
            return this.customTranslations[lowerName];
        }
        
        // 2. Check common name dictionary
        if (this.nameDict[lowerName]) {
            return this.nameDict[lowerName];
        }
        
        // 3. Apply phonetic rules based on language
        return this.phoneticTransliteration(lowerName, language);
    }

    /**
     * Phonetic transliteration using language-specific rules
     */
    phoneticTransliteration(name, language) {
        let phonetic = name;
        
        // Apply language-specific transformations
        switch(language) {
            case 'de': // German
                phonetic = this.applyGermanRules(phonetic);
                break;
            case 'hi': // Hindi/Indian
                phonetic = this.applyIndianRules(phonetic);
                break;
            case 'la': // Latin/Spanish/Italian
                phonetic = this.applyLatinRules(phonetic);
                break;
            default: // English
                phonetic = this.applyEnglishRules(phonetic);
        }
        
        // Final cleanup and conversion to katakana-compatible romaji
        return this.normalizeToRomaji(phonetic);
    }

    /**
     * English pronunciation rules
     */
    applyEnglishRules(name) {
        const rules = [
            // Consonant digraphs and special combinations (MUST come first)
            { pattern: /th/g, replacement: 's' },           // Matthew → Mashu
            { pattern: /ph/g, replacement: 'f' },           // Philip → Firippu
            { pattern: /ch/g, replacement: 'ch' },          // Chase → Cheisu (keep as-is)
            { pattern: /sh/g, replacement: 'sh' },          // Sharon → Sharon
            { pattern: /gh/g, replacement: '' },            // Leigh → Lei
            { pattern: /ck/g, replacement: 'kku' },         // Jack → Jakku
            { pattern: /qu/g, replacement: 'kw' },          // Quinn → Kwin
            { pattern: /x/g, replacement: 'kusu' },         // Alex → Arekusu
            
            // Handle 'c' based on following letter
            { pattern: /c([eiy])/g, replacement: 's$1' },   // Alice → Alisu, Cynthia → Synsya
            { pattern: /c([aou])/g, replacement: 'k$1' },   // Carl → Karu, Carol → Karoru
            { pattern: /c$/g, replacement: 'ku' },          // Eric → Eriku
            
            // Vowel combinations (must come before single vowel rules)
            { pattern: /oo/g, replacement: 'u' },           // Cooper → Kupa
            { pattern: /ee/g, replacement: 'i' },           // Lee → Ri
            { pattern: /ea/g, replacement: 'i' },           // Sean → Shin
            { pattern: /ai/g, replacement: 'e' },           // Gail → Geiru
            { pattern: /ay/g, replacement: 'e' },           // Ray → Rei
            { pattern: /ey/g, replacement: 'i' },           // Bailey → Beiri
            { pattern: /oa/g, replacement: 'o' },           // Joan → Jon
            { pattern: /ou/g, replacement: 'au' },          // Louis → Rui
            { pattern: /ow/g, replacement: 'au' },          // Howard → Hauado
            
            // Silent e at end
            { pattern: /([^aeiou])e$/g, replacement: '$1' }, // Kate → Kat
            
            // Common endings
            { pattern: /ce$/g, replacement: 'su' },         // Grace → Gureisu
            { pattern: /ie$/g, replacement: 'i' },          // Katie → Keiti
            { pattern: /y$/g, replacement: 'i' },           // Emily → Emiri
            
            // Handle 'r' after vowels (often softened or dropped in Japanese)
            { pattern: /er$/g, replacement: 'a' },          // Peter → Pita
            { pattern: /ar$/g, replacement: 'a' },          // Oscar → Osuka
            { pattern: /or$/g, replacement: 'a' },          // Victor → Bikuta
        ];
        
        return this.applyRules(name, rules);
    }

    /**
     * German pronunciation rules
     */
    applyGermanRules(name) {
        const rules = [
            { pattern: /sch/g, replacement: 'sh' },         // Schmidt → Shumitto
            { pattern: /ch/g, replacement: 'h' },           // Bach → Bahha
            { pattern: /tz/g, replacement: 'ts' },          // Fritz → Furittsu
            { pattern: /z/g, replacement: 'ts' },           // Franz → Furantsu
            { pattern: /w/g, replacement: 'v' },            // Wolfgang → Vorufugangu
            { pattern: /v/g, replacement: 'f' },            // Von → Fon
            { pattern: /ü/g, replacement: 'yu' },           // Müller → Myura
            { pattern: /ö/g, replacement: 'o' },            // Götz → Gottsu
            { pattern: /ä/g, replacement: 'e' },            // Bär → Bea
            { pattern: /ß/g, replacement: 'ss' },           // Weiß → Vaisu
            { pattern: /eu/g, replacement: 'oi' },          // Deutsch → Doitsu
            { pattern: /ei/g, replacement: 'ai' },          // Klein → Kurain
        ];
        
        return this.applyRules(name, rules);
    }

    /**
     * Hindi/Indian pronunciation rules
     */
    applyIndianRules(name) {
        const rules = [
            { pattern: /bh/g, replacement: 'b' },           // Bharat → Barato
            { pattern: /dh/g, replacement: 'd' },           // Radha → Rada
            { pattern: /th/g, replacement: 't' },           // Pritha → Purita
            { pattern: /kh/g, replacement: 'k' },           // Khushi → Kushi
            { pattern: /gh/g, replacement: 'g' },           // Megha → Mega
            { pattern: /ph/g, replacement: 'p' },           // Phalguni → Paruguni
            { pattern: /sh/g, replacement: 'sh' },          // Akash → Akashu
            { pattern: /ch/g, replacement: 'ch' },          // Sachin → Sachin
            { pattern: /j/g, replacement: 'j' },            // Raj → Raju
            { pattern: /v/g, replacement: 'b' },            // Vivek → Bibeku
        ];
        
        return this.applyRules(name, rules);
    }

    /**
     * Latin-based (Spanish/Italian/Portuguese) pronunciation rules
     */
    applyLatinRules(name) {
        const rules = [
            { pattern: /ll/g, replacement: 'y' },           // Guillermo → Giyerumo
            { pattern: /ñ/g, replacement: 'ny' },           // Señor → Senyoru
            { pattern: /j/g, replacement: 'h' },            // José → Hose
            { pattern: /v/g, replacement: 'b' },            // Valentina → Barentina
            { pattern: /z/g, replacement: 's' },            // Gonzalez → Gonsaresu
            { pattern: /ci/g, replacement: 'chi' },         // Luciano → Ruchiano
            { pattern: /ce/g, replacement: 'che' },         // Vicente → Bichente
            { pattern: /gi/g, replacement: 'ji' },          // Giovanni → Jobanni
            { pattern: /ge/g, replacement: 'je' },          // Jorge → Horuhe
            { pattern: /qu/g, replacement: 'k' },           // Enrique → Enrike
        ];
        
        return this.applyRules(name, rules);
    }

    /**
     * Apply a set of regex replacement rules
     */
    applyRules(text, rules) {
        let result = text;
        rules.forEach(({ pattern, replacement }) => {
            result = result.replace(pattern, replacement);
        });
        return result;
    }

    /**
     * Normalize to katakana-compatible romaji
     * Ensures the output uses only valid Japanese sounds
     */
    normalizeToRomaji(text) {
        let result = text;
        
        // Convert remaining English letters to Japanese-compatible sounds
        const letterMap = {
            'l': 'r',     // L → R (no L sound in Japanese)
            'v': 'b',     // V → B (no V sound in Japanese)
            'th': 's',    // TH → S (catch any remaining)
            'f': 'fu',    // F needs a vowel
        };
        
        Object.entries(letterMap).forEach(([key, value]) => {
            result = result.replace(new RegExp(key, 'g'), value);
        });
        
        // Ensure consonants (except 'n') are followed by vowels
        result = this.addVowelsToConsonants(result);
        
        return result;
    }

    /**
     * Add vowels after consonants to match Japanese mora structure
     * Japanese doesn't have standalone consonants (except 'n')
     */
    addVowelsToConsonants(text) {
        let result = '';
        const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
        const consonants = 'bcdfghjkmpqrstvwxyz';
        
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            const nextChar = text[i + 1];
            
            result += char;
            
            // 'n' can stand alone in Japanese, skip it
            if (char === 'n') {
                continue;
            }
            
            // If this is a consonant and next is not a vowel, add a vowel
            if (consonants.includes(char)) {
                if (!nextChar || !vowels.has(nextChar)) {
                    // Special handling for 'l' → should not add vowel, it's mapped to 'r' which needs context
                    if (char === 'l') {
                        continue;
                    }
                    
                    // Add 'u' for most consonants, 'o' for some
                    if (['t', 'd', 'k', 'g'].includes(char)) {
                        result += 'o';
                    } else {
                        result += 'u';
                    }
                }
            }
        }
        
        return result;
    }

    /**
     * Save a custom translation for future use
     */
    saveCustomTranslation(foreignName, romajiTranslation) {
        const key = foreignName.toLowerCase().trim();
        this.customTranslations[key] = romajiTranslation;
        
        // Persist to localStorage
        localStorage.setItem('customNameTranslations', 
            JSON.stringify(this.customTranslations));
    }

    /**
     * Load custom translations from localStorage
     */
    loadCustomTranslations() {
        const stored = localStorage.getItem('customNameTranslations');
        return stored ? JSON.parse(stored) : {};
    }

    /**
     * Common name dictionary (curated list)
     * These override phonetic rules for accuracy
     */
    loadNameDictionary() {
        return {
            // English names (Common at events)
            "chase": "cheisu",
            "sarah": "sera",
            "emily": "emiri",
            "michael": "maikeru",
            "mike": "maiku",
            "david": "deibido",
            "james": "jeimusu",
            "john": "jon",
            "robert": "robato",
            "mary": "meri",
            "maria": "maria",
            "jennifer": "jenifa",
            "linda": "rinda",
            "william": "wiriamu",
            "richard": "richado",
            "charles": "charuzu",
            "daniel": "danieru",
            "matthew": "mashu",
            "anthony": "ansoni",
            "donald": "donarudo",
            "steven": "sutiibun",
            "paul": "poru",
            "andrew": "andoryu",
            "joshua": "joshua",
            "christopher": "kurisutofaa",
            "katie": "keiti",
            "grace": "gureisu",
            "anna": "anna",
            "sophia": "sofia",
            "olivia": "oribia",
            "emma": "ema",
            "ava": "eba",
            "isabella": "izabera",
            "mia": "mia",
            "abigail": "abigeru",
            "elizabeth": "erizabesu",
            "lily": "riri",
            "natalie": "natari",
            "hannah": "hanna",
            "nancy": "nansi",
            "nina": "nina",
            "rachel": "reicheru",
            "madison": "madison",
            "chloe": "kuroe",
            "charlotte": "sharuroto",
            "cheryl": "sheriru",
            "christina": "kurisutina",
            "christian": "kurisuchan",
            "christine": "kurisutin",
            "cynthia": "sinsia",
            "deborah": "debora",
            "dorothy": "dorosi",
            "elijah": "iraija",
            "jacqueline": "jakurin",
            "jessica": "jesika",
            "lawrence": "rorensu",
            "noah": "noa",
            "patricia": "patorisia",
            "rebecca": "rebeka",
            "sean": "shon",
            "timothy": "timosi",
            "victoria": "bikutoria",
            "zachary": "zakarai",
            "ryan": "raian",
            "jacob": "jeikobu",
            "tyler": "taira",
            "brandon": "burandon",
            "justin": "jasutin",
            "kevin": "kebin",
            "kyle": "kairu",
            "hugh": "hyu",
            "brian": "buraian",
            "nathan": "neisan",
            "jason": "jeison",
            "jack": "jaku",
            "alexander": "arekusanda",
            "benjamin": "benjamin",
            "samuel": "samyueru",
            "nicholas": "nikorasu",
            "jonathan": "jonasan",
            "julian": "jurian",
            "ashley": "ashuri",        // アシュリー (uses shu, not she)
            "michelle": "misheru",     // ミシェル (uses she)
            "shelley": "sherii",       // シェリー (uses she)
            "chelsea": "cherushii",    // チェルシー (uses che)
            "shannon": "shanon",       // シャノン (uses sha)
            "sharon": "sharon",        // シャロン (uses sha)
            
            // German names
            "klaus": "kurausu",
            "hans": "hansu",
            "franz": "furantsu",
            "wolfgang": "vorufugangu",
            "schmidt": "shumitto",
            "mueller": "myura",
            "hoffman": "hofuman",
            "becker": "bekka",
            "schulz": "shurutsu",
            "weber": "ueba",
            "wagner": "baguna",
            "fischer": "fissha",
            "meyer": "maia",
            "weber": "ueba",
            "otto": "otto",
            "fritz": "furittsu",
            "greta": "gureta",
            "helga": "heruga",
            "ingrid": "inguriddo",
            
            // Indian names
            "arjun": "arujan",
            "raj": "raju",
            "priya": "puriya",
            "deepak": "dipaku",
            "amit": "amitto",
            "rohit": "rohitto",
            "kavya": "kabia",
            "neha": "neha",
            "ravi": "rabi",
            "sanjay": "sanje",
            "vikram": "bikuramu",
            "anjali": "anjari",
            "maya": "maya",
            "krishna": "kurishuna",
            "lakshmi": "rakushumi",
            "ganesh": "ganeshu",
            "srini": "shurini",
            "srinivas": "shurinibasu",
            "sridhar": "shuridaru",
            "sreeja": "shurija",
            
            // Spanish/Latin names
            "jose": "hose",
            "maria": "maria",
            "carlos": "karurosu",
            "juan": "fan",
            "jorge": "horuhe",
            "luis": "ruisu",
            "miguel": "migeru",
            "antonio": "antonio",
            "francisco": "furanshisuko",
            "alejandro": "arehandro",
            "ricardo": "rikarudo",
            "fernando": "ferunando",
            "sergio": "seruhio",
            "pablo": "paburo",
            "rosa": "rosa",
            "carmen": "karumen",
            "guadalupe": "guadarupe",
            "lucia": "rushia",
            "ana": "ana",
            "isabella": "izabera",
            "valentina": "barentina",
            "camila": "kamira",
            "sofia": "sofia",
        };
    }
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TransliterationEngine;
}
