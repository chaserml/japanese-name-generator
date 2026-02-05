# Japanese Name Generator - Kanji Calligraphy Tool

> A beautiful web application for converting foreign names into Japanese kanji characters for calligraphy art.

## 🎌 Overview

This tool helps convert any name into Japanese syllables and provides meaningful kanji options with positive, encouraging, and biblical meanings. Perfect for calligraphy artists creating personalized Japanese name art!

## ✨ Key Features

### 1. **Dual Input Modes**
- **English/Romaji Input:** Type names in English with automatic phonetic conversion
- **Katakana Input:** Direct katakana input for Japanese speakers

### 2. **Multi-Language Support**
Intelligent phonetic rules for:
- **English:** ch→che, th→s, proper vowel combinations
- **German:** sch→sh, w→v, z→ts
- **Hindi/Indian:** Aspirated consonants (bh, dh, th)
- **Spanish/Latin:** j→h, ll→y, ñ→ny

### 3. **Comprehensive Kanji Database**
- **120+ syllables** with full coverage
- **8+ kanji options** per syllable (vowels fully enhanced)
- **60+ n-final combinations** (an, in, un, kan, san, tan, etc.)
- Focus on positive, encouraging, and biblical meanings

### 4. **Smart Syllable Parsing**
- Handles complex combinations: kya, chu, sha, che, she
- Proper n-final detection (Julian → JU-RI-AN, not JU-RI-A-N)
- Look-ahead logic for natural syllable breaks
- Support for name endings like -san, -tan, -chan

### 5. **User-Friendly Interface**
- ⭐ Recommended kanji suggestions
- 📚 Additional options for variety
- ❤️ Favorite system (saves preferences)
- � Save custom translations
- 🌸 Beautiful sakura-themed design

## � Quick Start

### Online
Visit: [https://chaserml.github.io/japanese-name-generator/](https://chaserml.github.io/japanese-name-generator/)

### Local Development
```bash
# Clone the repository
git clone https://github.com/chaserml/japanese-name-generator.git
cd japanese-name-generator

# Open in browser
# Simply open index.html in your web browser
```

## 📝 Usage

### Basic Workflow
1. **Select Input Mode:** Choose between English or Katakana input
2. **Enter Name:** Type the name (e.g., "Chase", "Julian", "Jonathan")
3. **Optional:** Select language hint for better accuracy
4. **View Syllables:** See automatic syllable breakdown
5. **Choose Kanji:** Pick from 8+ meaningful options per syllable
6. **Save Favorites:** Star your preferred kanji for future use
7. **Get Result:** Beautiful Japanese name with meanings!

### Example Conversions
```
Chase     → CHE-I-SU    (3 syllables) ✅
Julian    → JU-RI-AN    (3 syllables) ✅
Jonathan  → JO-NA-SAN   (3 syllables) ✅
Sarah     → SA-RA       (2 syllables) ✅
Michelle  → MI-SHE-RU   (3 syllables) ✅
```

## 🎨 Recent Updates (February 2026)

### Bug Fixes
- ✅ Fixed "Chase" parsing (now correctly: CHE-I-SU)
- ✅ Fixed "Julian" parsing (now correctly: JU-RI-AN)
- ✅ Fixed "Jonathan" parsing (now correctly: JO-NA-SAN)
- ✅ Fixed script loading error
- ✅ Corrected all romaji field mismatches

### New Features
- ✅ Added katakana input toggle
- ✅ Complete katakana-to-romaji conversion (120+ combinations)
- ✅ Smart n-final detection with look-ahead logic
- ✅ Enhanced vowel database (8 options each with biblical meanings)

### Database Enhancements
- ✅ Added missing syllables: che, she, je, fa-fo, va-vo, wi, we, ti, tu, di, du
- ✅ Added 60+ consonant+n combinations with proper n-final kanji
- ✅ Vowel+n: an, in, un, en, on
- ✅ K-row+n: kan, kin, kun, ken, kon
- ✅ S-row+n: san, sen, son
- ✅ T-row+n: tan, ten, ton
- ✅ N-row+n: nan, nin, nun, nen, non
- ✅ H-row+n: han, hin, hun, hen, hon
- ✅ M-row+n: man, min, mon, mun
- ✅ Y-row+n: yan, yun, yon
- ✅ R-row+n: ran, rin, ron
- ✅ W-row+n: wan, won
- ✅ G-row+n: gan, gin, gun, gen, gon
- ✅ Z-row+n: zan, zen, zon
- ✅ D-row+n: dan, don
- ✅ B-row+n: ban, bin, bon
- ✅ P-row+n: pan, pin, pon

## 🔧 Technical Stack

### Core Technologies
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **Vanilla JavaScript** - No frameworks needed
- **LocalStorage** - Persistent favorites and custom translations

### File Structure
```
japanese-name-generator/
├── index.html              # Main HTML structure
├── styles.css              # Styling and animations
├── script.js               # Main application logic
├── kanji-database.js       # Comprehensive kanji mappings
├── translation-engine.js   # Phonetic transliteration engine
└── README.md              # This file
```

## 🎯 Future Enhancements

### Planned Features
- [ ] Expand remaining syllables to 8+ kanji options
- [ ] Add more yōon+n combinations (kyan, shun, chan, etc.)
- [ ] Export/import custom translation dictionary
- [ ] Print-optimized view for calligraphy reference
- [ ] Multiple result templates (vertical/horizontal)
- [ ] Stroke order animations

### Database Expansion
- [ ] Enhance K-row (ka, ki, ku, ke, ko) to 8+ options
- [ ] Enhance S-row, T-row, N-row, M-row, R-row
- [ ] Add rare kanji for advanced users
- [ ] Include kanji variants (e.g., 斎 vs 斉)

## 🤝 Contributing

Contributions are welcome! Areas where you can help:
- Add more kanji with positive meanings
- Improve phonetic rules for additional languages
- Suggest UI/UX improvements
- Report bugs or edge cases

## � License

This project is open source and available for personal and commercial use.

## 💝 Credits

Created with ♥ for Japanese calligraphy artists  
Special thanks to all contributors

---

**Made for calligraphers, by a developer who loves his wife's art** 🌸
