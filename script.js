// Japanese Name Generator - Main Application Logic
// Updated to use TransliterationEngine for accurate foreign name conversion

class JapaneseNameGenerator {
    constructor() {
        this.kanjiDatabase = kanjiDatabase;
        this.transliterator = new TransliterationEngine();
        this.selectedKanji = [];
        this.currentSyllables = [];
        this.currentKanaSource = null;
        this.katakanaOptions = [];
        this.currentName = '';
        this.favorites = this.loadFavorites();
        this.RECOMMENDED_COUNT = 3;
        this.init();
    }

    init() {
        // Event listeners
        document.getElementById('convertBtn').addEventListener('click', () => this.convertName());
        document.getElementById('nameInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.convertName();
        });
        document.getElementById('resetBtn').addEventListener('click', () => this.reset());
        
        // Input mode toggle handler
        const inputModeRadios = document.querySelectorAll('input[name="inputMode"]');
        inputModeRadios.forEach(radio => {
            radio.addEventListener('change', (e) => this.handleInputModeChange(e.target.value));
        });
        
        // Add language selector if it exists
        const langSelector = document.getElementById('languageHint');
        if (langSelector) {
            langSelector.addEventListener('change', () => {
                // Re-convert if name is already entered
                if (document.getElementById('nameInput').value) {
                    this.convertName();
                }
            });
        }
    }

    // Handle input mode change between English and Katakana
    handleInputModeChange(mode) {
        const nameInput = document.getElementById('nameInput');
        const inputLabel = document.getElementById('inputLabel');
        const languageSelector = document.getElementById('languageSelector');
        
        if (mode === 'katakana') {
            nameInput.placeholder = 'e.g., チェイス, サラ, マリア';
            inputLabel.textContent = 'Enter name in katakana:';
            languageSelector.style.display = 'none';
        } else {
            nameInput.placeholder = 'e.g., Sarah, Klaus, Arjun, Maria';
            inputLabel.textContent = 'Enter a name:';
            languageSelector.style.display = 'block';
        }
        
        // Clear input
        nameInput.value = '';
    }

    // Load favorites from localStorage
    loadFavorites() {
        const stored = localStorage.getItem('kanjiPreferences');
        return stored ? JSON.parse(stored) : {};
    }

    // Save favorites to localStorage
    saveFavorites() {
        localStorage.setItem('kanjiPreferences', JSON.stringify(this.favorites));
    }

    // Toggle favorite status for a kanji
    toggleFavorite(syllable, kanji) {
        if (!this.favorites[syllable]) {
            this.favorites[syllable] = [];
        }
        
        const index = this.favorites[syllable].indexOf(kanji);
        if (index > -1) {
            this.favorites[syllable].splice(index, 1);
        } else {
            this.favorites[syllable].push(kanji);
        }
        
        this.saveFavorites();
    }

    // Check if a kanji is favorited
    isFavorite(syllable, kanji) {
        return this.favorites[syllable] && this.favorites[syllable].includes(kanji);
    }

    /**
     * Convert foreign name to Japanese syllables using TransliterationEngine
     */
    nameToSyllables(name, languageHint = 'en') {
        // Use the transliteration engine to get romaji
        const romaji = this.transliterator.translateName(name, languageHint);
        
        // Convert romaji to syllable array
        return this.romajiToSyllables(romaji);
    }

    /**
     * Break romaji string into Japanese syllables
     * Handles multi-character combinations like "kya", "chu", etc.
     */
    romajiToSyllables(romaji) {
        romaji = romaji.toLowerCase().trim();
        const syllables = [];
        let i = 0;

        // Three-letter syllable combinations in Japanese
        const threeLetterSyllables = [
            // Standard yōon (palatalized sounds)
            'jyu', 'kya', 'kyu', 'kyo', 'sha', 'shu', 'sho', 
            'cha', 'chu', 'cho', 'nya', 'nyu', 'nyo', 'hya', 
            'hyu', 'hyo', 'mya', 'myu', 'myo', 'rya', 'ryu', 
            'ryo', 'gya', 'gyu', 'gyo', 'bya', 'byu', 'byo', 
            'pya', 'pyu', 'pyo', 'she', 'che',
            // 3-character morae that must be matched before the 2-letter pass
            'shi', 'chi', 'tsu',
            // Diphthong syllables used in Western name transliterations
            'rai',
            // K-row + n
            'kan', 'kin', 'kun', 'ken', 'kon',
            // S-row + n
            'san', 'sen', 'son',
            // T-row + n
            'tan', 'ten', 'ton',
            // N-row + n
            'nan', 'nun', 'nen', 'non',
            // H-row + n
            'han', 'hin', 'hun', 'hen', 'hon',
            // M-row + n
            'man', 'min', 'mun', 'men', 'mon',
            // Y-row + n
            'yan', 'yun', 'yon',
            // R-row + n (removed 'rin' to allow ri-ni parsing)
            'ran', 'run', 'ren', 'ron',
            // W-row + n
            'wan', 'won',
            // G-row + n (dakuten)
            'gan', 'gin', 'gun', 'gen', 'gon',
            // Z-row + n (dakuten)
            'zan', 'zen', 'zon',
            // D-row + n (dakuten)
            'dan', 'den', 'don',
            // B-row + n (dakuten)
            'ban', 'bin', 'bun', 'ben', 'bon',
            // P-row + n (handakuten)
            'pan', 'pin', 'pun', 'pen', 'pon'
        ];

        // Common two-letter combinations in Japanese
        const twoLetterSyllables = [
            'ka', 'ki', 'ku', 'ke', 'ko',
            'sa', 'si', 'su', 'se', 'so',
            'ta', 'te', 'to',
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
            'ju', 'ja', 'jo',
            'fa', 'fi', 'fe', 'fo',
            'va', 'vi', 'vu', 've', 'vo',
            'ti', 'tu',
            // Vowel + n combinations (for name endings)
            'an', 'in', 'un', 'en', 'on'
        ];

        // Single vowels
        const vowels = ['a', 'i', 'u', 'e', 'o'];

        while (i < romaji.length) {
            let matched = false;

            // Try to match three-letter syllables first
            if (i < romaji.length - 2) {
                const threeChar = romaji.substring(i, i + 3);
                if (threeLetterSyllables.includes(threeChar) && this.kanjiDatabase[threeChar]) {
                    syllables.push(threeChar);
                    i += 3;
                    matched = true;
                }
            }

            // Try to match two-letter syllables WITH look-ahead for 'n'
            if (!matched && i < romaji.length - 1) {
                const twoChar = romaji.substring(i, i + 2);

                // "je" splits into two kanji: "ji" (ジ) + "e" (エ)
                if (twoChar === 'je') {
                    syllables.push('ji');
                    if (this.kanjiDatabase['e']) syllables.push('e');
                    i += 2;
                    matched = true;
                }

                // Look ahead: if this two-letter syllable is followed by 'n', try three-letter combo first
                if (!matched && i < romaji.length - 2 && romaji.charAt(i + 2) === 'n') {
                    const threeCharWithN = twoChar + 'n';
                    if (threeLetterSyllables.includes(threeCharWithN) && this.kanjiDatabase[threeCharWithN]) {
                        syllables.push(threeCharWithN);
                        i += 3;
                        matched = true;
                    }
                }
                
                // If no match with 'n', try the regular two-letter syllable
                if (!matched && twoLetterSyllables.includes(twoChar) && this.kanjiDatabase[twoChar]) {
                    syllables.push(twoChar);
                    i += 2;
                    matched = true;
                }
            }

            // Try to match single vowels or 'n' WITH look-ahead for 'n'
            if (!matched) {
                const oneChar = romaji.charAt(i);
                
                // Look ahead: if this vowel is followed by 'n', try two-letter combo first
                if (vowels.includes(oneChar) && i < romaji.length - 1 && romaji.charAt(i + 1) === 'n') {
                    const twoCharWithN = oneChar + 'n';
                    if (twoLetterSyllables.includes(twoCharWithN) && this.kanjiDatabase[twoCharWithN]) {
                        syllables.push(twoCharWithN);
                        i += 2;
                        matched = true;
                    }
                }
                
                // If no match with 'n', try single character
                if (!matched && (vowels.includes(oneChar) || oneChar === 'n')) {
                    if (this.kanjiDatabase[oneChar]) {
                        syllables.push(oneChar);
                    }
                    i++;
                    matched = true;
                }
            }

            // If still no match, map to closest syllable
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
                if (this.kanjiDatabase[mappedSyllable]) {
                    syllables.push(mappedSyllable);
                }
                i++;
            }
        }

        return syllables;
    }

    // Sort kanji options by favorites
    sortKanjiOptions(syllable, kanjiList) {
        return [...kanjiList].sort((a, b) => {
            const aFav = this.isFavorite(syllable, a.kanji);
            const bFav = this.isFavorite(syllable, b.kanji);
            if (aFav && !bFav) return -1;
            if (!aFav && bFav) return 1;
            return 0;
        });
    }

    // Convert name: kana and dictionary names go to kanji;
    // unknown roman names pick a katakana spelling first.
    convertName() {
        const nameInput = document.getElementById('nameInput').value;
        if (!nameInput.trim()) {
            this.showError('Please enter a name');
            return;
        }

        this.currentName = nameInput;
        this.currentKanaSource = null;
        this.katakanaOptions = [];
        this.hideStageSections();

        if (this.transliterator.isKanaInput(nameInput)) {
            this.showKanjiForKatakana(nameInput);
            return;
        }

        const langSelector = document.getElementById('languageHint');
        const languageHint = langSelector ? langSelector.value : 'en';

        if (this.transliterator.hasCuratedTranslation(nameInput, languageHint)) {
            this.currentSyllables = this.nameToSyllables(nameInput, languageHint);
            this.showKanjiStage();
            return;
        }

        const options = this.transliterator.generateKatakanaOptions(nameInput, languageHint);
        if (options.length === 0) {
            this.showError('Could not convert name to katakana');
            return;
        }

        this.katakanaOptions = options;
        this.displayKatakanaOptions(options);
        document.getElementById('katakanaSection').classList.remove('hidden');
        document.getElementById('katakanaSection').scrollIntoView({ behavior: 'smooth' });
    }

    hideStageSections() {
        document.getElementById('katakanaSection').classList.add('hidden');
        document.getElementById('syllablesSection').classList.add('hidden');
        document.getElementById('resultSection').classList.add('hidden');
    }

    displayKatakanaOptions(options) {
        const container = document.getElementById('katakanaOptions');
        container.innerHTML = '';

        options.forEach((option, index) => {
            const card = document.createElement('button');
            card.type = 'button';
            card.className = 'katakana-card';
            if (option.recommended) card.classList.add('recommended');

            const spelling = document.createElement('div');
            spelling.className = 'katakana-spelling';
            spelling.textContent = option.katakana;
            card.appendChild(spelling);

            const romaji = document.createElement('div');
            romaji.className = 'katakana-romaji';
            romaji.textContent = option.syllables.join('-');
            card.appendChild(romaji);

            const label = document.createElement('div');
            label.className = 'katakana-label';
            label.textContent = option.recommended ? 'Suggested' : option.label;
            card.appendChild(label);

            card.addEventListener('click', () => this.selectKatakanaOption(index));
            container.appendChild(card);
        });
    }

    selectKatakanaOption(index) {
        const option = this.katakanaOptions[index];
        if (!option) return;

        const cards = document.querySelectorAll('.katakana-card');
        cards.forEach((card, i) => {
            card.classList.toggle('selected', i === index);
        });

        this.showKanjiForKatakana(option.katakana);
    }

    showKanjiForKatakana(katakana) {
        const parsed = this.transliterator.katakanaToSyllables(katakana);
        this.currentSyllables = parsed.syllables;
        this.currentKanaSource = parsed.kana;
        this.showKanjiStage();
    }

    showKanjiStage() {
        this.selectedKanji = new Array(this.currentSyllables.length).fill(null);

        if (this.currentSyllables.length === 0) {
            this.showError('Could not convert name to syllables');
            return;
        }

        this.displaySyllables();
        document.getElementById('syllablesSection').classList.remove('hidden');
        document.getElementById('resultSection').classList.add('hidden');
        document.getElementById('syllablesSection').scrollIntoView({ behavior: 'smooth' });
    }

    // Display syllables and kanji options
    displaySyllables() {
        const container = document.getElementById('syllablesContainer');
        container.innerHTML = '';

        this.currentSyllables.forEach((syllable, syllableIndex) => {
            const syllableGroup = document.createElement('div');
            syllableGroup.className = 'syllable-group';

            const header = document.createElement('div');
            header.className = 'syllable-header';
            if (this.currentKanaSource && this.currentKanaSource[syllableIndex]) {
                header.textContent = `${this.currentKanaSource[syllableIndex]}  (${syllable})`;
            } else {
                header.textContent = `"${syllable.toUpperCase()}" syllable`;
            }
            syllableGroup.appendChild(header);

            // Get all kanji for this syllable
            const allKanji = this.kanjiDatabase[syllable] || [];
            if (allKanji.length === 0) {
                const noOptions = document.createElement('p');
                noOptions.textContent = 'No kanji options available for this syllable';
                noOptions.style.textAlign = 'center';
                noOptions.style.color = 'var(--text-light)';
                syllableGroup.appendChild(noOptions);
                container.appendChild(syllableGroup);
                return;
            }

            // Sort by favorites
            const sortedKanji = this.sortKanjiOptions(syllable, allKanji);

            // Split into recommended (first 2-3) and additional options
            const recommended = sortedKanji.slice(0, this.RECOMMENDED_COUNT);
            const additional = sortedKanji.slice(this.RECOMMENDED_COUNT);

            // Recommended section
            if (recommended.length > 0) {
                const recSection = document.createElement('div');
                recSection.className = 'kanji-options-section';
                
                const recLabel = document.createElement('div');
                recLabel.className = 'section-label';
                recLabel.textContent = '⭐ Recommended';
                recSection.appendChild(recLabel);

                const recOptions = document.createElement('div');
                recOptions.className = 'kanji-options';
                recommended.forEach((kanjiData) => {
                    recOptions.appendChild(this.createKanjiCard(kanjiData, syllable, syllableIndex));
                });
                recSection.appendChild(recOptions);
                syllableGroup.appendChild(recSection);
            }

            // Additional options section
            if (additional.length > 0) {
                const addSection = document.createElement('div');
                addSection.className = 'kanji-options-section';
                
                const addLabel = document.createElement('div');
                addLabel.className = 'section-label';
                addLabel.textContent = '📚 More Options';
                addSection.appendChild(addLabel);

                const addOptions = document.createElement('div');
                addOptions.className = 'kanji-options';
                additional.forEach((kanjiData) => {
                    addOptions.appendChild(this.createKanjiCard(kanjiData, syllable, syllableIndex));
                });
                addSection.appendChild(addOptions);
                syllableGroup.appendChild(addSection);
            }

            container.appendChild(syllableGroup);
        });
    }

    // Create a kanji card element
    createKanjiCard(kanjiData, syllable, syllableIndex) {
        const card = document.createElement('div');
        card.className = 'kanji-card';
        
        // Favorite button
        const favBtn = document.createElement('button');
        favBtn.className = 'favorite-btn';
        favBtn.innerHTML = this.isFavorite(syllable, kanjiData.kanji) ? '★' : '☆';
        if (this.isFavorite(syllable, kanjiData.kanji)) {
            favBtn.classList.add('favorited');
        }
        favBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleFavorite(syllable, kanjiData.kanji);
            favBtn.innerHTML = this.isFavorite(syllable, kanjiData.kanji) ? '★' : '☆';
            favBtn.classList.toggle('favorited');
            // Re-render to update recommendations
            this.displaySyllables();
        });
        card.appendChild(favBtn);

        // Kanji character
        const character = document.createElement('div');
        character.className = 'kanji-character';
        character.textContent = kanjiData.kanji;
        card.appendChild(character);

        // Romaji
        const romaji = document.createElement('div');
        romaji.className = 'kanji-romaji';
        romaji.textContent = kanjiData.romaji;
        card.appendChild(romaji);

        // Meaning
        const meaning = document.createElement('div');
        meaning.className = 'kanji-meaning';
        meaning.textContent = kanjiData.meaning;
        card.appendChild(meaning);

        // Click to select
        card.addEventListener('click', () => {
            this.selectKanji(syllableIndex, kanjiData, syllable);
        });

        return card;
    }

    // Select a kanji for a syllable
    selectKanji(syllableIndex, kanjiData, syllable) {
        this.selectedKanji[syllableIndex] = kanjiData;

        // Update visual selection
        const syllableGroups = document.querySelectorAll('.syllable-group');
        if (syllableGroups[syllableIndex]) {
            const cards = syllableGroups[syllableIndex].querySelectorAll('.kanji-card');
            cards.forEach(card => card.classList.remove('selected'));
            
            // Find and select the clicked card
            cards.forEach(card => {
                if (card.querySelector('.kanji-character').textContent === kanjiData.kanji) {
                    card.classList.add('selected');
                }
            });
        }

        // Check if all syllables have selections
        if (this.selectedKanji.every(k => k !== null)) {
            this.displayResult();
        }
    }

    // Display the final result
    displayResult() {
        const kanjiResult = this.selectedKanji.map(k => k.kanji).join('');
        const romajiResult = this.selectedKanji.map(k => k.romaji).join('-');
        const meaningResult = this.selectedKanji.map(k => k.meaning).join(' + ');

        document.getElementById('kanjiResult').textContent = kanjiResult;
        document.getElementById('romajiResult').textContent = romajiResult;
        document.getElementById('meaningResult').textContent = `Meaning: ${meaningResult}`;

        // Show result section
        document.getElementById('resultSection').classList.remove('hidden');
        
        // Add "Save Translation" button if it doesn't exist
        this.addSaveTranslationButton();
        
        document.getElementById('resultSection').scrollIntoView({ behavior: 'smooth' });
    }

    /**
     * Add a button to save this name translation for future use
     */
    addSaveTranslationButton() {
        const resultSection = document.getElementById('resultSection');
        let saveBtn = document.getElementById('saveTranslationBtn');
        
        if (!saveBtn) {
            saveBtn = document.createElement('button');
            saveBtn.id = 'saveTranslationBtn';
            saveBtn.className = 'secondary-btn';
            saveBtn.textContent = '💾 Save This Translation';
            saveBtn.style.marginTop = '15px';
            
            // Insert before reset button
            const resetBtn = document.getElementById('resetBtn');
            resetBtn.parentNode.insertBefore(saveBtn, resetBtn);
        }
        
        // Update click handler
        saveBtn.onclick = () => {
            const romaji = this.currentSyllables.join('');
            this.transliterator.saveCustomTranslation(this.currentName, romaji);
            
            // Show confirmation
            saveBtn.textContent = '✓ Saved!';
            saveBtn.style.background = 'var(--sakura-light)';
            setTimeout(() => {
                saveBtn.textContent = '💾 Save This Translation';
                saveBtn.style.background = '';
            }, 2000);
        };
    }

    // Show error message
    showError(message) {
        const inputGroup = document.querySelector('.input-group');
        let errorDiv = document.getElementById('errorMessage');
        
        if (!errorDiv) {
            errorDiv = document.createElement('div');
            errorDiv.id = 'errorMessage';
            errorDiv.style.color = 'var(--sakura-dark)';
            errorDiv.style.marginTop = '10px';
            errorDiv.style.fontSize = '0.9rem';
            errorDiv.setAttribute('role', 'alert');
            errorDiv.setAttribute('aria-live', 'polite');
            inputGroup.appendChild(errorDiv);
        }
        
        errorDiv.textContent = message;
        
        // Clear error after 3 seconds
        setTimeout(() => {
            if (errorDiv) errorDiv.textContent = '';
        }, 3000);
    }

    // Reset the application
    reset() {
        document.getElementById('nameInput').value = '';
        this.selectedKanji = [];
        this.currentSyllables = [];
        this.currentKanaSource = null;
        this.katakanaOptions = [];
        this.currentName = '';
        this.hideStageSections();
        
        // Clear any error messages
        const errorDiv = document.getElementById('errorMessage');
        if (errorDiv) errorDiv.textContent = '';
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new JapaneseNameGenerator();
});
