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
        
        // 2. Check common name dictionary (skip for Latin mode — dictionary uses
        //    English-vowel romanizations which contradict Latin pure-vowel rules)
        if (language !== 'la' && this.nameDict[lowerName]) {
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
            { pattern: /ck/g, replacement: 'ku' },          // Jack → Jaku (changed from kku)
            { pattern: /qu/g, replacement: 'kw' },          // Quinn → Kwin
            { pattern: /x/g, replacement: 'kusu' },         // Alex → Arekusu
            { pattern: /tt/g, replacement: 'to' },          // Wyatt → Waiato
            { pattern: /ss/g, replacement: 'su' },          // Jessica → Jesika
            { pattern: /zz/g, replacement: 'zu' },          // Pizza → Piza
            { pattern: /dd/g, replacement: 'do' },          // Maddie → Madie
            
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
            { pattern: /h$/g, replacement: '' },            // Sarah → Sara (silent trailing h)
            { pattern: /c([aou])/g, replacement: 'k$1' },   // Carlos → Karosu (hard c)
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
            'w': 'u',     // W → U (becomes 'u' sound)
            'c(?!h)': 'ku',    // C → KU (if not already handled; skip 'ch' digraph)
            'z': 'zu',    // Z → ZU
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

                    // 'ch' and 'sh' are digraphs — don't insert a vowel between them
                    if ((char === 'c' || char === 's') && nextChar === 'h') {
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
            "bryan": "buraian",
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
            "shannon": "shanon",       // シャノン (uses sha)
            "sharon": "sharon",        // シャロン (uses sha)
            "chelsea": "cherushi",
            "chelsey": "cherushi",
            "mackenzie": "makenzi",
            "alejandro": "arehandoro",
            "francisco": "furanshisuko",
            
            // More common English names (201-700 range)
            "shawn": "shon",
            "crystal": "kurisutaru",
            "victor": "bikuta",
            "clarence": "kurarensu",
            "craig": "kuregu",
            "clara": "kurara",
            "dawn": "don",
            "leah": "ria",
            "isaiah": "aizaia",
            "alexandra": "arekusandora",
            "chad": "chado",
            "michele": "misheru",
            "jeremiah": "jeremaia",
            "charlie": "chari",
            "claire": "kurea",
            "wyatt": "waiato",
            "clifford": "kurifodo",
            "savannah": "sabana",
            "chris": "kurisu",
            "mitchell": "micheru",
            "micheal": "maikeru",
            "clyde": "kuraido",
            "josiah": "josia",
            "clayton": "kureiton",
            "charlene": "shariin",
            "micah": "maika",
            "claudia": "kurodia",
            "chester": "chesuta",
            "mariah": "maraia",
            "hector": "hekuta",
            "hudson": "hadoson",
            "aaliyah": "ariya",
            "ashton": "ashuton",
            "alexandria": "arekusandoria",
            "whitney": "houitoni",
            "christy": "kurisuti",
            "maxwell": "makuseru",

            // Names that the phonetic pipeline gets wrong
            // Males
            "thomas": "tomasu",       // th→s gives 'somasu'
            "george": "joji",         // pipeline can't map g+e → j sound
            "joseph": "josefu",
            "mark": "maruku",
            "edward": "edowado",      // w mid-word breaks pipeline
            "kenneth": "kenesu",      // double-n gives extra syllable
            "larry": "rari",          // double-r gives extra syllable
            "raymond": "reimondo",    // ay→e loses the 'i'
            "scott": "sukoto",
            "henry": "henri",
            "eric": "eriku",
            "frank": "furanku",
            "stephen": "sutiibun",
            "patrick": "patoriku",
            "walter": "woruta",       // w at start breaks pipeline
            "dennis": "denisu",       // double-n
            "jerry": "jeri",          // double-r
            "terry": "teri",          // double-r
            "aaron": "aron",          // double-a → parses as a+a+ro+n
            "billy": "biri",          // double-l/r
            "bobby": "bobi",          // double-b
            "johnny": "joni",         // silent h + double-n
            "willie": "wiri",         // w + double-l
            "arthur": "asaa",         // th→s, silent r endings
            "roger": "roja",          // g+e → j not handled
            "wayne": "uein",          // ay→e loses shape
            "howard": "howado",
            "carl": "karu",
            "albert": "arubato",
            "leonard": "reonarudo",
            "eugene": "yujin",
            "philip": "firipu",
            "phillip": "firipu",
            "martin": "marutin",
            "douglas": "dagurasu",    // ou→au distorts
            "russell": "ruseru",      // double-s + double-l
            "louis": "ruisu",         // silent o
            "bradley": "buradori",
            "jordan": "jorudan",
            "lauren": "roren",
            "ethan": "esan",          // th→s gives 'esan' but correct
            "dylan": "diran",
            "alexis": "arekushisu",
            "alyssa": "arissa",
            "fred": "furedo",
            "gilbert": "girubato",
            "vincent": "binsento",
            "travis": "torabisu",
            "cody": "kodi",
            "joel": "joeru",
            "troy": "toroi",
            "glen": "guren",
            "jesse": "jese",
            "corey": "kori",
            "ricky": "riki",
            "danny": "dani",
            "randy": "randi",
            "lee": "rii",
            "jay": "jei",
            "ray": "rei",

            // Females
            "barbara": "barubara",
            "helen": "heren",
            "betty": "beti",          // tt→to gives wrong syllable
            "carol": "karoru",
            "donna": "donna",
            "diane": "daian",
            "virginia": "bajinia",
            "shirley": "sharii",
            "kimberly": "kinbarii",
            "stephanie": "sutefanii",
            "evelyn": "eburin",
            "susan": "suzan",
            "joyce": "joisu",
            "sylvia": "shirubia",
            "irene": "airin",
            "heather": "heza",
            "tiffany": "tifanii",
            "amber": "amba",
            "holly": "hori",
            "rose": "rozu",
            "elaine": "erein",
            "valerie": "barerii",
            "morgan": "mogan",
            "kayla": "kaira",
            "ella": "era",
            "kathleen": "kasuriin",
            "laura": "rora",
            "theresa": "teresa",
            "carolyn": "karolin",
            "audrey": "odori",
            "martha": "marusa",
            "ruth": "rusu",
            "danielle": "danieru",
            "denise": "denisu",
            "marilyn": "marilin",
            "bonnie": "boni",
            "brenda": "burenda",
            "lorraine": "rorein",
            "phyllis": "firisu",
            "tina": "tina",
            "lori": "rori",
            "sue": "su",
            "kay": "kei",
            "joy": "joi",
            "gail": "geiru",
            "leroy": "reroi",
            "bertha": "beresa",
            "dolores": "dorosu",
            "megan": "megan",
            "eleanor": "erinoa",
            "josephine": "josefiinu",
            "florence": "furensu",
            "louise": "ruisu",

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
            "alejandro": "arehandoro",
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

            // Additional common English male names
            "ronald": "ronarudo",
            "jeffrey": "jefurii",
            "jeffery": "jefurii",
            "gary": "geri",
            "gregory": "guregorii",
            "greg": "guregu",
            "adam": "adamu",
            "jeremy": "jeremi",
            "harold": "harorudo",
            "austin": "asuten",
            "joe": "jo",
            "bruce": "burusu",
            "gabriel": "gaburieru",
            "logan": "rogan",
            "alan": "aran",
            "allen": "aren",
            "roy": "roi",
            "ralph": "rarufu",
            "stanley": "sutanrii",
            "peter": "pita",
            "neil": "niiru",
            "ian": "ian",
            "lance": "ransu",
            "levi": "rebi",
            "luke": "ruku",
            "max": "makusu",
            "cole": "koru",
            "derek": "dereku",
            "dustin": "dasutin",
            "evan": "eban",
            "grant": "guranto",
            "hunter": "hanta",
            "isaac": "aizaku",
            "kurt": "kuruto",
            "mason": "meison",
            "owen": "oen",
            "quinn": "kuin",
            "rick": "riku",
            "ron": "ron",
            "ross": "rosu",
            "simon": "saimon",
            "ted": "tedo",
            "tom": "tomu",
            "tony": "toni",
            "trevor": "toreba",
            "wade": "weido",
            "warren": "uoren",
            "wes": "uesu",
            "dale": "deru",
            "dean": "din",
            "ben": "ben",
            "jeff": "jefu",
            "jim": "jimu",
            "josh": "joshu",
            "keith": "kiisu",
            "ken": "ken",
            "brett": "bureto",
            "brent": "burento",
            "drew": "doru",
            "don": "don",
            "dan": "dan",
            "sam": "samu",
            "bob": "bobu",
            "rob": "robu",
            "brad": "burado",
            "cameron": "kameron",
            "caleb": "karebu",
            "conner": "kona",
            "connor": "kona",
            "eli": "eri",
            "liam": "riamu",
            "aiden": "eidan",
            "aidan": "eidan",
            "lucas": "rukasu",
            "jackson": "jakuson",
            "jaxon": "jakuson",
            "sebastian": "sebasuchan",
            "mateo": "mateo",
            "theodore": "teodoa",
            "asher": "asha",
            "leo": "reo",
            "carter": "kaata",
            "grayson": "gureison",
            "nolan": "noran",
            "theo": "teo",
            "finn": "fin",
            "miles": "mairu",
            "marcus": "marukusu",
            "tucker": "taka",
            "emmett": "emeto",
            "bentley": "bentori",
            "beau": "bo",
            "griffin": "gurifin",
            "oliver": "oriba",
            "lincoln": "rinkon",
            "weston": "uesuton",
            "dalton": "daruton",
            "easton": "isuton",
            "ezra": "ezura",
            "felix": "ferikusu",
            "zach": "zaku",
            "zack": "zaku",
            "luca": "ruka",
            "nate": "neito",
            "nick": "niku",
            "pat": "pato",
            "jake": "jeiku",
            "dwayne": "duwein",
            "elias": "erias",
            "elliot": "erioto",
            "jared": "jaredo",
            "jasper": "jasupa",
            "jonah": "jona",
            "marvin": "marubin",
            "melvin": "merubin",
            "nelson": "nerusan",
            "rodney": "rodnii",
            "roland": "rorando",
            "roman": "roman",
            "ronnie": "roni",
            "ruben": "ruben",
            "sterling": "sutaringu",
            "tanner": "tana",
            "taylor": "tera",
            "tristan": "torisutan",
            "ward": "wodo",
            "zion": "zaion",
            "colton": "koruton",
            "cooper": "kupa",
            "dominic": "dominiku",
            "donovan": "donoban",
            "drake": "doreiku",
            "garrett": "gareto",
            "harry": "harii",
            "hugo": "yugo",
            "javier": "habia",
            "presley": "puresuri",
            "rocky": "roki",
            "sid": "shido",
            "dillon": "diron",
            "fabian": "fabian",
            "loren": "roren",
            "porter": "porta",
            "rudolph": "rudorufu",

            // Additional common English female names
            "karen": "karen",
            "lisa": "risa",
            "margaret": "magareto",
            "sandra": "sandora",
            "amanda": "amanda",
            "melissa": "merisa",
            "amy": "emi",
            "angel": "anjeru",
            "angela": "anjera",
            "angelina": "anjerina",
            "pamela": "pamera",
            "nicole": "nikoru",
            "samantha": "samansa",
            "katherine": "kaserin",
            "janet": "janeto",
            "catherine": "kaserin",
            "julie": "juri",
            "kelly": "keri",
            "joan": "jon",
            "judith": "judisu",
            "frances": "furansesu",
            "andrea": "andoria",
            "ann": "an",
            "anne": "an",
            "jean": "jin",
            "alice": "arisu",
            "kathryn": "kasarin",
            "gloria": "guroria",
            "teresa": "teresa",
            "doris": "dorisu",
            "sara": "sera",
            "janice": "janisu",
            "julia": "juria",
            "judy": "judi",
            "brittany": "buritanii",
            "diana": "daiana",
            "courtney": "kotonii",
            "avery": "ebarii",
            "sierra": "shiira",
            "allison": "arisan",
            "alison": "arisan",
            "beverly": "bebarii",
            "bianca": "bianka",
            "brooke": "buruku",
            "carla": "karura",
            "carrie": "kari",
            "cassandra": "kasandora",
            "cecelia": "seshiria",
            "cecilia": "seshiria",
            "cindy": "shindi",
            "darlene": "dariin",
            "edna": "edona",
            "erica": "erika",
            "erin": "erin",
            "felicia": "furishia",
            "fiona": "fiona",
            "gina": "jina",
            "haley": "heirii",
            "harriet": "harieto",
            "jade": "jeido",
            "jasmine": "jasumin",
            "jenna": "jena",
            "jenny": "jeni",
            "joanne": "joana",
            "june": "jun",
            "kim": "kimu",
            "kristin": "kurisutin",
            "leila": "reira",
            "leslie": "resuri",
            "lillian": "ririan",
            "lola": "rora",
            "lydia": "ridia",
            "mae": "mei",
            "maureen": "morin",
            "meredith": "meredisu",
            "molly": "mori",
            "monica": "monika",
            "nadia": "nadia",
            "nikki": "niki",
            "norma": "noruma",
            "paula": "pora",
            "penny": "peni",
            "phoebe": "fibi",
            "renee": "rene",
            "roberta": "robaata",
            "roxanne": "rokusane",
            "selena": "serena",
            "serena": "serena",
            "sheila": "shiira",
            "stacy": "suteishi",
            "stella": "sutera",
            "tammy": "tami",
            "tamara": "tamara",
            "vera": "bera",
            "violet": "baioreto",
            "wendy": "uendi",
            "yvonne": "ibonu",
            "amelia": "ameria",
            "harper": "hapa",
            "mila": "mira",
            "penelope": "penerope",
            "riley": "rairi",
            "zoey": "zoi",
            "zoe": "zoi",
            "hazel": "hezeru",
            "luna": "runa",
            "addison": "adison",
            "scarlett": "sukaretto",
            "aubrey": "oburi",
            "layla": "reira",
            "arianna": "ariana",
            "kylie": "kairi",
            "bella": "bera",
            "nora": "nora",
            "naomi": "naomi",
            "ruby": "rubi",
            "ivy": "aibi",
            "isabelle": "izaberu",
            "gabriella": "gaburiera",
            "camille": "kamiru",
            "ellie": "erii",
            "cora": "kora",
            "iris": "irisu",
            "noelle": "noeru",
            "aria": "aria",
            "maeve": "meibu",
            "camilla": "kamira",
            "elena": "erena",
            "alicia": "arishia",
            "sabrina": "saburina",
            "adriana": "adoriana",
            "anita": "anita",
            "bridget": "burijeto",
            "candace": "kandisu",
            "cassidy": "kashidii",
            "colleen": "korin",
            "daisy": "deizi",
            "delia": "deria",
            "destiny": "desutinii",
            "elisa": "erisa",
            "eliza": "eriza",
            "ellen": "eren",
            "faith": "feisu",
            "freya": "fureia",
            "gemma": "jema",
            "genevieve": "jenebibu",
            "georgia": "jorujia",
            "hana": "hana",
            "heidi": "haidi",
            "hillary": "hirarii",
            "hope": "hopu",
            "jackie": "jakii",
            "jamie": "jeimii",
            "jane": "jein",
            "jewel": "jieru",
            "joanna": "joana",
            "josie": "joshi",
            "julianna": "juriana",
            "juliette": "jurieto",
            "justine": "jasutin",
            "kate": "keito",
            "kristen": "kurisuten",
            "lacey": "reishi",
            "lana": "rana",
            "laurie": "rorii",
            "lena": "rena",
            "leann": "rian",
            "liz": "rizu",
            "lois": "roisu",
            "lorena": "rorena",
            "loretta": "roreta",
            "lucy": "rushi",
            "lynn": "rin",
            "mandy": "mandi",
            "marlene": "mariin",
            "marsha": "masha",
            "maxine": "makusin",
            "melinda": "merinda",
            "mina": "mina",
            "miranda": "miranda",
            "nadine": "nadin",
            "paige": "peiji",
            "pearl": "paaru",
            "priscilla": "purishira",
            "rhonda": "ronda",
            "rochelle": "rusheru",
            "rosalie": "rozarii",
            "rosemary": "rozumerii",
            "sadie": "seidi",
            "shelly": "sherii",
            "skylar": "sukairaa",
            "sophie": "sofii",
            "summer": "sama",
            "tabitha": "tabisu",
            "tara": "tara",
            "tatiana": "tatiana",
            "thea": "tia",
            "tracey": "toreishi",
            "tricia": "torishia",
            "trudy": "torudi",
            "ursula": "aasura",
            "valeria": "bareria",
            "vanessa": "banesa",
            "veronica": "beronika",
            "wanda": "uanda",
            "winona": "uinona",
            "yasmine": "yasumin",
            "yolanda": "yoranda",
            "zelda": "zeruda",
        };
    }
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TransliterationEngine;
}
