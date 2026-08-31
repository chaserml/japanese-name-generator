# Japanese Name Generator - Kanji Calligraphy Tool

A web app for converting names into Japanese kanji for calligraphy. Offline, no AI. Built for mixed lists (Nigerian, Korean, Brazilian, Mexican, Indian, American) where a language dropdown cannot guess the sound.

Live: [https://names.ailondonstudio.com](https://names.ailondonstudio.com)

## How it works

Katakana is the **sound lock**. Kanji assignment is a second problem (当て字): how to cut that sound into slots, then pick characters whose readings approximate those slots.

Japanese people do not write foreign names in kanji — loanwords go in katakana. This tool still produces kanji names because calligraphy wants meaning, not just sound. The result is ateji: characters chosen for reading (and a positive meaning), not because they are a “real” Japanese given name.

```
Katakana (typed or suggested)  →  kanji slots  →  pick kanji
     アンジェリー                    an / je / ri         安 + 慈 + 里
     ア・ン・ジェリー                 a / n / je / ri      ア stays ン as its own slot
```

### Stage 1 — Sound (katakana)

**Default input is katakana.** Type the spelling you already use, for example `アンジェリー` rather than guessing English G2P.

- If the field is already kana (fullwidth, halfwidth, or hiragana), that spelling is used as-is.
- `・` (nakaguro), spaces, and similar separators are **cuts**. They are parsed before grouping, so they are not thrown away.
- English / roman letters is a secondary radio. Unknown roman names still open a katakana picker (suggested spelling, hard-G / ク vs ケ cards, or type your own). Dictionary names skip the picker and go straight to kanji.

### Stage 2 — Cuts (kanji slots)

Each slot is one kanji (or leftover kana if you leave a mora as kana).

**Bare string** (no separators):

- Mid-word **ン** attaches to the previous mora: `アンジェリー` → `an` / `je` / `ri` (kana `アン`, `ジェ`, `リー`). Not `ア` + `ン`.
- **ー** lengthens the previous mora. It does **not** get its own kanji slot (`キー` is `ki`, kana `キー`).
- Yōon stay one mora (`ジェ`, `キャ`, `チェ`).

**Override:** type cuts yourself.

| Input | Slots |
|-------|--------|
| `アンジェリー` | an, je, ri |
| `アン・ジェ・リー` | an, je, ri |
| `ア・ン・ジェリー` | a, n, je, ri (`ン` stays its own slot) |
| `チジオケ` | chi, ji, o, ke |

Do not flatten kana to romaji and re-parse. That path mapped `ケ` → `ko` and revived greedy English splits (`ren` / `rai` / `rin`) that fight mixed-language lists.

### Stage 3 — Kanji

For each slot the UI shows recommended characters, then more options. Favorites are stored in the browser. Meanings lean positive, encouraging, and biblical — useful for commissioned calligraphy, not a linguistic gold spelling.

## Usage

1. Stay on **Katakana** and type the name (`アンジェリー`). Use `・` only when you want a different cut.
2. Or switch to **English / roman letters** for dictionary names and the katakana picker.
3. Pick one kanji per slot. Star favorites for next time.

## English / roman path (secondary)

When the name is not already kana:

1. Custom translations in localStorage, then the curated dictionary (~200 common names).
2. Otherwise language-hinted phonetics (`English vowels` vs `As-written vowels`).
3. Unknown names: katakana options (soft g → ジェ suggested in English, ゲ also offered; `-ke` / `-que` endings offer ク and ケ, never コ from silent *e*).

That romaji is meant to be **read aloud in Japanese**, not a precise IPA transcript. `l` → `r`, silent letters drop, and n-finals on the dictionary path still prefer `an` over `a` + `n`.

The dictionary exists because phonetics fail on some patterns (*Thomas* *th*, doubled consonants, syllable cuts chosen for kanji quality rather than strict splitting).

## Kanji database

- 120+ syllables
- Multiple kanji options per syllable (vowels heavily covered)
- 60+ n-final combinations (`an`, `ken`, `san`, …)
- Focus on positive / encouraging / biblical glosses

## Quick start

### Local

```bash
npm install
npm run dev
```

Or open `index.html` in a browser.

### Cloudflare

Pushes to `main` deploy via GitHub Actions. Repository secrets:

- `CLOUDFLARE_ACCOUNT_ID` — Cloudflare dashboard → Workers → Account ID
- `CLOUDFLARE_API_TOKEN` — token with **Edit Cloudflare Workers**, plus **Zone:Zone:Read** and **Zone:DNS:Edit** on `ailondonstudio.com`

```bash
npx wrangler deploy
```

The Worker uses the subdomain `names.ailondonstudio.com` because the apex already serves the studio site. GitHub Pages was the previous host; after Cloudflare is live it can be disabled so the repo can be private.

## File structure

```
japanese-name-generator/
├── index.html              # UI
├── styles.css
├── script.js               # Convert flow, katakana picker, kanji UI
├── kanji-database.js       # Syllable → kanji options
├── translation-engine.js   # Katakana grouping, phonetics, dictionary
├── wrangler.jsonc          # Cloudflare Workers (static assets)
├── .github/workflows/      # Deploy on push to main
├── test-katakana-mora.js
├── test-two-stage.js
├── test-ke-ko.js
└── README.md
```

```bash
node test-katakana-mora.js
node test-two-stage.js
node test-ke-ko.js
```

## What this is not

- Not standard katakana transliteration as an end product (チェルシー for Chelsea is fine Japanese text; this app still wants kanji).
- Not IME kana–kanji conversion. Ateji has no single gold spelling.
- Not a per-country G2P pack. The calligrapher already knows the katakana; grouping and kanji are the product.

Possible later work (not in the current app): stretch readings (ジェ → 慈), leave ン/ジェ as kana in the finished name, whole-name ateji scoring.

## Contributing

- More kanji with usable calligraphy meanings
- Edge cases in grouping (`ン`, `ー`, separators)
- UI that makes cuts obvious without a language dropdown

## License

Personal and commercial use.

Made for calligraphers, by a developer who loves his wife's art.
