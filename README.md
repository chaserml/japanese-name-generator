# Japanese Name Generator - Kanji Calligraphy Tool

> A beautiful web application for converting foreign names into Japanese kanji characters for calligraphy art.

## 🎌 Overview

This tool helps convert any name into Japanese syllables and provides meaningful kanji options with positive, encouraging, and biblical meanings. Perfect for calligraphy artists creating personalized Japanese name art!

## ✨ Key Features

### 1. **Dual Input Modes**
- **English/Romaji Input:** Type names in English with automatic phonetic conversion
- **Katakana Input:** Direct katakana input for Japanese speakers

### 2. **Multi-Language Support**
Some intelligent phonetic rules for:
- **English:** ch→che, th→s, proper vowel combinations
- **Spanish/Latin:** j→h, ll→y, ñ→ny

Todo:
- **German:** sch→sh, w→v, z→ts
- **Hindi:** Aspirated consonants (bh, dh, th)


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

## 🧠 Conversion Philosophy

This tool does **not** follow standard katakana transliteration rules. Standard katakana (チェルシー for Chelsea, ブライアン for Brian) is designed for phonetic accuracy in Japanese text. Our goal is different: we want **kanji names** that sound natural and carry meaningful characters.

### Kanji Over Katakana

Japanese people do not write foreign names in kanji — loanwords go in katakana. But kanji names have beauty, depth, and personal meaning that katakana cannot express. This tool finds kanji combinations whose readings approximate the original name's sound, so the result feels both authentic and intentional.

### Syllable Choice Drives Kanji Quality

The most important decision in the pipeline is how to split a name into syllables, because each syllable maps to a set of kanji options. We prefer **combined syllables** over separate ones when they produce richer choices:

| Split | Syllables | Kanji options |
|-------|-----------|---------------|
| `he + re + n` | 3 kanji | `n` alone has few meaningful options |
| `he + ren` | 2 kanji | `ren` → 蓮 (lotus), 廉 (honesty), 煉 (refine) |
| `jo + r + dan` | 4 kanji | `r` has no standalone options |
| `jo + dan` | 2 kanji | `dan` → 壇 (platform), 断 (resolve), 暖 (warmth) |

This is why the dictionary stores `helen → heren`, `jordan → jodan`, `julian → jurian`, and so on — the syllable boundaries are chosen for kanji quality, not strict phonetic splitting.

### Three-Stage Pipeline

```
Foreign name  →  Romaji  →  Syllables  →  Kanji selection (user)
  "Chelsea"    "cherushi"  [che, ru, shi]   千/恵 + 瑠/流 + 詩/志
```

**Stage 1 — Romaji:** The name dictionary is checked first (curated entries for ~200+ common names). If not found, language-specific phonetic rules are applied (`ch` → `ch`, `th` → `s`, `l` → `r`, etc.).

**Stage 2 — Syllables:** The romaji string is parsed into Japanese mora-sized units using a priority system: 3-character syllables first (`che`, `shi`, `ren`), then 2-character (`ka`, `ru`), then single vowels, then standalone `n`. Digraphs like `ch` and `sh` are treated as atomic units so they are never split.

**Stage 3 — Kanji:** For each syllable the user sees ranked options — recommended kanji first, then additional choices — and picks one per syllable to build the final name.

### Curated Dictionary

Common names have hand-curated romaji entries that override the phonetic engine. These exist because:
- The phonetic engine makes systematic errors for some patterns (e.g. `th` in *Thomas* maps to `/s/` instead of `/t/`)
- Double consonants cause extra syllables (e.g. *Terry* → `te-ru-ri` without a dictionary entry)
- Some names need non-obvious syllable splits for good kanji (e.g. *Brian* → `bu-rai-an` not `bu-ra-i-an`)

### Sound Approximation, Not Transliteration

The romaji we produce is meant to be **read aloud in Japanese** and sound like the original name — not to be a linguistically precise transcription. A few guiding choices:

- `l` → `r` (Japanese has no `l` sound)
- `th` → `s` for most names (*Matthew*, *Dorothy*) but `t` for hard-th names (*Thomas*)  
- Silent letters are dropped (*Sarah* → `sara`, *George* → `joji`)
- Vowel-heavy endings like `-ley`, `-ney` collapse to a clean `-i` (*Ashley* → `ashuri`)
- n-final syllables (`ren`, `dan`, `san`, `mon`) are preferred over splitting to `re+n`, etc.

---

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
