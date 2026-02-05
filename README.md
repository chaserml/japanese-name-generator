# Japanese Name Generator 書道

Beautiful Japanese name generator for calligraphy - convert English/Latin names to meaningful kanji combinations.

## 🌸 About

This is a beautiful, fast, ad-free web application designed for Japanese calligraphy (書道/shuji/shodo) masters to use at events. The site helps convert American and Latin names into meaningful kanji combinations with edifying and encouraging meanings.

## ✨ Features

- **Name to Syllable Conversion**: Automatically breaks down English names into Japanese syllables
- **Rich Kanji Database**: Comprehensive syllable-to-kanji mappings with positive, encouraging meanings
- **Smart Recommendations**: Shows 2-3 recommended kanji based on your favorites, plus additional options
- **Favorites System**: Mark your preferred kanji with a star (★) - favorites are saved and prioritized in recommendations
- **Beautiful Display**: Each kanji shows:
  - Large, clear character (perfect for calligraphy reference)
  - Romaji pronunciation
  - English meaning/translation
- **Final Name Display**: Complete kanji name with combined meaning
- **Sakura Theme**: Clean, elegant pink and cherry blossom aesthetic
- **Mobile-Friendly**: Responsive design perfect for tablets and phones at events
- **No Ads**: Fast, clean, distraction-free experience
- **Offline-Ready**: All client-side JavaScript, no backend required

## 🚀 Live Demo

Visit the live site: [https://chaserml.github.io/japanese-name-generator/](https://chaserml.github.io/japanese-name-generator/)

## 💻 Usage

1. **Enter a Name**: Type any English or Latin name (e.g., "Sarah", "Michael", "Anna")
2. **View Syllables**: The name is automatically broken into Japanese syllables
3. **Select Kanji**: 
   - Browse recommended kanji for each syllable (marked with ⭐)
   - Explore more options (marked with 📚)
   - Click ★ to favorite kanji for future recommendations
   - Click a kanji to select it for your name
4. **View Result**: Once all syllables are selected, see your complete Japanese name with its full meaning

## 🎨 Example

**Name**: Sarah  
**Syllables**: sa-ra  

**Possible Kanji Combinations**:
- 咲羅 (saku-ra) = "bloom + silk" 
- 紗蘭 (sa-ran) = "silk gauze + orchid"
- 沙良 (sa-ra) = "pure + good"

## 🛠️ Technical Details

- **Pure HTML/CSS/JavaScript** - No frameworks, no build process
- **Static Site** - Deployable to GitHub Pages
- **localStorage** - Persists favorite kanji across sessions
- **Responsive** - Works on desktop, tablet, and mobile devices

## 📁 File Structure

```
/
├── index.html           # Main application page
├── styles.css           # Sakura-themed styling with animations
├── script.js            # Core application logic
├── kanji-database.js    # Comprehensive syllable-to-kanji mappings
└── README.md           # Project documentation
```

## 🌟 Kanji Database

The database includes kanji with positive, uplifting meanings for all common Japanese syllables:
- **Vowels**: a, i, u, e, o
- **Consonants**: ka, ki, ku, ke, ko, sa, shi, su, se, so, ta, chi, tsu, te, to, na, ni, nu, ne, no, ha, hi, fu, he, ho, ma, mi, mu, me, mo, ya, yu, yo, ra, ri, ru, re, ro, wa, ga, gi, gu, ge, go, za, ji, zu, ze, zo, da, di, du, de, do, ba, bi, bu, be, bo, pa, pi, pu, pe, po

Each syllable has 5-8 kanji options with meanings like:
- Strength, wisdom, beauty, love, light, joy, peace, courage, harmony, hope, etc.

## 🤝 Contributing

Want to add more kanji or improve the database? Contributions are welcome!

1. Fork this repository
2. Edit `kanji-database.js` to add new kanji or syllables
3. Ensure each kanji entry includes:
   - `kanji`: The character
   - `meaning`: English translation
   - `romaji`: Pronunciation
4. Test your changes locally
5. Submit a pull request

## 📝 License

This project is open source and available for anyone to use, especially for educational and calligraphy purposes.

## 🎯 Perfect For

- Calligraphy masters at cultural events
- Japanese language teachers
- Name translation services
- Cultural festivals
- Anyone interested in Japanese writing and meaning

---

Made with ♥ for Japanese calligraphy (書道) | No ads, just beautiful names
