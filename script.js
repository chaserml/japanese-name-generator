// Japanese Name Generator - Main Application Logic

class JapaneseNameGenerator {
    constructor() {
        this.kanjiDatabase = kanjiDatabase;
        this.selectedKanji = [];
        this.currentSyllables = [];
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

    // Convert English name to Japanese syllables
    nameToSyllables(name) {
        name = name.toLowerCase().trim();
        const syllables = [];
        let i = 0;

        // Common two-letter combinations in Japanese
        const twoLetterSyllables = [
            'ka', 'ki', 'ku', 'ke', 'ko',
            'sa', 'shi', 'su', 'se', 'so',
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
            'pa', 'pi', 'pu', 'pe', 'po'
        ];

        while (i < name.length) {
            let matched = false;

            // Try to match two-letter syllables first
            if (i < name.length - 1) {
                const twoChar = name.substring(i, i + 2);
                if (twoLetterSyllables.includes(twoChar) && this.kanjiDatabase[twoChar]) {
                    syllables.push(twoChar);
                    i += 2;
                    matched = true;
                }
            }

            // If no two-letter match, try single letter
            if (!matched) {
                const oneChar = name.charAt(i);
                
                // Map common English letters to Japanese syllables
                const letterMap = {
                    'a': 'a', 'b': 'ba', 'c': 'ka', 'd': 'da', 'e': 'e',
                    'f': 'fu', 'g': 'ga', 'h': 'ha', 'i': 'i', 'j': 'ji',
                    'k': 'ka', 'l': 'ra', 'm': 'ma', 'n': 'na', 'o': 'o',
                    'p': 'pa', 'q': 'ku', 'r': 'ra', 's': 'sa', 't': 'ta',
                    'u': 'u', 'v': 'ba', 'w': 'wa', 'x': 'ku', 'y': 'ya',
                    'z': 'za'
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

    // Convert name and display syllables
    convertName() {
        const nameInput = document.getElementById('nameInput').value;
        if (!nameInput.trim()) {
            this.showError('Please enter a name');
            return;
        }

        this.currentSyllables = this.nameToSyllables(nameInput);
        this.selectedKanji = new Array(this.currentSyllables.length).fill(null);

        if (this.currentSyllables.length === 0) {
            this.showError('Could not convert name to syllables');
            return;
        }

        this.displaySyllables();
        
        // Show syllables section, hide result section
        document.getElementById('syllablesSection').classList.remove('hidden');
        document.getElementById('resultSection').classList.add('hidden');
        
        // Scroll to syllables
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
            header.textContent = `"${syllable.toUpperCase()}" syllable`;
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
        document.getElementById('resultSection').scrollIntoView({ behavior: 'smooth' });
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
        document.getElementById('syllablesSection').classList.add('hidden');
        document.getElementById('resultSection').classList.add('hidden');
        this.selectedKanji = [];
        this.currentSyllables = [];
        
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
