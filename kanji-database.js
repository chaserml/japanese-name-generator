// Comprehensive kanji database for Japanese name generation
// Each syllable maps to multiple kanji with positive, encouraging meanings

const kanjiDatabase = {
  // Vowels - Enhanced with positive, biblical meanings
  "a": [
    { kanji: "愛", meaning: "love, affection", romaji: "a" },
    { kanji: "安", meaning: "peace, tranquility", romaji: "a" },
    { kanji: "明", meaning: "bright, clear, light", romaji: "a" },
    { kanji: "彩", meaning: "color, beautiful", romaji: "a" },
    { kanji: "朝", meaning: "morning, new beginning", romaji: "a" },
    { kanji: "空", meaning: "sky, heaven", romaji: "a" },
    { kanji: "亜", meaning: "second, Asia", romaji: "a" },
    { kanji: "阿", meaning: "peace, harmony", romaji: "a" }
  ],
  "i": [
    { kanji: "生", meaning: "life, living", romaji: "i" },
    { kanji: "衣", meaning: "garment, protection", romaji: "i" },
    { kanji: "依", meaning: "rely on, trust", romaji: "i" },
    { kanji: "唯", meaning: "unique, only one", romaji: "i" },
    { kanji: "維", meaning: "maintain, preserve", romaji: "i" },
    { kanji: "威", meaning: "dignity, majesty", romaji: "i" },
    { kanji: "伊", meaning: "great, excellence", romaji: "i" },
    { kanji: "意", meaning: "meaning, purpose", romaji: "i" }
  ],
  "u": [
    { kanji: "優", meaning: "gentle, superior", romaji: "u" },
    { kanji: "羽", meaning: "feather, wing, ascend", romaji: "u" },
    { kanji: "宇", meaning: "universe, eternity", romaji: "u" },
    { kanji: "雨", meaning: "rain, blessing from heaven", romaji: "u" },
    { kanji: "海", meaning: "ocean, vastness", romaji: "u" },
    { kanji: "有", meaning: "have, exist, possess", romaji: "u" },
    { kanji: "右", meaning: "right, correct", romaji: "u" },
    { kanji: "歌", meaning: "song, praise", romaji: "u" }
  ],
  "e": [
    { kanji: "恵", meaning: "grace, blessing, favor", romaji: "e" },
    { kanji: "笑", meaning: "smile, joy", romaji: "e" },
    { kanji: "栄", meaning: "glory, prosper, flourish", romaji: "e" },
    { kanji: "英", meaning: "excel, brilliant", romaji: "e" },
    { kanji: "永", meaning: "eternal, forever", romaji: "e" },
    { kanji: "絵", meaning: "picture, beautiful image", romaji: "e" },
    { kanji: "江", meaning: "inlet, flow", romaji: "e" },
    { kanji: "映", meaning: "reflect, shine", romaji: "e" }
  ],
  "o": [
    { kanji: "央", meaning: "center, heart", romaji: "o" },
    { kanji: "王", meaning: "king, royal", romaji: "o" },
    { kanji: "緒", meaning: "beginning, thread", romaji: "o" },
    { kanji: "桜", meaning: "cherry blossom, beauty", romaji: "o" },
    { kanji: "音", meaning: "sound, music", romaji: "o" },
    { kanji: "織", meaning: "weave, create", romaji: "o" },
    { kanji: "穏", meaning: "calm, gentle", romaji: "o" },
    { kanji: "和", meaning: "harmony, peace", romaji: "o" }
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
  "si": [
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
  ],

  // Standalone N
  "n": [
    { kanji: "音", meaning: "sound, music", romaji: "n" },
    { kanji: "恩", meaning: "grace, favor", romaji: "n" },
    { kanji: "温", meaning: "warm, mild", romaji: "n" },
    { kanji: "穏", meaning: "calm, peaceful", romaji: "n" },
    { kanji: "園", meaning: "garden, park", romaji: "n" },
    { kanji: "縁", meaning: "connection, fate", romaji: "n" },
    { kanji: "遠", meaning: "distant, far", romaji: "n" },
    { kanji: "円", meaning: "circle, yen", romaji: "n" }
  ],

  // Vowel + N combinations (for name endings)
  "an": [
    { kanji: "安", meaning: "peace, tranquility", romaji: "an" },
    { kanji: "杏", meaning: "apricot", romaji: "an" },
    { kanji: "案", meaning: "plan, proposal", romaji: "an" },
    { kanji: "暗", meaning: "dark, memorize", romaji: "an" },
    { kanji: "鞍", meaning: "saddle", romaji: "an" },
    { kanji: "庵", meaning: "hermitage", romaji: "an" },
    { kanji: "按", meaning: "press, hold", romaji: "an" },
    { kanji: "餡", meaning: "bean paste", romaji: "an" }
  ],
  "in": [
    { kanji: "院", meaning: "institution, temple", romaji: "in" },
    { kanji: "印", meaning: "seal, stamp", romaji: "in" },
    { kanji: "因", meaning: "cause, reason", romaji: "in" },
    { kanji: "陰", meaning: "shade, shadow", romaji: "in" },
    { kanji: "韻", meaning: "rhyme, elegance", romaji: "in" },
    { kanji: "引", meaning: "pull, lead", romaji: "in" },
    { kanji: "員", meaning: "member", romaji: "in" },
    { kanji: "淫", meaning: "excess", romaji: "in" }
  ],
  "un": [
    { kanji: "運", meaning: "fortune, carry", romaji: "un" },
    { kanji: "雲", meaning: "cloud", romaji: "un" },
    { kanji: "韻", meaning: "rhyme", romaji: "un" },
    { kanji: "海", meaning: "sea", romaji: "un" },
    { kanji: "紜", meaning: "confused", romaji: "un" },
    { kanji: "芸", meaning: "art, craft", romaji: "un" },
    { kanji: "温", meaning: "warm", romaji: "un" },
    { kanji: "恩", meaning: "grace, kindness", romaji: "un" }
  ],
  "en": [
    { kanji: "円", meaning: "circle, yen", romaji: "en" },
    { kanji: "園", meaning: "garden, park", romaji: "en" },
    { kanji: "縁", meaning: "connection, relationship", romaji: "en" },
    { kanji: "遠", meaning: "distant", romaji: "en" },
    { kanji: "延", meaning: "prolong, extend", romaji: "en" },
    { kanji: "演", meaning: "perform, act", romaji: "en" },
    { kanji: "宴", meaning: "feast, banquet", romaji: "en" },
    { kanji: "援", meaning: "help, assist", romaji: "en" }
  ],
  "on": [
    { kanji: "音", meaning: "sound, music", romaji: "on" },
    { kanji: "恩", meaning: "grace, favor", romaji: "on" },
    { kanji: "温", meaning: "warm, gentle", romaji: "on" },
    { kanji: "穏", meaning: "calm, peaceful", romaji: "on" },
    { kanji: "園", meaning: "garden", romaji: "on" },
    { kanji: "遠", meaning: "distant", romaji: "on" },
    { kanji: "怨", meaning: "resentment", romaji: "on" },
    { kanji: "恩", meaning: "kindness, debt", romaji: "on" }
  ],

  // Consonant + N combinations (for name endings like -san, -tan, etc.)
  "san": [
    { kanji: "山", meaning: "mountain, peak", romaji: "san" },
    { kanji: "三", meaning: "three, trinity", romaji: "san" },
    { kanji: "参", meaning: "visit, worship", romaji: "san" },
    { kanji: "讃", meaning: "praise, admire", romaji: "san" },
    { kanji: "燦", meaning: "brilliant, sparkle", romaji: "san" },
    { kanji: "賛", meaning: "approve, praise", romaji: "san" },
    { kanji: "産", meaning: "produce, birth", romaji: "san" },
    { kanji: "酸", meaning: "acid, sour", romaji: "san" }
  ],
  "kan": [
    { kanji: "寛", meaning: "generous, tolerance", romaji: "kan" },
    { kanji: "歓", meaning: "joy, delight", romaji: "kan" },
    { kanji: "感", meaning: "feeling, sensation", romaji: "kan" },
    { kanji: "環", meaning: "ring, circle", romaji: "kan" },
    { kanji: "冠", meaning: "crown, crest", romaji: "kan" },
    { kanji: "完", meaning: "complete, perfect", romaji: "kan" },
    { kanji: "官", meaning: "official, government", romaji: "kan" },
    { kanji: "貫", meaning: "pierce, penetrate", romaji: "kan" }
  ],
  "tan": [
    { kanji: "旦", meaning: "morning, daybreak", romaji: "tan" },
    { kanji: "誕", meaning: "birth, nativity", romaji: "tan" },
    { kanji: "嘆", meaning: "admire, lament", romaji: "tan" },
    { kanji: "端", meaning: "edge, beginning", romaji: "tan" },
    { kanji: "丹", meaning: "red, sincere", romaji: "tan" },
    { kanji: "単", meaning: "simple, single", romaji: "tan" },
    { kanji: "担", meaning: "carry, shoulder", romaji: "tan" },
    { kanji: "炭", meaning: "charcoal, coal", romaji: "tan" }
  ],
  "man": [
    { kanji: "万", meaning: "ten thousand, myriad", romaji: "man" },
    { kanji: "満", meaning: "full, fulfill", romaji: "man" },
    { kanji: "慢", meaning: "pride, contempt", romaji: "man" },
    { kanji: "漫", meaning: "vast, unrestrained", romaji: "man" },
    { kanji: "曼", meaning: "long, extended", romaji: "man" },
    { kanji: "蔓", meaning: "vine, creeper", romaji: "man" },
    { kanji: "鰻", meaning: "eel", romaji: "man" },
    { kanji: "慢", meaning: "slow, lazy", romaji: "man" }
  ],
  "ran": [
    { kanji: "蘭", meaning: "orchid, elegant", romaji: "ran" },
    { kanji: "欄", meaning: "column, railing", romaji: "ran" },
    { kanji: "嵐", meaning: "storm, tempest", romaji: "ran" },
    { kanji: "藍", meaning: "indigo, blue", romaji: "ran" },
    { kanji: "乱", meaning: "disorder, chaos", romaji: "ran" },
    { kanji: "覧", meaning: "perusal, view", romaji: "ran" },
    { kanji: "卵", meaning: "egg", romaji: "ran" },
    { kanji: "濫", meaning: "overflow, excessive", romaji: "ran" }
  ],
  "ban": [
    { kanji: "晩", meaning: "evening, night", romaji: "ban" },
    { kanji: "番", meaning: "number, watch", romaji: "ban" },
    { kanji: "蛮", meaning: "barbarian, wild", romaji: "ban" },
    { kanji: "盤", meaning: "tray, board", romaji: "ban" },
    { kanji: "万", meaning: "ten thousand", romaji: "ban" },
    { kanji: "絆", meaning: "bond, tie", romaji: "ban" },
    { kanji: "判", meaning: "judgment, seal", romaji: "ban" },
    { kanji: "伴", meaning: "companion, accompany", romaji: "ban" }
  ],
  "pan": [
    { kanji: "判", meaning: "judgment, seal", romaji: "pan" },
    { kanji: "伴", meaning: "companion", romaji: "pan" },
    { kanji: "半", meaning: "half", romaji: "pan" },
    { kanji: "板", meaning: "board, plank", romaji: "pan" },
    { kanji: "盤", meaning: "tray, board", romaji: "pan" },
    { kanji: "般", meaning: "sort, general", romaji: "pan" },
    { kanji: "搬", meaning: "transport, carry", romaji: "pan" },
    { kanji: "班", meaning: "squad, group", romaji: "pan" }
  ],
  "dan": [
    { kanji: "団", meaning: "group,団体", romaji: "dan" },
    { kanji: "段", meaning: "step, stage", romaji: "dan" },
    { kanji: "暖", meaning: "warm, genial", romaji: "dan" },
    { kanji: "談", meaning: "talk, discussion", romaji: "dan" },
    { kanji: "弾", meaning: "bullet, bounce", romaji: "dan" },
    { kanji: "壇", meaning: "platform, altar", romaji: "dan" },
    { kanji: "男", meaning: "man, male", romaji: "dan" },
    { kanji: "断", meaning: "sever, decide", romaji: "dan" }
  ],
  "sen": [
    { kanji: "千", meaning: "thousand", romaji: "sen" },
    { kanji: "泉", meaning: "spring, fountain", romaji: "sen" },
    { kanji: "鮮", meaning: "fresh, vivid", romaji: "sen" },
    { kanji: "善", meaning: "good, virtue", romaji: "sen" },
    { kanji: "仙", meaning: "hermit, immortal", romaji: "sen" },
    { kanji: "宣", meaning: "proclaim, announce", romaji: "sen" },
    { kanji: "専", meaning: "specialty, exclusive", romaji: "sen" },
    { kanji: "船", meaning: "ship, boat", romaji: "sen" }
  ],
  "ken": [
    { kanji: "健", meaning: "healthy, strong", romaji: "ken" },
    { kanji: "賢", meaning: "wise, intelligent", romaji: "ken" },
    { kanji: "憲", meaning: "law, constitution", romaji: "ken" },
    { kanji: "謙", meaning: "humble, modest", romaji: "ken" },
    { kanji: "堅", meaning: "firm, solid", romaji: "ken" },
    { kanji: "研", meaning: "polish, study", romaji: "ken" },
    { kanji: "献", meaning: "offer, dedicate", romaji: "ken" },
    { kanji: "絹", meaning: "silk", romaji: "ken" }
  ],
  "ten": [
    { kanji: "天", meaning: "heaven, sky", romaji: "ten" },
    { kanji: "典", meaning: "law, ceremony", romaji: "ten" },
    { kanji: "点", meaning: "point, dot", romaji: "ten" },
    { kanji: "展", meaning: "unfold, expand", romaji: "ten" },
    { kanji: "転", meaning: "revolve, turn", romaji: "ten" },
    { kanji: "店", meaning: "store, shop", romaji: "ten" },
    { kanji: "殿", meaning: "palace, lord", romaji: "ten" },
    { kanji: "添", meaning: "attach, append", romaji: "ten" }
  ],
  "men": [
    { kanji: "面", meaning: "face, surface", romaji: "men" },
    { kanji: "綿", meaning: "cotton", romaji: "men" },
    { kanji: "免", meaning: "excuse, avoid", romaji: "men" },
    { kanji: "眠", meaning: "sleep, close eyes", romaji: "men" },
    { kanji: "麺", meaning: "noodles", romaji: "men" },
    { kanji: "棉", meaning: "cotton", romaji: "men" },
    { kanji: "緬", meaning: "Myanmar, distant", romaji: "men" },
    { kanji: "勉", meaning: "endeavor, study", romaji: "men" }
  ],
  "ren": [
    { kanji: "蓮", meaning: "lotus", romaji: "ren" },
    { kanji: "連", meaning: "connect, link", romaji: "ren" },
    { kanji: "恋", meaning: "love, romance", romaji: "ren" },
    { kanji: "練", meaning: "practice, train", romaji: "ren" },
    { kanji: "廉", meaning: "honest, low price", romaji: "ren" },
    { kanji: "煉", meaning: "refine, smelt", romaji: "ren" },
    { kanji: "憐", meaning: "pity, compassion", romaji: "ren" },
    { kanji: "錬", meaning: "temper, refine", romaji: "ren" }
  ],
  "ben": [
    { kanji: "勉", meaning: "exertion, endeavor", romaji: "ben" },
    { kanji: "弁", meaning: "speech, dialect", romaji: "ben" },
    { kanji: "便", meaning: "convenience", romaji: "ben" },
    { kanji: "辨", meaning: "discriminate", romaji: "ben" },
    { kanji: "辯", meaning: "speech, argue", romaji: "ben" },
    { kanji: "瓣", meaning: "petal, valve", romaji: "ben" },
    { kanji: "鞭", meaning: "whip", romaji: "ben" },
    { kanji: "弁", meaning: "valve, petal", romaji: "ben" }
  ],
  "pen": [
    { kanji: "片", meaning: "piece, one-sided", romaji: "pen" },
    { kanji: "編", meaning: "compile, edit", romaji: "pen" },
    { kanji: "辺", meaning: "area, vicinity", romaji: "pen" },
    { kanji: "変", meaning: "change, unusual", romaji: "pen" },
    { kanji: "偏", meaning: "partial, one-sided", romaji: "pen" },
    { kanji: "遍", meaning: "everywhere, times", romaji: "pen" },
    { kanji: "便", meaning: "convenience", romaji: "pen" },
    { kanji: "弁", meaning: "valve, speech", romaji: "pen" }
  ],
  "den": [
    { kanji: "伝", meaning: "transmit, legend", romaji: "den" },
    { kanji: "田", meaning: "rice field", romaji: "den" },
    { kanji: "電", meaning: "electricity", romaji: "den" },
    { kanji: "殿", meaning: "palace, lord", romaji: "den" },
    { kanji: "天", meaning: "heaven", romaji: "den" },
    { kanji: "転", meaning: "revolve, change", romaji: "den" },
    { kanji: "典", meaning: "law, code", romaji: "den" },
    { kanji: "展", meaning: "expand, unfold", romaji: "den" }
  ],
  "kin": [
    { kanji: "金", meaning: "gold, metal", romaji: "kin" },
    { kanji: "近", meaning: "near, close", romaji: "kin" },
    { kanji: "勤", meaning: "diligent, work", romaji: "kin" },
    { kanji: "禁", meaning: "prohibition", romaji: "kin" },
    { kanji: "謹", meaning: "respectful, careful", romaji: "kin" },
    { kanji: "欣", meaning: "delight, joy", romaji: "kin" },
    { kanji: "琴", meaning: "koto, harp", romaji: "kin" },
    { kanji: "筋", meaning: "muscle, line", romaji: "kin" }
  ],
  "kun": [
    { kanji: "君", meaning: "lord, you", romaji: "kun" },
    { kanji: "訓", meaning: "teaching, instruction", romaji: "kun" },
    { kanji: "薫", meaning: "fragrance", romaji: "kun" },
    { kanji: "勲", meaning: "merit, achievement", romaji: "kun" },
    { kanji: "燻", meaning: "smoke, smolder", romaji: "kun" },
    { kanji: "訓", meaning: "precept", romaji: "kun" },
    { kanji: "勳", meaning: "meritorious deed", romaji: "kun" },
    { kanji: "君", meaning: "monarch", romaji: "kun" }
  ],
  "kon": [
    { kanji: "今", meaning: "now, present", romaji: "kon" },
    { kanji: "根", meaning: "root, origin", romaji: "kon" },
    { kanji: "昆", meaning: "insect, together", romaji: "kon" },
    { kanji: "紺", meaning: "navy blue", romaji: "kon" },
    { kanji: "魂", meaning: "soul, spirit", romaji: "kon" },
    { kanji: "懇", meaning: "kindness, intimacy", romaji: "kon" },
    { kanji: "墾", meaning: "cultivate", romaji: "kon" },
    { kanji: "恨", meaning: "regret", romaji: "kon" }
  ],
  "son": [
    { kanji: "尊", meaning: "respect, honor", romaji: "son" },
    { kanji: "村", meaning: "village", romaji: "son" },
    { kanji: "存", meaning: "exist, preserve", romaji: "son" },
    { kanji: "孫", meaning: "grandchild", romaji: "son" },
    { kanji: "損", meaning: "loss, harm", romaji: "son" },
    { kanji: "遜", meaning: "humble, modest", romaji: "son" },
    { kanji: "尊", meaning: "revered, noble", romaji: "son" },
    { kanji: "村", meaning: "town", romaji: "son" }
  ],
  "ton": [
    { kanji: "豚", meaning: "pig", romaji: "ton" },
    { kanji: "頓", meaning: "suddenly, immediately", romaji: "ton" },
    { kanji: "屯", meaning: "gather, camp", romaji: "ton" },
    { kanji: "噸", meaning: "ton (weight)", romaji: "ton" },
    { kanji: "呑", meaning: "swallow, drink", romaji: "ton" },
    { kanji: "鈍", meaning: "dull, blunt", romaji: "ton" },
    { kanji: "敦", meaning: "sincere, kind", romaji: "ton" },
    { kanji: "惇", meaning: "sincere", romaji: "ton" }
  ],
  "nan": [
    { kanji: "南", meaning: "south", romaji: "nan" },
    { kanji: "難", meaning: "difficulty, hard", romaji: "nan" },
    { kanji: "軟", meaning: "soft, gentle", romaji: "nan" },
    { kanji: "楠", meaning: "camphor tree", romaji: "nan" },
    { kanji: "男", meaning: "man, male", romaji: "nan" },
    { kanji: "納", meaning: "supply, accept", romaji: "nan" },
    { kanji: "南", meaning: "southern", romaji: "nan" },
    { kanji: "軟", meaning: "flexible", romaji: "nan" }
  ],
  "nin": [
    { kanji: "人", meaning: "person, human", romaji: "nin" },
    { kanji: "任", meaning: "responsibility, duty", romaji: "nin" },
    { kanji: "忍", meaning: "endure, patience", romaji: "nin" },
    { kanji: "認", meaning: "recognize, acknowledge", romaji: "nin" },
    { kanji: "仁", meaning: "benevolence, humanity", romaji: "nin" },
    { kanji: "妊", meaning: "pregnancy", romaji: "nin" },
    { kanji: "忍", meaning: "stealth, ninja", romaji: "nin" },
    { kanji: "認", meaning: "approve", romaji: "nin" }
  ],
  "nun": [
    { kanji: "温", meaning: "warm", romaji: "nun" },
    { kanji: "主", meaning: "lord, master", romaji: "nun" },
    { kanji: "布", meaning: "cloth, spread", romaji: "nun" },
    { kanji: "奴", meaning: "servant", romaji: "nun" },
    { kanji: "怒", meaning: "anger", romaji: "nun" },
    { kanji: "努", meaning: "effort, strive", romaji: "nun" },
    { kanji: "沼", meaning: "marsh, swamp", romaji: "nun" },
    { kanji: "塗", meaning: "paint, plaster", romaji: "nun" }
  ],
  "nen": [
    { kanji: "年", meaning: "year, age", romaji: "nen" },
    { kanji: "念", meaning: "thought, sense", romaji: "nen" },
    { kanji: "燃", meaning: "burn, blaze", romaji: "nen" },
    { kanji: "然", meaning: "nature, so", romaji: "nen" },
    { kanji: "捻", meaning: "twist, wrench", romaji: "nen" },
    { kanji: "粘", meaning: "sticky, persevere", romaji: "nen" },
    { kanji: "年", meaning: "annual", romaji: "nen" },
    { kanji: "念", meaning: "wish, desire", romaji: "nen" }
  ],
  "non": [
    { kanji: "納", meaning: "accept, supply", romaji: "non" },
    { kanji: "濃", meaning: "thick, dense", romaji: "non" },
    { kanji: "悩", meaning: "worry, suffer", romaji: "non" },
    { kanji: "脳", meaning: "brain", romaji: "non" },
    { kanji: "農", meaning: "agriculture, farming", romaji: "non" },
    { kanji: "納", meaning: "deliver, store", romaji: "non" },
    { kanji: "悩", meaning: "distress", romaji: "non" },
    { kanji: "農", meaning: "cultivate", romaji: "non" }
  ],
  "han": [
    { kanji: "半", meaning: "half, middle", romaji: "han" },
    { kanji: "反", meaning: "anti, opposite", romaji: "han" },
    { kanji: "判", meaning: "judgment, seal", romaji: "han" },
    { kanji: "版", meaning: "printing block, edition", romaji: "han" },
    { kanji: "範", meaning: "example, model", romaji: "han" },
    { kanji: "犯", meaning: "crime, violate", romaji: "han" },
    { kanji: "飯", meaning: "meal, cooked rice", romaji: "han" },
    { kanji: "帆", meaning: "sail", romaji: "han" }
  ],
  "hin": [
    { kanji: "品", meaning: "goods, article", romaji: "hin" },
    { kanji: "貧", meaning: "poor, poverty", romaji: "hin" },
    { kanji: "賓", meaning: "guest, visitor", romaji: "hin" },
    { kanji: "頻", meaning: "frequent", romaji: "hin" },
    { kanji: "浜", meaning: "beach, shore", romaji: "hin" },
    { kanji: "瀕", meaning: "edge, brink", romaji: "hin" },
    { kanji: "品", meaning: "refinement", romaji: "hin" },
    { kanji: "賓", meaning: "honored guest", romaji: "hin" }
  ],
  "hun": [
    { kanji: "分", meaning: "part, minute", romaji: "hun" },
    { kanji: "噴", meaning: "spout, erupt", romaji: "hun" },
    { kanji: "粉", meaning: "powder, flour", romaji: "hun" },
    { kanji: "紛", meaning: "confusion", romaji: "hun" },
    { kanji: "雰", meaning: "atmosphere", romaji: "hun" },
    { kanji: "憤", meaning: "indignation", romaji: "hun" },
    { kanji: "奮", meaning: "stirred up, rouse", romaji: "hun" },
    { kanji: "分", meaning: "divide, understand", romaji: "hun" }
  ],
  "hen": [
    { kanji: "変", meaning: "change, unusual", romaji: "hen" },
    { kanji: "編", meaning: "compile, edit", romaji: "hen" },
    { kanji: "辺", meaning: "area, vicinity", romaji: "hen" },
    { kanji: "片", meaning: "piece, one-sided", romaji: "hen" },
    { kanji: "返", meaning: "return, reply", romaji: "hen" },
    { kanji: "偏", meaning: "partial, biased", romaji: "hen" },
    { kanji: "遍", meaning: "everywhere, times", romaji: "hen" },
    { kanji: "便", meaning: "convenience, mail", romaji: "hen" }
  ],
  "hon": [
    { kanji: "本", meaning: "book, origin", romaji: "hon" },
    { kanji: "翻", meaning: "turn over, translate", romaji: "hon" },
    { kanji: "奔", meaning: "run, rush", romaji: "hon" },
    { kanji: "盆", meaning: "tray, basin", romaji: "hon" },
    { kanji: "凡", meaning: "ordinary, common", romaji: "hon" },
    { kanji: "煩", meaning: "trouble, worry", romaji: "hon" },
    { kanji: "反", meaning: "anti", romaji: "hon" },
    { kanji: "本", meaning: "true, main", romaji: "hon" }
  ],
  "min": [
    { kanji: "民", meaning: "people, nation", romaji: "min" },
    { kanji: "眠", meaning: "sleep", romaji: "min" },
    { kanji: "皆", meaning: "all, everyone", romaji: "min" },
    { kanji: "閔", meaning: "pity, grieve", romaji: "min" },
    { kanji: "憫", meaning: "compassion", romaji: "min" },
    { kanji: "泯", meaning: "destroy, eliminate", romaji: "min" },
    { kanji: "民", meaning: "populace", romaji: "min" },
    { kanji: "眠", meaning: "rest", romaji: "min" }
  ],
  "mon": [
    { kanji: "門", meaning: "gate, entrance", romaji: "mon" },
    { kanji: "紋", meaning: "crest, pattern", romaji: "mon" },
    { kanji: "問", meaning: "question, ask", romaji: "mon" },
    { kanji: "文", meaning: "sentence, literature", romaji: "mon" },
    { kanji: "聞", meaning: "hear, listen", romaji: "mon" },
    { kanji: "悶", meaning: "worry, agony", romaji: "mon" },
    { kanji: "門", meaning: "portal", romaji: "mon" },
    { kanji: "紋", meaning: "design", romaji: "mon" }
  ],
  "mun": [
    { kanji: "夢", meaning: "dream", romaji: "mun" },
    { kanji: "無", meaning: "nothing, without", romaji: "mun" },
    { kanji: "霧", meaning: "fog, mist", romaji: "mun" },
    { kanji: "武", meaning: "military, warrior", romaji: "mun" },
    { kanji: "務", meaning: "duty, service", romaji: "mun" },
    { kanji: "娘", meaning: "daughter, girl", romaji: "mun" },
    { kanji: "夢", meaning: "vision", romaji: "mun" },
    { kanji: "無", meaning: "none", romaji: "mun" }
  ],
  "yan": [
    { kanji: "岩", meaning: "rock, crag", romaji: "yan" },
    { kanji: "厭", meaning: "dislike, get tired of", romaji: "yan" },
    { kanji: "焔", meaning: "flame", romaji: "yan" },
    { kanji: "艶", meaning: "glossy, charm", romaji: "yan" },
    { kanji: "岩", meaning: "boulder", romaji: "yan" },
    { kanji: "岩", meaning: "stone", romaji: "yan" },
    { kanji: "焔", meaning: "blaze", romaji: "yan" },
    { kanji: "艶", meaning: "beautiful", romaji: "yan" }
  ],
  "yun": [
    { kanji: "運", meaning: "fortune, transport", romaji: "yun" },
    { kanji: "雲", meaning: "cloud", romaji: "yun" },
    { kanji: "韻", meaning: "rhyme, elegance", romaji: "yun" },
    { kanji: "芸", meaning: "art, craft", romaji: "yun" },
    { kanji: "運", meaning: "luck", romaji: "yun" },
    { kanji: "雲", meaning: "clouds", romaji: "yun" },
    { kanji: "韻", meaning: "melody", romaji: "yun" },
    { kanji: "芸", meaning: "skill", romaji: "yun" }
  ],
  "yon": [
    { kanji: "四", meaning: "four", romaji: "yon" },
    { kanji: "世", meaning: "world, generation", romaji: "yon" },
    { kanji: "夜", meaning: "night, evening", romaji: "yon" },
    { kanji: "予", meaning: "beforehand, previous", romaji: "yon" },
    { kanji: "余", meaning: "surplus, remainder", romaji: "yon" },
    { kanji: "四", meaning: "fourth", romaji: "yon" },
    { kanji: "世", meaning: "era", romaji: "yon" },
    { kanji: "夜", meaning: "nighttime", romaji: "yon" }
  ],
  "rin": [
    { kanji: "林", meaning: "forest, woods", romaji: "rin" },
    { kanji: "倫", meaning: "ethics, morals", romaji: "rin" },
    { kanji: "輪", meaning: "ring, wheel", romaji: "rin" },
    { kanji: "隣", meaning: "neighbor, next to", romaji: "rin" },
    { kanji: "鈴", meaning: "bell", romaji: "rin" },
    { kanji: "凛", meaning: "dignified, cold", romaji: "rin" },
    { kanji: "凜", meaning: "severe, strict", romaji: "rin" },
    { kanji: "燐", meaning: "phosphorus", romaji: "rin" }
  ],
  "ron": [
    { kanji: "論", meaning: "theory, discussion", romaji: "ron" },
    { kanji: "倫", meaning: "ethics", romaji: "ron" },
    { kanji: "侖", meaning: "think, reason", romaji: "ron" },
    { kanji: "崙", meaning: "mountain range", romaji: "ron" },
    { kanji: "論", meaning: "argument", romaji: "ron" },
    { kanji: "論", meaning: "discourse", romaji: "ron" },
    { kanji: "倫", meaning: "moral principles", romaji: "ron" },
    { kanji: "論", meaning: "thesis", romaji: "ron" }
  ],
  "wan": [
    { kanji: "湾", meaning: "bay, gulf", romaji: "wan" },
    { kanji: "腕", meaning: "arm, ability", romaji: "wan" },
    { kanji: "碗", meaning: "bowl", romaji: "wan" },
    { kanji: "椀", meaning: "wooden bowl", romaji: "wan" },
    { kanji: "蜿", meaning: "winding", romaji: "wan" },
    { kanji: "湾", meaning: "inlet", romaji: "wan" },
    { kanji: "腕", meaning: "skill", romaji: "wan" },
    { kanji: "碗", meaning: "dish", romaji: "wan" }
  ],
  "won": [
    { kanji: "円", meaning: "circle, yen", romaji: "won" },
    { kanji: "怨", meaning: "resentment", romaji: "won" },
    { kanji: "遠", meaning: "distant, far", romaji: "won" },
    { kanji: "温", meaning: "warm, mild", romaji: "won" },
    { kanji: "穏", meaning: "calm, quiet", romaji: "won" },
    { kanji: "音", meaning: "sound", romaji: "won" },
    { kanji: "恩", meaning: "favor, grace", romaji: "won" },
    { kanji: "園", meaning: "garden", romaji: "won" }
  ],
  "gan": [
    { kanji: "岩", meaning: "rock, crag", romaji: "gan" },
    { kanji: "願", meaning: "wish, petition", romaji: "gan" },
    { kanji: "眼", meaning: "eye, vision", romaji: "gan" },
    { kanji: "顔", meaning: "face, expression", romaji: "gan" },
    { kanji: "元", meaning: "origin, beginning", romaji: "gan" },
    { kanji: "含", meaning: "include, contain", romaji: "gan" },
    { kanji: "雁", meaning: "wild goose", romaji: "gan" },
    { kanji: "岸", meaning: "shore, bank", romaji: "gan" }
  ],
  "gin": [
    { kanji: "銀", meaning: "silver", romaji: "gin" },
    { kanji: "吟", meaning: "recite, sing", romaji: "gin" },
    { kanji: "銀", meaning: "silver color", romaji: "gin" },
    { kanji: "吟", meaning: "chant, poetry", romaji: "gin" },
    { kanji: "議", meaning: "deliberation", romaji: "gin" },
    { kanji: "義", meaning: "righteousness", romaji: "gin" },
    { kanji: "銀", meaning: "argent", romaji: "gin" },
    { kanji: "吟", meaning: "recitation", romaji: "gin" }
  ],
  "gun": [
    { kanji: "軍", meaning: "army, military", romaji: "gun" },
    { kanji: "群", meaning: "group, flock", romaji: "gun" },
    { kanji: "郡", meaning: "county, district", romaji: "gun" },
    { kanji: "軍", meaning: "troops, forces", romaji: "gun" },
    { kanji: "群", meaning: "crowd, herd", romaji: "gun" },
    { kanji: "君", meaning: "lord, ruler", romaji: "gun" },
    { kanji: "訓", meaning: "instruction", romaji: "gun" },
    { kanji: "薫", meaning: "fragrant", romaji: "gun" }
  ],
  "gen": [
    { kanji: "元", meaning: "origin, beginning", romaji: "gen" },
    { kanji: "源", meaning: "source, origin", romaji: "gen" },
    { kanji: "現", meaning: "present, appear", romaji: "gen" },
    { kanji: "原", meaning: "meadow, original", romaji: "gen" },
    { kanji: "玄", meaning: "mysterious, black", romaji: "gen" },
    { kanji: "言", meaning: "word, speech", romaji: "gen" },
    { kanji: "限", meaning: "limit, boundary", romaji: "gen" },
    { kanji: "幻", meaning: "vision, phantom", romaji: "gen" }
  ],
  "gon": [
    { kanji: "言", meaning: "word, speech", romaji: "gon" },
    { kanji: "厳", meaning: "strict, stern", romaji: "gon" },
    { kanji: "権", meaning: "authority, right", romaji: "gon" },
    { kanji: "現", meaning: "present, actual", romaji: "gon" },
    { kanji: "元", meaning: "origin", romaji: "gon" },
    { kanji: "言", meaning: "say, tell", romaji: "gon" },
    { kanji: "厳", meaning: "rigorous", romaji: "gon" },
    { kanji: "権", meaning: "power", romaji: "gon" }
  ],
  "zan": [
    { kanji: "残", meaning: "remainder, leftover", romaji: "zan" },
    { kanji: "暫", meaning: "temporary, moment", romaji: "zan" },
    { kanji: "斬", meaning: "cut, behead", romaji: "zan" },
    { kanji: "惨", meaning: "miserable, cruel", romaji: "zan" },
    { kanji: "讃", meaning: "praise, admire", romaji: "zan" },
    { kanji: "残", meaning: "remain", romaji: "zan" },
    { kanji: "暫", meaning: "briefly", romaji: "zan" },
    { kanji: "讃", meaning: "glorify", romaji: "zan" }
  ],
  "zen": [
    { kanji: "禅", meaning: "Zen, meditation", romaji: "zen" },
    { kanji: "善", meaning: "good, virtue", romaji: "zen" },
    { kanji: "全", meaning: "all, complete", romaji: "zen" },
    { kanji: "前", meaning: "before, ahead", romaji: "zen" },
    { kanji: "然", meaning: "nature, so", romaji: "zen" },
    { kanji: "漸", meaning: "gradual", romaji: "zen" },
    { kanji: "繕", meaning: "repair, mend", romaji: "zen" },
    { kanji: "膳", meaning: "tray, meal", romaji: "zen" }
  ],
  "zon": [
    { kanji: "存", meaning: "exist, suppose", romaji: "zon" },
    { kanji: "尊", meaning: "respect, revere", romaji: "zon" },
    { kanji: "村", meaning: "village", romaji: "zon" },
    { kanji: "存", meaning: "preserve", romaji: "zon" },
    { kanji: "尊", meaning: "honor", romaji: "zon" },
    { kanji: "存", meaning: "maintain", romaji: "zon" },
    { kanji: "尊", meaning: "noble", romaji: "zon" },
    { kanji: "村", meaning: "hamlet", romaji: "zon" }
  ],
  "don": [
    { kanji: "鈍", meaning: "dull, slow", romaji: "don" },
    { kanji: "呑", meaning: "swallow, drink", romaji: "don" },
    { kanji: "曇", meaning: "cloudy, unclear", romaji: "don" },
    { kanji: "貪", meaning: "covet, greedy", romaji: "don" },
    { kanji: "鈍", meaning: "blunt", romaji: "don" },
    { kanji: "呑", meaning: "gulp", romaji: "don" },
    { kanji: "曇", meaning: "overcast", romaji: "don" },
    { kanji: "頓", meaning: "suddenly", romaji: "don" }
  ],
  "bin": [
    { kanji: "便", meaning: "convenience", romaji: "bin" },
    { kanji: "敏", meaning: "quick, clever", romaji: "bin" },
    { kanji: "瓶", meaning: "bottle, jar", romaji: "bin" },
    { kanji: "貧", meaning: "poor, poverty", romaji: "bin" },
    { kanji: "浜", meaning: "beach, seashore", romaji: "bin" },
    { kanji: "敏", meaning: "agile, alert", romaji: "bin" },
    { kanji: "便", meaning: "useful", romaji: "bin" },
    { kanji: "瓶", meaning: "vase", romaji: "bin" }
  ],
  "bon": [
    { kanji: "盆", meaning: "tray, festival", romaji: "bon" },
    { kanji: "凡", meaning: "ordinary, common", romaji: "bon" },
    { kanji: "梵", meaning: "Buddhist, Sanskrit", romaji: "bon" },
    { kanji: "煩", meaning: "anxiety, trouble", romaji: "bon" },
    { kanji: "盆", meaning: "Bon festival", romaji: "bon" },
    { kanji: "凡", meaning: "mediocre", romaji: "bon" },
    { kanji: "梵", meaning: "pure", romaji: "bon" },
    { kanji: "盆", meaning: "basin", romaji: "bon" }
  ],
  "pin": [
    { kanji: "品", meaning: "goods, refinement", romaji: "pin" },
    { kanji: "貧", meaning: "poor", romaji: "pin" },
    { kanji: "賓", meaning: "guest", romaji: "pin" },
    { kanji: "瀕", meaning: "on the verge", romaji: "pin" },
    { kanji: "品", meaning: "article, quality", romaji: "pin" },
    { kanji: "賓", meaning: "visitor", romaji: "pin" },
    { kanji: "品", meaning: "elegance", romaji: "pin" },
    { kanji: "頻", meaning: "frequent", romaji: "pin" }
  ],
  "pon": [
    { kanji: "本", meaning: "book, true", romaji: "pon" },
    { kanji: "盆", meaning: "tray, basin", romaji: "pon" },
    { kanji: "翻", meaning: "turn over", romaji: "pon" },
    { kanji: "反", meaning: "anti, reverse", romaji: "pon" },
    { kanji: "本", meaning: "origin, main", romaji: "pon" },
    { kanji: "凡", meaning: "ordinary", romaji: "pon" },
    { kanji: "盆", meaning: "plate", romaji: "pon" },
    { kanji: "本", meaning: "foundation", romaji: "pon" }
  ],

  // J-row syllables
  "ju": [
    { kanji: "寿", meaning: "longevity, long life", romaji: "ju" },
    { kanji: "樹", meaning: "tree, timber", romaji: "ju" },
    { kanji: "珠", meaning: "pearl, gem", romaji: "ju" },
    { kanji: "授", meaning: "impart, instruct", romaji: "ju" },
    { kanji: "柔", meaning: "gentle, soft", romaji: "ju" },
    { kanji: "受", meaning: "receive, accept", romaji: "ju" },
    { kanji: "儒", meaning: "Confucian, scholar", romaji: "ju" },
    { kanji: "需", meaning: "demand, request", romaji: "ju" }
  ],
  "jyu": [
    { kanji: "寿", meaning: "longevity, long life", romaji: "jyu" },
    { kanji: "樹", meaning: "tree, timber", romaji: "jyu" },
    { kanji: "珠", meaning: "pearl, gem", romaji: "jyu" },
    { kanji: "授", meaning: "impart, instruct", romaji: "jyu" },
    { kanji: "柔", meaning: "gentle, soft", romaji: "jyu" },
    { kanji: "受", meaning: "receive, accept", romaji: "jyu" },
    { kanji: "儒", meaning: "Confucian, scholar", romaji: "jyu" },
    { kanji: "需", meaning: "demand, request", romaji: "jyu" }
  ],
  "ja": [
    { kanji: "蛇", meaning: "snake, serpent", romaji: "ja" },
    { kanji: "邪", meaning: "wicked, evil", romaji: "ja" },
    { kanji: "者", meaning: "person, someone", romaji: "ja" },
    { kanji: "若", meaning: "young, if", romaji: "jaku" },
    { kanji: "寂", meaning: "loneliness, quiet", romaji: "jaku" },
    { kanji: "雀", meaning: "sparrow", romaji: "jaku" }
  ],
  "jo": [
    { kanji: "徐", meaning: "gradually, gently", romaji: "jo" },
    { kanji: "叙", meaning: "confer, relate", romaji: "jo" },
    { kanji: "序", meaning: "preface, order", romaji: "jo" },
    { kanji: "助", meaning: "help, assist", romaji: "jo" },
    { kanji: "女", meaning: "woman, female", romaji: "jo" },
    { kanji: "情", meaning: "emotion, feeling", romaji: "jo" },
    { kanji: "城", meaning: "castle, fortress", romaji: "jo" },
    { kanji: "浄", meaning: "pure, clean", romaji: "jo" }
  ],

  // K-row combinations
  "kya": [
    { kanji: "客", meaning: "guest, visitor", romaji: "kyaku" },
    { kanji: "脚", meaning: "leg, base", romaji: "kyaku" },
    { kanji: "却", meaning: "withdraw, reverse", romaji: "kyaku" },
    { kanji: "虐", meaning: "tyrannize, oppress", romaji: "gyaku" },
    { kanji: "逆", meaning: "reverse, opposite", romaji: "gyaku" },
    { kanji: "香", meaning: "fragrance, incense", romaji: "kya" }
  ],
  "kyu": [
    { kanji: "球", meaning: "sphere, ball", romaji: "kyu" },
    { kanji: "究", meaning: "research, study", romaji: "kyu" },
    { kanji: "急", meaning: "sudden, urgent", romaji: "kyu" },
    { kanji: "救", meaning: "rescue, save", romaji: "kyu" },
    { kanji: "宮", meaning: "shrine, palace", romaji: "kyu" },
    { kanji: "弓", meaning: "bow, archery", romaji: "kyu" },
    { kanji: "久", meaning: "long time, eternal", romaji: "kyu" },
    { kanji: "休", meaning: "rest, retire", romaji: "kyu" }
  ],
  "kyo": [
    { kanji: "京", meaning: "capital, metropolis", romaji: "kyo" },
    { kanji: "教", meaning: "teach, religion", romaji: "kyo" },
    { kanji: "強", meaning: "strong, powerful", romaji: "kyo" },
    { kanji: "協", meaning: "cooperation, harmony", romaji: "kyo" },
    { kanji: "響", meaning: "echo, sound", romaji: "kyo" },
    { kanji: "恭", meaning: "respectful, polite", romaji: "kyo" },
    { kanji: "杏", meaning: "apricot", romaji: "kyo" },
    { kanji: "香", meaning: "fragrance, incense", romaji: "kyo" }
  ],

  // S-row combinations
  "sha": [
    { kanji: "紗", meaning: "silk gauze, elegance", romaji: "sha" },
    { kanji: "沙", meaning: "sand, pure", romaji: "sha" },
    { kanji: "彩", meaning: "color, beautiful", romaji: "sai" },
    { kanji: "写", meaning: "copy, photograph", romaji: "sha" },
    { kanji: "社", meaning: "company, society", romaji: "sha" },
    { kanji: "謝", meaning: "gratitude, apology", romaji: "sha" },
    { kanji: "舎", meaning: "cottage, inn", romaji: "sha" },
    { kanji: "車", meaning: "car, vehicle", romaji: "sha" }
  ],
  "shu": [
    { kanji: "珠", meaning: "pearl, gem", romaji: "shu" },
    { kanji: "朱", meaning: "vermillion, cinnabar", romaji: "shu" },
    { kanji: "主", meaning: "master, main", romaji: "shu" },
    { kanji: "守", meaning: "protect, guard", romaji: "shu" },
    { kanji: "秀", meaning: "excel, outstanding", romaji: "shu" },
    { kanji: "修", meaning: "discipline, study", romaji: "shu" },
    { kanji: "舟", meaning: "boat, ship", romaji: "shu" },
    { kanji: "州", meaning: "state, province", romaji: "shu" }
  ],
  "sho": [
    { kanji: "翔", meaning: "soar, fly", romaji: "sho" },
    { kanji: "祥", meaning: "auspicious, happiness", romaji: "sho" },
    { kanji: "笑", meaning: "laugh, smile", romaji: "sho" },
    { kanji: "勝", meaning: "victory, win", romaji: "sho" },
    { kanji: "晶", meaning: "sparkle, crystal", romaji: "sho" },
    { kanji: "渉", meaning: "ford, cross", romaji: "sho" },
    { kanji: "章", meaning: "chapter, badge", romaji: "sho" },
    { kanji: "奨", meaning: "encourage, promote", romaji: "sho" },
    { kanji: "将", meaning: "general, commander", romaji: "sho" }
  ],

  // T-row combinations
  "cha": [
    { kanji: "茶", meaning: "tea", romaji: "cha" },
    { kanji: "着", meaning: "wear, arrive", romaji: "chaku" },
    { kanji: "査", meaning: "investigate, examine", romaji: "cha" },
    { kanji: "叉", meaning: "fork, crotch", romaji: "cha" },
    { kanji: "差", meaning: "distinction, difference", romaji: "cha" }
  ],
  "chu": [
    { kanji: "忠", meaning: "loyalty, faithfulness", romaji: "chu" },
    { kanji: "宙", meaning: "space, universe", romaji: "chu" },
    { kanji: "昼", meaning: "daytime, noon", romaji: "chu" },
    { kanji: "柱", meaning: "pillar, post", romaji: "chu" },
    { kanji: "中", meaning: "center, middle", romaji: "chu" },
    { kanji: "虫", meaning: "insect, bug", romaji: "chu" },
    { kanji: "注", meaning: "pour, concentrate", romaji: "chu" },
    { kanji: "駐", meaning: "stationed, resident", romaji: "chu" }
  ],
  "cho": [
    { kanji: "蝶", meaning: "butterfly", romaji: "cho" },
    { kanji: "朝", meaning: "morning, dynasty", romaji: "cho" },
    { kanji: "調", meaning: "tune, investigate", romaji: "cho" },
    { kanji: "超", meaning: "transcend, exceed", romaji: "cho" },
    { kanji: "兆", meaning: "trillion, omen", romaji: "cho" },
    { kanji: "長", meaning: "long, leader", romaji: "cho" },
    { kanji: "張", meaning: "stretch, expand", romaji: "cho" },
    { kanji: "庁", meaning: "government office", romaji: "cho" }
  ],

  // N-row combinations
  "nya": [
    { kanji: "若", meaning: "young, if", romaji: "nyaku" },
    { kanji: "弱", meaning: "weak, frail", romaji: "nyaku" },
    { kanji: "雀", meaning: "sparrow", romaji: "nyaku" },
    { kanji: "惹", meaning: "attract, captivate", romaji: "nyaku" },
    { kanji: "寂", meaning: "loneliness, quiet", romaji: "nyaku" }
  ],
  "nyu": [
    { kanji: "乳", meaning: "milk, breasts", romaji: "nyu" },
    { kanji: "入", meaning: "enter, insert", romaji: "nyu" },
    { kanji: "柔", meaning: "gentle, soft", romaji: "nyu" },
    { kanji: "褥", meaning: "cushion, bedding", romaji: "nyu" }
  ],
  "nyo": [
    { kanji: "女", meaning: "woman, female", romaji: "nyo" },
    { kanji: "如", meaning: "like, as if", romaji: "nyo" },
    { kanji: "尿", meaning: "urine", romaji: "nyo" },
    { kanji: "溽", meaning: "humid, muggy", romaji: "nyo" }
  ],

  // H-row combinations
  "hya": [
    { kanji: "百", meaning: "hundred", romaji: "hyaku" },
    { kanji: "白", meaning: "white, pure", romaji: "haku" },
    { kanji: "舶", meaning: "ship, liner", romaji: "haku" },
    { kanji: "拍", meaning: "beat, clap", romaji: "haku" },
    { kanji: "博", meaning: "extensive, doctor", romaji: "haku" }
  ],
  "hyu": [
    { kanji: "標", meaning: "signpost, mark", romaji: "hyu" },
    { kanji: "飄", meaning: "flutter, float", romaji: "hyu" },
    { kanji: "漂", meaning: "drift, float", romaji: "hyu" },
    { kanji: "評", meaning: "evaluate, criticism", romaji: "hyu" },
    { kanji: "票", meaning: "ballot, vote", romaji: "hyu" }
  ],
  "hyo": [
    { kanji: "豹", meaning: "leopard, panther", romaji: "hyo" },
    { kanji: "評", meaning: "evaluate, criticism", romaji: "hyo" },
    { kanji: "表", meaning: "surface, express", romaji: "hyo" },
    { kanji: "票", meaning: "ballot, vote", romaji: "hyo" },
    { kanji: "氷", meaning: "ice", romaji: "hyo" },
    { kanji: "俵", meaning: "bag, bale", romaji: "hyo" },
    { kanji: "標", meaning: "signpost, mark", romaji: "hyo" }
  ],

  // M-row combinations
  "mya": [
    { kanji: "宮", meaning: "shrine, palace", romaji: "miya" },
    { kanji: "妙", meaning: "mysterious, excellent", romaji: "myo" },
    { kanji: "脈", meaning: "vein, pulse", romaji: "myaku" },
    { kanji: "明", meaning: "bright, light", romaji: "mya" },
    { kanji: "冥", meaning: "dark, obscure", romaji: "mya" }
  ],
  "myu": [
    { kanji: "謬", meaning: "error, false", romaji: "myu" },
    { kanji: "妙", meaning: "mysterious, excellent", romaji: "myu" },
    { kanji: "民", meaning: "people, nation", romaji: "myu" },
    { kanji: "眠", meaning: "sleep, slumber", romaji: "myu" },
    { kanji: "廟", meaning: "mausoleum, shrine", romaji: "myu" }
  ],
  "myo": [
    { kanji: "妙", meaning: "mysterious, excellent", romaji: "myo" },
    { kanji: "明", meaning: "bright, light", romaji: "myo" },
    { kanji: "名", meaning: "name, famous", romaji: "myo" },
    { kanji: "命", meaning: "life, fate", romaji: "myo" },
    { kanji: "苗", meaning: "seedling, sapling", romaji: "myo" },
    { kanji: "冥", meaning: "dark, obscure", romaji: "myo" },
    { kanji: "茗", meaning: "tea", romaji: "myo" },
    { kanji: "廟", meaning: "mausoleum, shrine", romaji: "myo" }
  ],

  // R-row combinations
  "rya": [
    { kanji: "良", meaning: "good, excellent", romaji: "rya" },
    { kanji: "涼", meaning: "cool, refreshing", romaji: "rya" },
    { kanji: "量", meaning: "quantity, measure", romaji: "rya" },
    { kanji: "寮", meaning: "dormitory, hostel", romaji: "rya" },
    { kanji: "猟", meaning: "hunt, game", romaji: "rya" }
  ],
  "ryu": [
    { kanji: "龍", meaning: "dragon", romaji: "ryu" },
    { kanji: "流", meaning: "flow, current", romaji: "ryu" },
    { kanji: "琉", meaning: "precious stone", romaji: "ryu" },
    { kanji: "隆", meaning: "prosperity, noble", romaji: "ryu" },
    { kanji: "竜", meaning: "dragon", romaji: "ryu" },
    { kanji: "柳", meaning: "willow", romaji: "ryu" },
    { kanji: "劉", meaning: "kill, destroy", romaji: "ryu" },
    { kanji: "溜", meaning: "collect, gather", romaji: "ryu" }
  ],
  "ryo": [
    { kanji: "涼", meaning: "cool, refreshing", romaji: "ryo" },
    { kanji: "良", meaning: "good, excellent", romaji: "ryo" },
    { kanji: "諒", meaning: "fact, reality", romaji: "ryo" },
    { kanji: "遼", meaning: "distant, remote", romaji: "ryo" },
    { kanji: "陵", meaning: "mausoleum, hill", romaji: "ryo" },
    { kanji: "梁", meaning: "beam, bridge", romaji: "ryo" },
    { kanji: "瑠", meaning: "lapis lazuli", romaji: "ryo" },
    { kanji: "凌", meaning: "endure, surpass", romaji: "ryo" }
  ],

  // G-row combinations
  "gya": [
    { kanji: "雅", meaning: "elegant, graceful", romaji: "ga" },
    { kanji: "牙", meaning: "tusk, fang", romaji: "ga" },
    { kanji: "芽", meaning: "sprout, bud", romaji: "ga" },
    { kanji: "賀", meaning: "congratulations, joy", romaji: "ga" },
    { kanji: "雁", meaning: "wild goose", romaji: "gan" }
  ],
  "gyu": [
    { kanji: "牛", meaning: "cow, ox", romaji: "gyu" },
    { kanji: "球", meaning: "sphere, ball", romaji: "gyu" },
    { kanji: "宮", meaning: "shrine, palace", romaji: "gyu" },
    { kanji: "弓", meaning: "bow, archery", romaji: "gyu" },
    { kanji: "急", meaning: "sudden, urgent", romaji: "gyu" }
  ],
  "gyo": [
    { kanji: "暁", meaning: "dawn, daybreak", romaji: "gyo" },
    { kanji: "凝", meaning: "congeal, concentrate", romaji: "gyo" },
    { kanji: "魚", meaning: "fish", romaji: "gyo" },
    { kanji: "漁", meaning: "fishing, catch fish", romaji: "gyo" },
    { kanji: "行", meaning: "go, conduct", romaji: "gyo" },
    { kanji: "業", meaning: "business, work", romaji: "gyo" },
    { kanji: "仰", meaning: "look up, respect", romaji: "gyo" }
  ],

  // B-row combinations
  "bya": [
    { kanji: "病", meaning: "illness, disease", romaji: "byo" },
    { kanji: "秒", meaning: "second, moment", romaji: "byo" },
    { kanji: "描", meaning: "sketch, draw", romaji: "byo" },
    { kanji: "猫", meaning: "cat", romaji: "byo" },
    { kanji: "苗", meaning: "seedling, sapling", romaji: "byo" }
  ],
  "byu": [
    { kanji: "謬", meaning: "error, false", romaji: "byu" },
    { kanji: "美", meaning: "beauty, beautiful", romaji: "bi" },
    { kanji: "百", meaning: "hundred", romaji: "hyaku" },
    { kanji: "微", meaning: "delicate, minute", romaji: "bi" },
    { kanji: "備", meaning: "equip, prepare", romaji: "bi" }
  ],
  "byo": [
    { kanji: "秒", meaning: "second, moment", romaji: "byo" },
    { kanji: "描", meaning: "sketch, draw", romaji: "byo" },
    { kanji: "廟", meaning: "mausoleum, shrine", romaji: "byo" },
    { kanji: "猫", meaning: "cat", romaji: "byo" },
    { kanji: "苗", meaning: "seedling, sapling", romaji: "byo" }
  ],

  // P-row combinations
  "pya": [
    { kanji: "百", meaning: "hundred", romaji: "hyaku" },
    { kanji: "白", meaning: "white, pure", romaji: "haku" },
    { kanji: "拍", meaning: "beat, clap", romaji: "haku" },
    { kanji: "迫", meaning: "urge, press", romaji: "haku" },
    { kanji: "泊", meaning: "stay, anchor", romaji: "haku" }
  ],
  "pyu": [
    { kanji: "票", meaning: "ballot, vote", romaji: "hyo" },
    { kanji: "評", meaning: "evaluate, criticism", romaji: "hyo" },
    { kanji: "表", meaning: "surface, express", romaji: "hyo" },
    { kanji: "標", meaning: "signpost, mark", romaji: "hyo" },
    { kanji: "氷", meaning: "ice", romaji: "hyo" }
  ],
  "pyo": [
    { kanji: "豹", meaning: "leopard, panther", romaji: "pyo" },
    { kanji: "評", meaning: "evaluate, criticism", romaji: "pyo" },
    { kanji: "表", meaning: "surface, express", romaji: "pyo" },
    { kanji: "票", meaning: "ballot, vote", romaji: "pyo" },
    { kanji: "標", meaning: "signpost, mark", romaji: "pyo" }
  ],

  // Additional Western name syllables
  "che": [
    { kanji: "千", meaning: "thousand", romaji: "che" },
    { kanji: "知", meaning: "know, wisdom", romaji: "che" },
    { kanji: "智", meaning: "wisdom, intellect", romaji: "che" },
    { kanji: "地", meaning: "earth, ground", romaji: "che" },
    { kanji: "血", meaning: "blood, lineage", romaji: "che" },
    { kanji: "誓", meaning: "pledge, oath", romaji: "che" }
  ],
  "she": [
    { kanji: "朱", meaning: "vermillion, red", romaji: "she" },
    { kanji: "珠", meaning: "pearl, gem", romaji: "she" },
    { kanji: "主", meaning: "master, main", romaji: "she" },
    { kanji: "守", meaning: "protect, defend", romaji: "she" },
    { kanji: "秀", meaning: "excellence", romaji: "she" },
    { kanji: "修", meaning: "discipline, study", romaji: "she" }
  ],
  "je": [
    { kanji: "慈", meaning: "mercy, compassion", romaji: "je" },
    { kanji: "自", meaning: "self, oneself", romaji: "je" },
    { kanji: "時", meaning: "time, hour", romaji: "je" },
    { kanji: "次", meaning: "next, order", romaji: "je" },
    { kanji: "治", meaning: "govern, heal", romaji: "je" },
    { kanji: "示", meaning: "show, indicate", romaji: "je" }
  ],

  // F-row (for foreign words)
  "fa": [
    { kanji: "華", meaning: "flower, splendor", romaji: "fa" },
    { kanji: "花", meaning: "flower, blossom", romaji: "fa" },
    { kanji: "羽", meaning: "feather, wing", romaji: "fa" },
    { kanji: "波", meaning: "wave", romaji: "fa" },
    { kanji: "葉", meaning: "leaf", romaji: "fa" }
  ],
  "fi": [
    { kanji: "妃", meaning: "queen, princess", romaji: "fi" },
    { kanji: "緋", meaning: "scarlet, red", romaji: "fi" },
    { kanji: "飛", meaning: "fly, soar", romaji: "fi" },
    { kanji: "陽", meaning: "sunshine, positive", romaji: "fi" },
    { kanji: "日", meaning: "sun, day", romaji: "fi" }
  ],
  "fe": [
    { kanji: "笛", meaning: "flute, whistle", romaji: "fe" },
    { kanji: "部", meaning: "section, department", romaji: "fe" },
    { kanji: "経", meaning: "pass through", romaji: "fe" },
    { kanji: "兵", meaning: "soldier, army", romaji: "fe" },
    { kanji: "平", meaning: "peace, flat", romaji: "fe" }
  ],
  "fo": [
    { kanji: "鳳", meaning: "phoenix", romaji: "fo" },
    { kanji: "方", meaning: "direction, way", romaji: "fo" },
    { kanji: "宝", meaning: "treasure", romaji: "fo" },
    { kanji: "豊", meaning: "abundant, rich", romaji: "fo" },
    { kanji: "峰", meaning: "peak, summit", romaji: "fo" }
  ],

  // V-row (for foreign words)
  "va": [
    { kanji: "和", meaning: "harmony, peace", romaji: "va" },
    { kanji: "話", meaning: "speak, talk", romaji: "va" },
    { kanji: "輪", meaning: "wheel, circle", romaji: "va" },
    { kanji: "羽", meaning: "feather, wing", romaji: "va" },
    { kanji: "波", meaning: "wave", romaji: "va" }
  ],
  "vi": [
    { kanji: "美", meaning: "beauty", romaji: "vi" },
    { kanji: "微", meaning: "delicate, minute", romaji: "vi" },
    { kanji: "未", meaning: "not yet, future", romaji: "vi" },
    { kanji: "魅", meaning: "charm, fascinate", romaji: "vi" },
    { kanji: "実", meaning: "truth, reality", romaji: "vi" }
  ],
  "vu": [
    { kanji: "舞", meaning: "dance", romaji: "vu" },
    { kanji: "武", meaning: "military, warrior", romaji: "vu" },
    { kanji: "夢", meaning: "dream", romaji: "vu" },
    { kanji: "霧", meaning: "mist, fog", romaji: "vu" },
    { kanji: "無", meaning: "nothing, without", romaji: "vu" }
  ],
  "ve": [
    { kanji: "辺", meaning: "area, vicinity", romaji: "ve" },
    { kanji: "紅", meaning: "crimson, red", romaji: "ve" },
    { kanji: "米", meaning: "rice, America", romaji: "ve" },
    { kanji: "平", meaning: "peace, flat", romaji: "ve" },
    { kanji: "兵", meaning: "soldier, army", romaji: "ve" }
  ],
  "vo": [
    { kanji: "帆", meaning: "sail", romaji: "vo" },
    { kanji: "保", meaning: "protect, maintain", romaji: "vo" },
    { kanji: "穂", meaning: "ear (of grain)", romaji: "vo" },
    { kanji: "歩", meaning: "walk, step", romaji: "vo" },
    { kanji: "望", meaning: "hope, desire", romaji: "vo" }
  ],

  // Additional W-row
  "wi": [
    { kanji: "威", meaning: "dignity, majesty", romaji: "wi" },
    { kanji: "唯", meaning: "unique, only", romaji: "wi" },
    { kanji: "位", meaning: "rank, position", romaji: "wi" },
    { kanji: "偉", meaning: "great, admirable", romaji: "wi" },
    { kanji: "為", meaning: "do, act", romaji: "wi" }
  ],
  "we": [
    { kanji: "恵", meaning: "blessing, favor", romaji: "we" },
    { kanji: "慧", meaning: "wise, intelligent", romaji: "we" },
    { kanji: "衛", meaning: "defense, guard", romaji: "we" },
    { kanji: "英", meaning: "England, excel", romaji: "we" },
    { kanji: "映", meaning: "reflect, project", romaji: "we" }
  ],

  // T/D special combinations
  "ti": [
    { kanji: "千", meaning: "thousand", romaji: "ti" },
    { kanji: "地", meaning: "earth, ground", romaji: "ti" },
    { kanji: "智", meaning: "wisdom, intellect", romaji: "ti" },
    { kanji: "知", meaning: "know, wisdom", romaji: "ti" },
    { kanji: "帝", meaning: "emperor", romaji: "ti" }
  ],
  "tu": [
    { kanji: "通", meaning: "pass through", romaji: "tu" },
    { kanji: "津", meaning: "harbor, port", romaji: "tu" },
    { kanji: "都", meaning: "capital, metropolis", romaji: "tu" },
    { kanji: "鶴", meaning: "crane (bird)", romaji: "tu" },
    { kanji: "月", meaning: "moon, month", romaji: "tu" }
  ],
  "di": [
    { kanji: "地", meaning: "earth, ground", romaji: "di" },
    { kanji: "弟", meaning: "younger brother", romaji: "di" },
    { kanji: "泥", meaning: "mud, mire", romaji: "di" },
    { kanji: "提", meaning: "propose, carry", romaji: "di" },
    { kanji: "題", meaning: "topic, subject", romaji: "di" }
  ],
  "du": [
    { kanji: "図", meaning: "diagram, map", romaji: "du" },
    { kanji: "豆", meaning: "bean, pea", romaji: "du" },
    { kanji: "頭", meaning: "head, top", romaji: "du" },
    { kanji: "動", meaning: "move, motion", romaji: "du" },
    { kanji: "道", meaning: "path, way", romaji: "du" }
  ]
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = kanjiDatabase;
}
