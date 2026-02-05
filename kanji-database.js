// Comprehensive kanji database for Japanese name generation
// Each syllable maps to multiple kanji with positive, encouraging meanings

const kanjiDatabase = {
  // Vowels
  "a": [
    { kanji: "愛", meaning: "love, affection", romaji: "ai" },
    { kanji: "亜", meaning: "Asia, second", romaji: "a" },
    { kanji: "阿", meaning: "peace, Africa", romaji: "a" },
    { kanji: "彩", meaning: "color, beautiful", romaji: "aya" },
    { kanji: "朝", meaning: "morning, dynasty", romaji: "asa" },
    { kanji: "空", meaning: "sky, emptiness", romaji: "a" }
  ],
  "i": [
    { kanji: "衣", meaning: "garment, clothing", romaji: "i" },
    { kanji: "伊", meaning: "Italy, that one", romaji: "i" },
    { kanji: "依", meaning: "depend, rely on", romaji: "i" },
    { kanji: "唯", meaning: "unique, only", romaji: "i" },
    { kanji: "維", meaning: "maintain, fiber", romaji: "i" },
    { kanji: "威", meaning: "dignity, majesty", romaji: "i" }
  ],
  "u": [
    { kanji: "優", meaning: "gentle, superior", romaji: "yu" },
    { kanji: "雨", meaning: "rain", romaji: "u" },
    { kanji: "宇", meaning: "universe, roof", romaji: "u" },
    { kanji: "羽", meaning: "feather, wing", romaji: "u" },
    { kanji: "海", meaning: "ocean, sea", romaji: "umi" },
    { kanji: "生", meaning: "life, birth", romaji: "u" }
  ],
  "e": [
    { kanji: "恵", meaning: "blessing, favor", romaji: "e" },
    { kanji: "絵", meaning: "picture, painting", romaji: "e" },
    { kanji: "江", meaning: "creek, inlet", romaji: "e" },
    { kanji: "英", meaning: "England, excel", romaji: "ei" },
    { kanji: "笑", meaning: "laugh, smile", romaji: "e" },
    { kanji: "栄", meaning: "glory, prosper", romaji: "ei" }
  ],
  "o": [
    { kanji: "緒", meaning: "cord, beginning", romaji: "o" },
    { kanji: "央", meaning: "center, middle", romaji: "o" },
    { kanji: "王", meaning: "king, monarch", romaji: "o" },
    { kanji: "桜", meaning: "cherry blossom", romaji: "sakura" },
    { kanji: "音", meaning: "sound, music", romaji: "oto" },
    { kanji: "織", meaning: "weave, fabric", romaji: "ori" }
  ],
  
  // Ka-row
  "ka": [
    { kanji: "花", meaning: "flower, blossom", romaji: "ka" },
    { kanji: "香", meaning: "fragrance, incense", romaji: "ka" },
    { kanji: "華", meaning: "splendor, flower", romaji: "ka" },
    { kanji: "夏", meaning: "summer", romaji: "ka" },
    { kanji: "佳", meaning: "excellent, beautiful", romaji: "ka" },
    { kanji: "加", meaning: "add, increase", romaji: "ka" },
    { kanji: "歌", meaning: "song, poetry", romaji: "ka" },
    { kanji: "果", meaning: "fruit, result", romaji: "ka" }
  ],
  "ki": [
    { kanji: "希", meaning: "hope, rare", romaji: "ki" },
    { kanji: "輝", meaning: "radiance, shine", romaji: "ki" },
    { kanji: "樹", meaning: "tree", romaji: "ki" },
    { kanji: "紀", meaning: "chronicle, era", romaji: "ki" },
    { kanji: "季", meaning: "season", romaji: "ki" },
    { kanji: "絹", meaning: "silk", romaji: "kinu" },
    { kanji: "喜", meaning: "joy, delight", romaji: "ki" },
    { kanji: "貴", meaning: "precious, noble", romaji: "ki" }
  ],
  "ku": [
    { kanji: "久", meaning: "long time, eternal", romaji: "ku" },
    { kanji: "空", meaning: "sky, heaven", romaji: "ku" },
    { kanji: "玖", meaning: "beautiful black jewel", romaji: "ku" },
    { kanji: "句", meaning: "phrase, clause", romaji: "ku" },
    { kanji: "公", meaning: "public, prince", romaji: "ku" },
    { kanji: "駆", meaning: "run, gallop", romaji: "ku" }
  ],
  "ke": [
    { kanji: "恵", meaning: "blessing, favor", romaji: "ke" },
    { kanji: "慶", meaning: "celebrate, congratulate", romaji: "kei" },
    { kanji: "景", meaning: "scenery, view", romaji: "kei" },
    { kanji: "圭", meaning: "jade, square jewel", romaji: "kei" },
    { kanji: "蛍", meaning: "firefly", romaji: "kei" },
    { kanji: "桂", meaning: "Japanese Judas tree", romaji: "katsura" }
  ],
  "ko": [
    { kanji: "子", meaning: "child", romaji: "ko" },
    { kanji: "心", meaning: "heart, mind", romaji: "kokoro" },
    { kanji: "光", meaning: "light, ray", romaji: "ko" },
    { kanji: "幸", meaning: "happiness, fortune", romaji: "ko" },
    { kanji: "琴", meaning: "koto, harp", romaji: "koto" },
    { kanji: "紅", meaning: "crimson, red", romaji: "ko" },
    { kanji: "湖", meaning: "lake", romaji: "ko" },
    { kanji: "虹", meaning: "rainbow", romaji: "ko" }
  ],
  
  // Sa-row
  "sa": [
    { kanji: "咲", meaning: "bloom, blossom", romaji: "sa" },
    { kanji: "紗", meaning: "silk gauze, elegance", romaji: "sa" },
    { kanji: "沙", meaning: "sand, pure", romaji: "sa" },
    { kanji: "彩", meaning: "color, beautiful", romaji: "sai" },
    { kanji: "桜", meaning: "cherry blossom", romaji: "sakura" },
    { kanji: "早", meaning: "early, fast", romaji: "sa" },
    { kanji: "爽", meaning: "refreshing, bright", romaji: "sa" },
    { kanji: "小", meaning: "small, little", romaji: "sa" }
  ],
  "shi": [
    { kanji: "詩", meaning: "poem, poetry", romaji: "shi" },
    { kanji: "志", meaning: "intention, will", romaji: "shi" },
    { kanji: "史", meaning: "history, chronicle", romaji: "shi" },
    { kanji: "司", meaning: "rule, director", romaji: "shi" },
    { kanji: "紫", meaning: "purple, violet", romaji: "shi" },
    { kanji: "獅", meaning: "lion", romaji: "shi" },
    { kanji: "幸", meaning: "happiness, luck", romaji: "shi" },
    { kanji: "心", meaning: "heart, mind", romaji: "shin" }
  ],
  "su": [
    { kanji: "寿", meaning: "longevity, congratulations", romaji: "su" },
    { kanji: "純", meaning: "pure, genuine", romaji: "jun" },
    { kanji: "澄", meaning: "clear, lucid", romaji: "sumi" },
    { kanji: "涼", meaning: "cool, refreshing", romaji: "ryo" },
    { kanji: "州", meaning: "state, province", romaji: "su" },
    { kanji: "須", meaning: "must, necessary", romaji: "su" }
  ],
  "se": [
    { kanji: "星", meaning: "star, planet", romaji: "sei" },
    { kanji: "聖", meaning: "holy, sacred", romaji: "sei" },
    { kanji: "誠", meaning: "sincerity, truth", romaji: "sei" },
    { kanji: "清", meaning: "pure, clean", romaji: "sei" },
    { kanji: "晴", meaning: "clear weather, sunny", romaji: "sei" },
    { kanji: "青", meaning: "blue, green", romaji: "sei" }
  ],
  "so": [
    { kanji: "空", meaning: "sky, heaven", romaji: "sora" },
    { kanji: "創", meaning: "create, genesis", romaji: "so" },
    { kanji: "奏", meaning: "play music, complete", romaji: "so" },
    { kanji: "爽", meaning: "refreshing, bright", romaji: "so" },
    { kanji: "想", meaning: "concept, think", romaji: "so" },
    { kanji: "颯", meaning: "sudden, sound of wind", romaji: "so" }
  ],
  
  // Ta-row
  "ta": [
    { kanji: "太", meaning: "thick, big", romaji: "ta" },
    { kanji: "多", meaning: "many, much", romaji: "ta" },
    { kanji: "汰", meaning: "select, choose", romaji: "ta" },
    { kanji: "大", meaning: "large, great", romaji: "tai" },
    { kanji: "鷹", meaning: "hawk, falcon", romaji: "taka" },
    { kanji: "宝", meaning: "treasure, jewel", romaji: "takara" },
    { kanji: "高", meaning: "tall, high", romaji: "taka" },
    { kanji: "尊", meaning: "noble, precious", romaji: "taka" }
  ],
  "chi": [
    { kanji: "千", meaning: "thousand", romaji: "chi" },
    { kanji: "知", meaning: "know, wisdom", romaji: "chi" },
    { kanji: "智", meaning: "wisdom, intellect", romaji: "chi" },
    { kanji: "地", meaning: "earth, ground", romaji: "chi" },
    { kanji: "力", meaning: "power, strength", romaji: "chikara" },
    { kanji: "近", meaning: "near, close", romaji: "chika" },
    { kanji: "誓", meaning: "vow, swear", romaji: "chikai" },
    { kanji: "稚", meaning: "young, childish", romaji: "chi" }
  ],
  "tsu": [
    { kanji: "月", meaning: "moon, month", romaji: "tsuki" },
    { kanji: "津", meaning: "harbor, ferry", romaji: "tsu" },
    { kanji: "通", meaning: "pass through, commute", romaji: "tsu" },
    { kanji: "翼", meaning: "wing, fly", romaji: "tsubasa" },
    { kanji: "鶴", meaning: "crane (bird)", romaji: "tsuru" },
    { kanji: "強", meaning: "strong, powerful", romaji: "tsuyoshi" }
  ],
  "te": [
    { kanji: "天", meaning: "heaven, sky", romaji: "ten" },
    { kanji: "照", meaning: "shine, illuminate", romaji: "teru" },
    { kanji: "輝", meaning: "radiance, shine", romaji: "teru" },
    { kanji: "帝", meaning: "emperor", romaji: "tei" },
    { kanji: "貞", meaning: "virtuous, chastity", romaji: "tei" },
    { kanji: "哲", meaning: "philosophy, wise", romaji: "tetsu" }
  ],
  "to": [
    { kanji: "人", meaning: "person, human", romaji: "to" },
    { kanji: "翔", meaning: "soar, fly", romaji: "to" },
    { kanji: "斗", meaning: "Big Dipper, measure", romaji: "to" },
    { kanji: "音", meaning: "sound, music", romaji: "to" },
    { kanji: "友", meaning: "friend", romaji: "tomo" },
    { kanji: "智", meaning: "wisdom, intellect", romaji: "tomo" },
    { kanji: "冬", meaning: "winter", romaji: "fuyu" },
    { kanji: "登", meaning: "ascend, climb", romaji: "to" }
  ],
  
  // Na-row
  "na": [
    { kanji: "菜", meaning: "vegetable, greens", romaji: "na" },
    { kanji: "奈", meaning: "Nara, what", romaji: "na" },
    { kanji: "那", meaning: "what, beautiful", romaji: "na" },
    { kanji: "七", meaning: "seven", romaji: "nana" },
    { kanji: "凪", meaning: "calm, lull", romaji: "nagi" },
    { kanji: "渚", meaning: "beach, shore", romaji: "nagisa" },
    { kanji: "南", meaning: "south", romaji: "na" },
    { kanji: "夏", meaning: "summer", romaji: "natsu" }
  ],
  "ni": [
    { kanji: "虹", meaning: "rainbow", romaji: "niji" },
    { kanji: "仁", meaning: "benevolence, humanity", romaji: "ni" },
    { kanji: "新", meaning: "new, fresh", romaji: "nii" },
    { kanji: "二", meaning: "two", romaji: "ni" },
    { kanji: "丹", meaning: "red, cinnabar", romaji: "ni" },
    { kanji: "似", meaning: "resemblance, similar", romaji: "ni" }
  ],
  "nu": [
    { kanji: "温", meaning: "warm, mild", romaji: "atataka" },
    { kanji: "布", meaning: "cloth, spread", romaji: "nuno" },
    { kanji: "沼", meaning: "marsh, pond", romaji: "numa" },
    { kanji: "主", meaning: "master, main", romaji: "nushi" }
  ],
  "ne": [
    { kanji: "音", meaning: "sound, music", romaji: "ne" },
    { kanji: "寧", meaning: "peaceful, rather", romaji: "nei" },
    { kanji: "根", meaning: "root, basis", romaji: "ne" },
    { kanji: "嶺", meaning: "peak, summit", romaji: "ne" },
    { kanji: "祈", meaning: "pray, wish", romaji: "negai" },
    { kanji: "願", meaning: "wish, request", romaji: "negai" }
  ],
  "no": [
    { kanji: "乃", meaning: "from, possessive particle", romaji: "no" },
    { kanji: "野", meaning: "field, plain", romaji: "no" },
    { kanji: "望", meaning: "hope, desire", romaji: "nozomu" },
    { kanji: "伸", meaning: "expand, stretch", romaji: "nobu" },
    { kanji: "信", meaning: "faith, trust", romaji: "nobu" },
    { kanji: "昇", meaning: "rise, ascend", romaji: "noboru" }
  ],
  
  // Ha-row
  "ha": [
    { kanji: "葉", meaning: "leaf, foliage", romaji: "ha" },
    { kanji: "花", meaning: "flower, blossom", romaji: "hana" },
    { kanji: "波", meaning: "wave, billow", romaji: "ha" },
    { kanji: "晴", meaning: "clear weather, sunny", romaji: "hare" },
    { kanji: "羽", meaning: "feather, wing", romaji: "ha" },
    { kanji: "春", meaning: "spring, springtime", romaji: "haru" },
    { kanji: "遥", meaning: "far, distant", romaji: "haruka" },
    { kanji: "陽", meaning: "sunshine, positive", romaji: "haru" }
  ],
  "hi": [
    { kanji: "陽", meaning: "sunshine, positive", romaji: "hi" },
    { kanji: "日", meaning: "sun, day", romaji: "hi" },
    { kanji: "光", meaning: "light, ray", romaji: "hikari" },
    { kanji: "響", meaning: "echo, sound", romaji: "hibiki" },
    { kanji: "飛", meaning: "fly, soar", romaji: "hi" },
    { kanji: "妃", meaning: "princess, queen", romaji: "hi" },
    { kanji: "姫", meaning: "princess", romaji: "hime" },
    { kanji: "緋", meaning: "scarlet, crimson", romaji: "hi" }
  ],
  "fu": [
    { kanji: "風", meaning: "wind, style", romaji: "fu" },
    { kanji: "富", meaning: "wealth, abundance", romaji: "fu" },
    { kanji: "史", meaning: "history, chronicle", romaji: "fumi" },
    { kanji: "文", meaning: "writing, sentence", romaji: "fumi" },
    { kanji: "冬", meaning: "winter", romaji: "fuyu" },
    { kanji: "舞", meaning: "dance, flutter", romaji: "fu" }
  ],
  "he": [
    { kanji: "平", meaning: "flat, peace", romaji: "hei" },
    { kanji: "兵", meaning: "soldier, army", romaji: "hei" },
    { kanji: "辺", meaning: "area, vicinity", romaji: "he" },
    { kanji: "碧", meaning: "blue, green", romaji: "heki" }
  ],
  "ho": [
    { kanji: "穂", meaning: "ear of grain, spike", romaji: "ho" },
    { kanji: "帆", meaning: "sail", romaji: "ho" },
    { kanji: "星", meaning: "star, planet", romaji: "hoshi" },
    { kanji: "歩", meaning: "walk, step", romaji: "ho" },
    { kanji: "宝", meaning: "treasure, jewel", romaji: "ho" },
    { kanji: "蛍", meaning: "firefly", romaji: "hotaru" }
  ],
  
  // Ma-row
  "ma": [
    { kanji: "真", meaning: "true, genuine", romaji: "ma" },
    { kanji: "麻", meaning: "hemp, flax", romaji: "ma" },
    { kanji: "舞", meaning: "dance, flutter", romaji: "mai" },
    { kanji: "茉", meaning: "jasmine", romaji: "ma" },
    { kanji: "万", meaning: "ten thousand, many", romaji: "man" },
    { kanji: "円", meaning: "circle, yen", romaji: "maru" },
    { kanji: "学", meaning: "study, learning", romaji: "manabu" },
    { kanji: "希", meaning: "hope, rare", romaji: "mare" }
  ],
  "mi": [
    { kanji: "美", meaning: "beauty, beautiful", romaji: "mi" },
    { kanji: "実", meaning: "truth, fruit", romaji: "mi" },
    { kanji: "海", meaning: "ocean, sea", romaji: "mi" },
    { kanji: "未", meaning: "not yet, future", romaji: "mi" },
    { kanji: "魅", meaning: "charm, fascinate", romaji: "mi" },
    { kanji: "光", meaning: "light, ray", romaji: "mitsu" },
    { kanji: "道", meaning: "road, path", romaji: "michi" },
    { kanji: "満", meaning: "full, fulfill", romaji: "mitsu" }
  ],
  "mu": [
    { kanji: "夢", meaning: "dream, vision", romaji: "mu" },
    { kanji: "武", meaning: "military, warrior", romaji: "mu" },
    { kanji: "睦", meaning: "harmony, friendly", romaji: "mutsu" },
    { kanji: "紫", meaning: "purple, violet", romaji: "murasaki" },
    { kanji: "群", meaning: "group, crowd", romaji: "mure" }
  ],
  "me": [
    { kanji: "芽", meaning: "sprout, bud", romaji: "me" },
    { kanji: "愛", meaning: "love, affection", romaji: "megumi" },
    { kanji: "恵", meaning: "blessing, favor", romaji: "megumi" },
    { kanji: "命", meaning: "life, fate", romaji: "mei" },
    { kanji: "明", meaning: "bright, light", romaji: "mei" },
    { kanji: "女", meaning: "woman, female", romaji: "me" }
  ],
  "mo": [
    { kanji: "萌", meaning: "sprout, budding", romaji: "moe" },
    { kanji: "桃", meaning: "peach", romaji: "momo" },
    { kanji: "紅", meaning: "crimson, red", romaji: "momi" },
    { kanji: "守", meaning: "protect, guard", romaji: "mori" },
    { kanji: "杜", meaning: "woods, grove", romaji: "mori" },
    { kanji: "望", meaning: "hope, desire", romaji: "mochi" },
    { kanji: "元", meaning: "origin, foundation", romaji: "moto" },
    { kanji: "求", meaning: "request, seek", romaji: "motome" }
  ],
  
  // Ya-row
  "ya": [
    { kanji: "弥", meaning: "increasingly, more", romaji: "ya" },
    { kanji: "也", meaning: "to be, also", romaji: "ya" },
    { kanji: "夜", meaning: "night, evening", romaji: "yoru" },
    { kanji: "矢", meaning: "arrow, dart", romaji: "ya" },
    { kanji: "八", meaning: "eight", romaji: "ya" },
    { kanji: "谷", meaning: "valley", romaji: "ya" }
  ],
  "yu": [
    { kanji: "優", meaning: "gentle, superior", romaji: "yu" },
    { kanji: "悠", meaning: "permanence, leisure", romaji: "yu" },
    { kanji: "結", meaning: "tie, bind", romaji: "yu" },
    { kanji: "夢", meaning: "dream, vision", romaji: "yume" },
    { kanji: "由", meaning: "reason, cause", romaji: "yu" },
    { kanji: "勇", meaning: "courage, brave", romaji: "yu" },
    { kanji: "友", meaning: "friend", romaji: "yu" },
    { kanji: "柚", meaning: "citron, yuzu", romaji: "yuzu" }
  ],
  "yo": [
    { kanji: "世", meaning: "world, society", romaji: "yo" },
    { kanji: "代", meaning: "generation, era", romaji: "yo" },
    { kanji: "陽", meaning: "sunshine, positive", romaji: "yo" },
    { kanji: "葉", meaning: "leaf, foliage", romaji: "yo" },
    { kanji: "夜", meaning: "night, evening", romaji: "yoru" },
    { kanji: "良", meaning: "good, excellent", romaji: "yo" },
    { kanji: "与", meaning: "give, bestow", romaji: "yo" },
    { kanji: "吉", meaning: "good luck, joy", romaji: "yoshi" }
  ],
  
  // Ra-row
  "ra": [
    { kanji: "羅", meaning: "silk, spread out", romaji: "ra" },
    { kanji: "楽", meaning: "comfort, music", romaji: "raku" },
    { kanji: "来", meaning: "come, next", romaji: "rai" },
    { kanji: "礼", meaning: "courtesy, etiquette", romaji: "rei" },
    { kanji: "麗", meaning: "lovely, beautiful", romaji: "rei" },
    { kanji: "蘭", meaning: "orchid", romaji: "ran" }
  ],
  "ri": [
    { kanji: "理", meaning: "reason, logic", romaji: "ri" },
    { kanji: "里", meaning: "village, mile", romaji: "ri" },
    { kanji: "梨", meaning: "pear", romaji: "ri" },
    { kanji: "璃", meaning: "glassy, lapis lazuli", romaji: "ri" },
    { kanji: "莉", meaning: "jasmine", romaji: "ri" },
    { kanji: "利", meaning: "profit, benefit", romaji: "ri" },
    { kanji: "麗", meaning: "lovely, beautiful", romaji: "rei" },
    { kanji: "律", meaning: "law, rhythm", romaji: "ritsu" }
  ],
  "ru": [
    { kanji: "瑠", meaning: "lapis lazuli", romaji: "ru" },
    { kanji: "流", meaning: "flow, current", romaji: "ru" },
    { kanji: "琉", meaning: "precious stone", romaji: "ru" },
    { kanji: "留", meaning: "stay, detain", romaji: "ru" },
    { kanji: "類", meaning: "kind, variety", romaji: "rui" }
  ],
  "re": [
    { kanji: "礼", meaning: "courtesy, etiquette", romaji: "rei" },
    { kanji: "麗", meaning: "lovely, beautiful", romaji: "rei" },
    { kanji: "玲", meaning: "tinkling of jewelry", romaji: "rei" },
    { kanji: "鈴", meaning: "bell, small bell", romaji: "rei" },
    { kanji: "霊", meaning: "spirit, soul", romaji: "rei" },
    { kanji: "零", meaning: "zero, spill", romaji: "rei" }
  ],
  "ro": [
    { kanji: "呂", meaning: "spine, backbone", romaji: "ro" },
    { kanji: "路", meaning: "road, path", romaji: "ro" },
    { kanji: "露", meaning: "dew, Russia", romaji: "ro" },
    { kanji: "朗", meaning: "clear, bright", romaji: "ro" },
    { kanji: "郎", meaning: "son, male", romaji: "ro" },
    { kanji: "論", meaning: "argument, discuss", romaji: "ron" }
  ],
  
  // Wa-row
  "wa": [
    { kanji: "和", meaning: "harmony, peace", romaji: "wa" },
    { kanji: "輪", meaning: "ring, circle", romaji: "wa" },
    { kanji: "環", meaning: "ring, surround", romaji: "wa" },
    { kanji: "倭", meaning: "Japan, Yamato", romaji: "wa" },
    { kanji: "話", meaning: "talk, story", romaji: "wa" },
    { kanji: "惑", meaning: "bewitch, perplexed", romaji: "waku" }
  ],
  
  // Ga-row
  "ga": [
    { kanji: "雅", meaning: "elegant, graceful", romaji: "ga" },
    { kanji: "賀", meaning: "congratulations, joy", romaji: "ga" },
    { kanji: "我", meaning: "self, I", romaji: "ga" },
    { kanji: "芽", meaning: "sprout, bud", romaji: "ga" },
    { kanji: "河", meaning: "river, stream", romaji: "kawa" },
    { kanji: "月", meaning: "moon, month", romaji: "gatsu" }
  ],
  "gi": [
    { kanji: "義", meaning: "righteousness, justice", romaji: "gi" },
    { kanji: "技", meaning: "skill, technique", romaji: "gi" },
    { kanji: "宜", meaning: "suitable, proper", romaji: "gi" },
    { kanji: "祇", meaning: "earth god", romaji: "gi" },
    { kanji: "儀", meaning: "ceremony, rite", romaji: "gi" }
  ],
  "gu": [
    { kanji: "空", meaning: "sky, heaven", romaji: "gu" },
    { kanji: "具", meaning: "tool, means", romaji: "gu" },
    { kanji: "宮", meaning: "shrine, palace", romaji: "gu" },
    { kanji: "群", meaning: "group, crowd", romaji: "gun" }
  ],
  "ge": [
    { kanji: "夏", meaning: "summer", romaji: "ge" },
    { kanji: "月", meaning: "moon, month", romaji: "getsu" },
    { kanji: "下", meaning: "below, descend", romaji: "ge" },
    { kanji: "華", meaning: "splendor, flower", romaji: "ge" }
  ],
  "go": [
    { kanji: "悟", meaning: "enlightenment, perceive", romaji: "go" },
    { kanji: "護", meaning: "protect, defend", romaji: "go" },
    { kanji: "吾", meaning: "I, myself", romaji: "go" },
    { kanji: "語", meaning: "word, language", romaji: "go" },
    { kanji: "午", meaning: "noon, horse", romaji: "go" }
  ],
  
  // Za-row
  "za": [
    { kanji: "座", meaning: "seat, position", romaji: "za" },
    { kanji: "雑", meaning: "miscellaneous, mixed", romaji: "za" },
    { kanji: "蔵", meaning: "storehouse, hide", romaji: "zo" }
  ],
  "ji": [
    { kanji: "慈", meaning: "mercy, compassion", romaji: "ji" },
    { kanji: "次", meaning: "next, second", romaji: "ji" },
    { kanji: "治", meaning: "govern, cure", romaji: "ji" },
    { kanji: "字", meaning: "character, letter", romaji: "ji" },
    { kanji: "時", meaning: "time, hour", romaji: "ji" },
    { kanji: "地", meaning: "earth, ground", romaji: "ji" }
  ],
  "zu": [
    { kanji: "図", meaning: "diagram, map", romaji: "zu" },
    { kanji: "寿", meaning: "longevity, congratulations", romaji: "zu" },
    { kanji: "瑞", meaning: "auspicious, congratulations", romaji: "zui" }
  ],
  "ze": [
    { kanji: "是", meaning: "right, just", romaji: "ze" },
    { kanji: "勢", meaning: "force, energy", romaji: "zei" },
    { kanji: "全", meaning: "whole, complete", romaji: "zen" }
  ],
  "zo": [
    { kanji: "蔵", meaning: "storehouse, hide", romaji: "zo" },
    { kanji: "造", meaning: "create, make", romaji: "zo" },
    { kanji: "像", meaning: "statue, image", romaji: "zo" }
  ],
  
  // Da-row
  "da": [
    { kanji: "大", meaning: "large, great", romaji: "dai" },
    { kanji: "代", meaning: "generation, era", romaji: "dai" },
    { kanji: "第", meaning: "ordinal number", romaji: "dai" },
    { kanji: "題", meaning: "topic, subject", romaji: "dai" },
    { kanji: "台", meaning: "platform, stand", romaji: "dai" }
  ],
  "di": [
    { kanji: "出", meaning: "exit, put out", romaji: "de" },
    { kanji: "伝", meaning: "transmit, legend", romaji: "den" }
  ],
  "du": [
    { kanji: "図", meaning: "diagram, map", romaji: "zu" },
    { kanji: "豆", meaning: "beans, peas", romaji: "zu" }
  ],
  "de": [
    { kanji: "出", meaning: "exit, put out", romaji: "de" },
    { kanji: "伝", meaning: "transmit, legend", romaji: "den" },
    { kanji: "田", meaning: "rice field", romaji: "den" }
  ],
  "do": [
    { kanji: "道", meaning: "road, path", romaji: "do" },
    { kanji: "童", meaning: "child, juvenile", romaji: "do" },
    { kanji: "堂", meaning: "hall, temple", romaji: "do" },
    { kanji: "銅", meaning: "copper", romaji: "do" }
  ],
  
  // Ba-row
  "ba": [
    { kanji: "馬", meaning: "horse", romaji: "ba" },
    { kanji: "場", meaning: "place, scene", romaji: "ba" },
    { kanji: "羽", meaning: "feather, wing", romaji: "ba" },
    { kanji: "葉", meaning: "leaf, foliage", romaji: "ba" }
  ],
  "bi": [
    { kanji: "美", meaning: "beauty, beautiful", romaji: "bi" },
    { kanji: "微", meaning: "delicate, minute", romaji: "bi" },
    { kanji: "眉", meaning: "eyebrow", romaji: "bi" },
    { kanji: "備", meaning: "equip, prepare", romaji: "bi" }
  ],
  "bu": [
    { kanji: "舞", meaning: "dance, flutter", romaji: "bu" },
    { kanji: "武", meaning: "military, warrior", romaji: "bu" },
    { kanji: "文", meaning: "writing, sentence", romaji: "bun" },
    { kanji: "部", meaning: "section, department", romaji: "bu" }
  ],
  "be": [
    { kanji: "辺", meaning: "area, vicinity", romaji: "be" },
    { kanji: "紅", meaning: "crimson, red", romaji: "beni" }
  ],
  "bo": [
    { kanji: "望", meaning: "hope, desire", romaji: "bo" },
    { kanji: "星", meaning: "star, planet", romaji: "boshi" },
    { kanji: "母", meaning: "mother", romaji: "bo" },
    { kanji: "坊", meaning: "boy, priest", romaji: "bo" }
  ],
  
  // Pa-row
  "pa": [
    { kanji: "葉", meaning: "leaf, foliage", romaji: "pa" },
    { kanji: "羽", meaning: "feather, wing", romaji: "pa" },
    { kanji: "波", meaning: "wave, billow", romaji: "pa" }
  ],
  "pi": [
    { kanji: "日", meaning: "sun, day", romaji: "pi" },
    { kanji: "光", meaning: "light, ray", romaji: "pikari" }
  ],
  "pu": [
    { kanji: "風", meaning: "wind, style", romaji: "pu" },
    { kanji: "舞", meaning: "dance, flutter", romaji: "pu" }
  ],
  "pe": [
    { kanji: "平", meaning: "flat, peace", romaji: "pe" },
    { kanji: "辺", meaning: "area, vicinity", romaji: "pe" }
  ],
  "po": [
    { kanji: "穂", meaning: "ear of grain, spike", romaji: "po" },
    { kanji: "星", meaning: "star, planet", romaji: "poshi" }
  ]
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = kanjiDatabase;
}
