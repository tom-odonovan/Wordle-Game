let possibleWords = ["aback", "abase", "abate", "abbey", "abbot", "abhor", "abide", "abled", "abode", "abort", "about", "above", "abuse", "abyss", "acorn", "acrid", "actor", "acute", "adage", "adapt", "adept", "admin", "admit", "adobe", "adopt", "adore", "adorn", "adult", "affix", "afire", "afoot", "afoul", "after", "again", "agape", "agate", "agent", "agile", "aging", "aglow", "agony", "agora", "agree", "ahead", "aider", "aisle", "alarm", "album", "alert", "algae", "alibi", "alien", "align", "alike", "alive", "allay", "alley", "allot", "allow", "alloy", "aloft", "alone", "along", "aloof", "aloud", "alpha", "altar", "alter", "amass", "amaze", "amber", "amble", "amend", "amiss", "amity", "among", "ample", "amply", "amuse", "angel", "anger", "angle", "angry", "angst", "anime", "ankle", "annex", "annoy", "annul", "anode", "antic", "anvil", "aorta", "apart", "aphid", "aping", "apnea", "apple", "apply", "apron", "aptly", "arbor", "ardor", "arena", "argue", "arise", "armor", "aroma", "arose", "array", "arrow", "arson", "artsy", "ascot", "ashen", "aside", "askew", "assay", "asset", "atoll", "atone", "attic", "audio", "audit", "augur", "aunty", "avail", "avert", "avian", "avoid", "await", "awake", "award", "aware", "awash", "awful", "awoke", "axial", "axiom", "axion", "azure", "bacon", "badge", "badly", "bagel", "baggy", "baker", "baler", "balmy", "banal", "banjo", "barge", "baron", "basal", "basic", "basil", "basin", "basis", "baste", "batch", "bathe", "baton", "batty", "bawdy", "bayou", "beach", "beady", "beard", "beast", "beech", "beefy", "befit", "began", "begat", "beget", "begin", "begun", "being", "belch", "belie", "belle", "belly", "below", "bench", "beret", "berry", "berth", "beset", "betel", "bevel", "bezel", "bible", "bicep", "biddy", "bigot", "bilge", "billy", "binge", "bingo", "biome", "birch", "birth", "bison", "bitty", "black", "blade", "blame", "bland", "blank", "blare", "blast", "blaze", "bleak", "bleat", "bleed", "bleep", "blend", "bless", "blimp", "blind", "blink", "bliss", "blitz", "bloat", "block", "bloke", "blond", "blood", "bloom", "blown", "bluer", "bluff", "blunt", "blurb", "blurt", "blush", "board", "boast", "bobby", "boney", "bongo", "bonus", "booby", "boost", "booth", "booty", "booze", "boozy", "borax", "borne", "bosom", "bossy", "botch", "bough", "boule", "bound", "bowel", "boxer", "brace", "braid", "brain", "brake", "brand", "brash", "brass", "brave", "bravo", "brawl", "brawn", "bread", "break", "breed", "briar", "bribe", "brick", "bride", "brief", "brine", "bring", "brink", "briny", "brisk", "broad", "broil", "broke", "brood", "brook", "broom", "broth", "brown", "brunt", "brush", "brute", "buddy", "budge", "buggy", "bugle", "build", "built", "bulge", "bulky", "bully", "bunch", "bunny", "burly", "burnt", "burst", "bused", "bushy", "butch", "butte", "buxom", "buyer", "bylaw", "cabal", "cabby", "cabin", "cable", "cacao", "cache", "cacti", "caddy", "cadet", "cagey", "cairn", "camel", "cameo", "canal", "candy", "canny", "canoe", "canon", "caper", "caput", "carat", "cargo", "carol", "carry", "carve", "caste", "catch", "cater", "catty", "caulk", "cause", "cavil", "cease", "cedar", "cello", "chafe", "chaff", "chain", "chair", "chalk", "champ", "chant", "chaos", "chard", "charm", "chart", "chase", "chasm", "cheap", "cheat", "check", "cheek", "cheer", "chess", "chest", "chick", "chide", "chief", "child", "chili", "chill", "chime", "china", "chirp", "chock", "choir", "choke", "chord", "chore", "chose", "chuck", "chump", "chunk", "churn", "chute", "cider", "cigar", "cinch", "circa", "civic", "civil", "clack", "claim", "clamp", "clang", "clank", "clash", "clasp", "class", "clean", "clear", "cleat", "cleft", "clerk", "click", "cliff", "climb", "cling", "clink", "cloak", "clock", "clone", "close", "cloth", "cloud", "clout", "clove", "clown", "cluck", "clued", "clump", "clung", "coach", "coast", "cobra", "cocoa", "colon", "color", "comet", "comfy", "comic", "comma", "conch", "condo", "conic", "copse", "coral", "corer", "corny", "couch", "cough", "could", "count", "coupe", "court", "coven", "cover", "covet", "covey", "cower", "coyly", "crack", "craft", "cramp", "crane", "crank", "crash", "crass", "crate", "crave", "crawl", "craze", "crazy", "creak", "cream", "credo", "creed", "creek", "creep", "creme", "crepe", "crept", "cress", "crest", "crick", "cried", "crier", "crime", "crimp", "crisp", "croak", "crock", "crone", "crony", "crook", "cross", "croup", "crowd", "crown", "crude", "cruel", "crumb", "crump", "crush", "crust", "crypt", "cubic", "cumin", "curio", "curly", "curry", "curse", "curve", "curvy", "cutie", "cyber", "cycle", "cynic", "daddy", "daily", "dairy", "daisy", "dally", "dance", "dandy", "datum", "daunt", "dealt", "death", "debar", "debit", "debug", "debut", "decal", "decay", "decor", "decoy", "decry", "defer", "deign", "deity", "delay", "delta", "delve", "demon", "demur", "denim", "dense", "depot", "depth", "derby", "deter", "detox", "deuce", "devil", "diary", "dicey", "digit", "dilly", "dimly", "diner", "dingo", "dingy", "diode", "dirge", "dirty", "disco", "ditch", "ditto", "ditty", "diver", "dizzy", "dodge", "dodgy", "dogma", "doing", "dolly", "donor", "donut", "dopey", "doubt", "dough", "dowdy", "dowel", "downy", "dowry", "dozen", "draft", "drain", "drake", "drama", "drank", "drape", "drawl", "drawn", "dread", "dream", "dress", "dried", "drier", "drift", "drill", "drink", "drive", "droit", "droll", "drone", "drool", "droop", "dross", "drove", "drown", "druid", "drunk", "dryer", "dryly", "duchy", "dully", "dummy", "dumpy", "dunce", "dusky", "dusty", "dutch", "duvet", "dwarf", "dwell", "dwelt", "dying", "eager", "eagle", "early", "earth", "easel", "eaten", "eater", "ebony", "eclat", "edict", "edify", "eerie", "egret", "eight", "eject", "eking", "elate", "elbow", "elder", "elect", "elegy", "elfin", "elide", "elite", "elope", "elude", "email", "embed", "ember", "emcee", "empty", "enact", "endow", "enema", "enemy", "enjoy", "ennui", "ensue", "enter", "entry", "envoy", "epoch", "epoxy", "equal", "equip", "erase", "erect", "erode", "error", "erupt", "essay", "ester", "ether", "ethic", "ethos", "etude", "evade", "event", "every", "evict", "evoke", "exact", "exalt", "excel", "exert", "exile", "exist", "expel", "extol", "extra", "exult", "eying", "fable", "facet", "faint", "fairy", "faith", "false", "fancy", "fanny", "farce", "fatal", "fatty", "fault", "fauna", "favor", "feast", "fecal", "feign", "fella", "felon", "femme", "femur", "fence", "feral", "ferry", "fetal", "fetch", "fetid", "fetus", "fever", "fewer", "fiber", "fibre", "ficus", "field", "fiend", "fiery", "fifth", "fifty", "fight", "filer", "filet", "filly", "filmy", "filth", "final", "finch", "finer", "first", "fishy", "fixer", "fizzy", "fjord", "flack", "flail", "flair", "flake", "flaky", "flame", "flank", "flare", "flash", "flask", "fleck", "fleet", "flesh", "flick", "flier", "fling", "flint", "flirt", "float", "flock", "flood", "floor", "flora", "floss", "flour", "flout", "flown", "fluff", "fluid", "fluke", "flume", "flung", "flunk", "flush", "flute", "flyer", "foamy", "focal", "focus", "foggy", "foist", "folio", "folly", "foray", "force", "forge", "forgo", "forte", "forth", "forty", "forum", "found", "foyer", "frail", "frame", "frank", "fraud", "freak", "freed", "freer", "fresh", "friar", "fried", "frill", "frisk", "fritz", "frock", "frond", "front", "frost", "froth", "frown", "froze", "fruit", "fudge", "fugue", "fully", "fungi", "funky", "funny", "furor", "furry", "fussy", "fuzzy", "gaffe", "gaily", "gamer", "gamma", "gamut", "gassy", "gaudy", "gauge", "gaunt", "gauze", "gavel", "gawky", "gayer", "gayly", "gazer", "gecko", "geeky", "geese", "genie", "genre", "ghost", "ghoul", "giant", "giddy", "gipsy", "girly", "girth", "given", "giver", "glade", "gland", "glare", "glass", "glaze", "gleam", "glean", "glide", "glint", "gloat", "globe", "gloom", "glory", "gloss", "glove", "glyph", "gnash", "gnome", "godly", "going", "golem", "golly", "gonad", "goner", "goody", "gooey", "goofy", "goose", "gorge", "gouge", "gourd", "grace", "grade", "graft", "grail", "grain", "grand", "grant", "grape", "graph", "grasp", "grass", "grate", "grave", "gravy", "graze", "great", "greed", "green", "greet", "grief", "grill", "grime", "grimy", "grind", "gripe", "groan", "groin", "groom", "grope", "gross", "group", "grout", "grove", "growl", "grown", "gruel", "gruff", "grunt", "guard", "guava", "guess", "guest", "guide", "guild", "guile", "guilt", "guise", "gulch", "gully", "gumbo", "gummy", "guppy", "gusto", "gusty", "gypsy", "habit", "hairy", "halve", "handy", "happy", "hardy", "harem", "harpy", "harry", "harsh", "haste", "hasty", "hatch", "hater", "haunt", "haute", "haven", "havoc", "hazel", "heady", "heard", "heart", "heath", "heave", "heavy", "hedge", "hefty", "heist", "helix", "hello", "hence", "heron", "hilly", "hinge", "hippo", "hippy", "hitch", "hoard", "hobby", "hoist", "holly", "homer", "honey", "honor", "horde", "horny", "horse", "hotel", "hotly", "hound", "house", "hovel", "hover", "howdy", "human", "humid", "humor", "humph", "humus", "hunch", "hunky", "hurry", "husky", "hussy", "hutch", "hydro", "hyena", "hymen", "hyper", "icily", "icing", "ideal", "idiom", "idiot", "idler", "idyll", "igloo", "iliac", "image", "imbue", "impel", "imply", "inane", "inbox", "incur", "index", "inept", "inert", "infer", "ingot", "inlay", "inlet", "inner", "input", "inter", "intro", "ionic", "irate", "irony", "islet", "issue", "itchy", "ivory", "jaunt", "jazzy", "jelly", "jerky", "jetty", "jewel", "jiffy", "joint", "joist", "joker", "jolly", "joust", "judge", "juice", "juicy", "jumbo", "jumpy", "junta", "junto", "juror", "kappa", "karma", "kayak", "kebab", "khaki", "kinky", "kiosk", "kitty", "knack", "knave", "knead", "kneed", "kneel", "knelt", "knife", "knock", "knoll", "known", "koala", "krill", "label", "labor", "laden", "ladle", "lager", "lance", "lanky", "lapel", "lapse", "large", "larva", "lasso", "latch", "later", "lathe", "latte", "laugh", "layer", "leach", "leafy", "leaky", "leant", "leapt", "learn", "lease", "leash", "least", "leave", "ledge", "leech", "leery", "lefty", "legal", "leggy", "lemon", "lemur", "leper", "level", "lever", "libel", "liege", "light", "liken", "lilac", "limbo", "limit", "linen", "liner", "lingo", "lipid", "lithe", "liver", "livid", "llama", "loamy", "loath", "lobby", "local", "locus", "lodge", "lofty", "logic", "login", "loopy", "loose", "lorry", "loser", "louse", "lousy", "lover", "lower", "lowly", "loyal", "lucid", "lucky", "lumen", "lumpy", "lunar", "lunch", "lunge", "lupus", "lurch", "lurid", "lusty", "lying", "lymph", "lynch", "lyric", "macaw", "macho", "macro", "madam", "madly", "mafia", "magic", "magma", "maize", "major", "maker", "mambo", "mamma", "mammy", "manga", "mange", "mango", "mangy", "mania", "manic", "manly", "manor", "maple", "march", "marry", "marsh", "mason", "masse", "match", "matey", "mauve", "maxim", "maybe", "mayor", "mealy", "meant", "meaty", "mecca", "medal", "media", "medic", "melee", "melon", "mercy", "merge", "merit", "merry", "metal", "meter", "metro", "micro", "midge", "midst", "might", "milky", "mimic", "mince", "miner", "minim", "minor", "minty", "minus", "mirth", "miser", "missy", "mocha", "modal", "model", "modem", "mogul", "moist", "molar", "moldy", "money", "month", "moody", "moose", "moral", "moron", "morph", "mossy", "motel", "motif", "motor", "motto", "moult", "mound", "mount", "mourn", "mouse", "mouth", "mover", "movie", "mower", "mucky", "mucus", "muddy", "mulch", "mummy", "munch", "mural", "murky", "mushy", "music", "musky", "musty", "myrrh", "nadir", "naive", "nanny", "nasal", "nasty", "natal", "naval", "navel", "needy", "neigh", "nerdy", "nerve", "never", "newer", "newly", "nicer", "niche", "niece", "night", "ninja", "ninny", "ninth", "noble", "nobly", "noise", "noisy", "nomad", "noose", "north", "nosey", "notch", "novel", "nudge", "nurse", "nutty", "nylon", "nymph", "oaken", "obese", "occur", "ocean", "octal", "octet", "odder", "oddly", "offal", "offer", "often", "olden", "older", "olive", "ombre", "omega", "onion", "onset", "opera", "opine", "opium", "optic", "orbit", "order", "organ", "other", "otter", "ought", "ounce", "outdo", "outer", "outgo", "ovary", "ovate", "overt", "ovine", "ovoid", "owing", "owner", "oxide", "ozone", "paddy", "pagan", "paint", "paler", "palsy", "panel", "panic", "pansy", "papal", "paper", "parer", "parka", "parry", "parse", "party", "pasta", "paste", "pasty", "patch", "patio", "patsy", "patty", "pause", "payee", "payer", "peace", "peach", "pearl", "pecan", "pedal", "penal", "pence", "penne", "penny", "perch", "peril", "perky", "pesky", "pesto", "petal", "petty", "phase", "phone", "phony", "photo", "piano", "picky", "piece", "piety", "piggy", "pilot", "pinch", "piney", "pinky", "pinto", "piper", "pique", "pitch", "pithy", "pivot", "pixel", "pixie", "pizza", "place", "plaid", "plain", "plait", "plane", "plank", "plant", "plate", "plaza", "plead", "pleat", "plied", "plier", "pluck", "plumb", "plume", "plump", "plunk", "plush", "poesy", "point", "poise", "poker", "polar", "polka", "polyp", "pooch", "poppy", "porch", "poser", "posit", "posse", "pouch", "pound", "pouty", "power", "prank", "prawn", "preen", "press", "price", "prick", "pride", "pried", "prime", "primo", "print", "prior", "prism", "privy", "prize", "probe", "prone", "prong", "proof", "prose", "proud", "prove", "prowl", "proxy", "prude", "prune", "psalm", "pubic", "pudgy", "puffy", "pulpy", "pulse", "punch", "pupal", "pupil", "puppy", "puree", "purer", "purge", "purse", "pushy", "putty", "pygmy", "quack", "quail", "quake", "qualm", "quark", "quart", "quash", "quasi", "queen", "queer", "quell", "query", "quest", "queue", "quick", "quiet", "quill", "quilt", "quirk", "quite", "quota", "quote", "quoth", "rabbi", "rabid", "racer", "radar", "radii", "radio", "rainy", "raise", "rajah", "rally", "ralph", "ramen", "ranch", "randy", "range", "rapid", "rarer", "raspy", "ratio", "ratty", "raven", "rayon", "razor", "reach", "react", "ready", "realm", "rearm", "rebar", "rebel", "rebus", "rebut", "recap", "recur", "recut", "reedy", "refer", "refit", "regal", "rehab", "reign", "relax", "relay", "relic", "remit", "renal", "renew", "repay", "repel", "reply", "rerun", "reset", "resin", "retch", "retro", "retry", "reuse", "revel", "revue", "rhino", "rhyme", "rider", "ridge", "rifle", "right", "rigid", "rigor", "rinse", "ripen", "riper", "risen", "riser", "risky", "rival", "river", "rivet", "roach", "roast", "robin", "robot", "rocky", "rodeo", "roger", "rogue", "roomy", "roost", "rotor", "rouge", "rough", "round", "rouse", "route", "rover", "rowdy", "rower", "royal", "ruddy", "ruder", "rugby", "ruler", "rumba", "rumor", "rupee", "rural", "rusty", "sadly", "safer", "saint", "salad", "sally", "salon", "salsa", "salty", "salve", "salvo", "sandy", "saner", "sappy", "sassy", "satin", "satyr", "sauce", "saucy", "sauna", "saute", "savor", "savoy", "savvy", "scald", "scale", "scalp", "scaly", "scamp", "scant", "scare", "scarf", "scary", "scene", "scent", "scion", "scoff", "scold", "scone", "scoop", "scope", "score", "scorn", "scour", "scout", "scowl", "scram", "scrap", "scree", "screw", "scrub", "scrum", "scuba", "sedan", "seedy", "segue", "seize", "semen", "sense", "sepia", "serif", "serum", "serve", "setup", "seven", "sever", "sewer", "shack", "shade", "shady", "shaft", "shake", "shaky", "shale", "shall", "shalt", "shame", "shank", "shape", "shard", "share", "shark", "sharp", "shave", "shawl", "shear", "sheen", "sheep", "sheer", "sheet", "sheik", "shelf", "shell", "shied", "shift", "shine", "shiny", "shire", "shirk", "shirt", "shoal", "shock", "shone", "shook", "shoot", "shore", "shorn", "short", "shout", "shove", "shown", "showy", "shrew", "shrub", "shrug", "shuck", "shunt", "shush", "shyly", "siege", "sieve", "sight", "sigma", "silky", "silly", "since", "sinew", "singe", "siren", "sissy", "sixth", "sixty", "skate", "skier", "skiff", "skill", "skimp", "skirt", "skulk", "skull", "skunk", "slack", "slain", "slang", "slant", "slash", "slate", "slave", "sleek", "sleep", "sleet", "slept", "slice", "slick", "slide", "slime", "slimy", "sling", "slink", "sloop", "slope", "slosh", "sloth", "slump", "slung", "slunk", "slurp", "slush", "slyly", "smack", "small", "smart", "smash", "smear", "smell", "smelt", "smile", "smirk", "smite", "smith", "smock", "smoke", "smoky", "smote", "snack", "snail", "snake", "snaky", "snare", "snarl", "sneak", "sneer", "snide", "sniff", "snipe", "snoop", "snore", "snort", "snout", "snowy", "snuck", "snuff", "soapy", "sober", "soggy", "solar", "solid", "solve", "sonar", "sonic", "sooth", "sooty", "sorry", "sound", "south", "sower", "space", "spade", "spank", "spare", "spark", "spasm", "spawn", "speak", "spear", "speck", "speed", "spell", "spelt", "spend", "spent", "sperm", "spice", "spicy", "spied", "spiel", "spike", "spiky", "spill", "spilt", "spine", "spiny", "spire", "spite", "splat", "split", "spoil", "spoke", "spoof", "spook", "spool", "spoon", "spore", "sport", "spout", "spray", "spree", "sprig", "spunk", "spurn", "spurt", "squad", "squat", "squib", "stack", "staff", "stage", "staid", "stain", "stair", "stake", "stale", "stalk", "stall", "stamp", "stand", "stank", "stare", "stark", "start", "stash", "state", "stave", "stead", "steak", "steal", "steam", "steed", "steel", "steep", "steer", "stein", "stern", "stick", "stiff", "still", "stilt", "sting", "stink", "stint", "stock", "stoic", "stoke", "stole", "stomp", "stone", "stony", "stood", "stool", "stoop", "store", "stork", "storm", "story", "stout", "stove", "strap", "straw", "stray", "strip", "strut", "stuck", "study", "stuff", "stump", "stung", "stunk", "stunt", "style", "suave", "sugar", "suing", "suite", "sulky", "sully", "sumac", "sunny", "super", "surer", "surge", "surly", "sushi", "swami", "swamp", "swarm", "swash", "swath", "swear", "sweat", "sweep", "sweet", "swell", "swept", "swift", "swill", "swine", "swing", "swirl", "swish", "swoon", "swoop", "sword", "swore", "sworn", "swung", "synod", "syrup", "tabby", "table", "taboo", "tacit", "tacky", "taffy", "taint", "taken", "taker", "tally", "talon", "tamer", "tango", "tangy", "taper", "tapir", "tardy", "tarot", "taste", "tasty", "tatty", "taunt", "tawny", "teach", "teary", "tease", "teddy", "teeth", "tempo", "tenet", "tenor", "tense", "tenth", "tepee", "tepid", "terra", "terse", "testy", "thank", "theft", "their", "theme", "there", "these", "theta", "thick", "thief", "thigh", "thing", "think", "third", "thong", "thorn", "those", "three", "threw", "throb", "throw", "thrum", "thumb", "thump", "thyme", "tiara", "tibia", "tidal", "tiger", "tight", "tilde", "timer", "timid", "tipsy", "titan", "tithe", "title", "toast", "today", "toddy", "token", "tonal", "tonga", "tonic", "tooth", "topaz", "topic", "torch", "torso", "torus", "total", "totem", "touch", "tough", "towel", "tower", "toxic", "toxin", "trace", "track", "tract", "trade", "trail", "train", "trait", "tramp", "trash", "trawl", "tread", "treat", "trend", "triad", "trial", "tribe", "trice", "trick", "tried", "tripe", "trite", "troll", "troop", "trope", "trout", "trove", "truce", "truck", "truer", "truly", "trump", "trunk", "truss", "trust", "truth", "tryst", "tubal", "tuber", "tulip", "tulle", "tumor", "tunic", "turbo", "tutor", "twang", "tweak", "tweed", "tweet", "twice", "twine", "twirl", "twist", "twixt", "tying", "udder", "ulcer", "ultra", "umbra", "uncle", "uncut", "under", "undid", "undue", "unfed", "unfit", "unify", "union", "unite", "unity", "unlit", "unmet", "unset", "untie", "until", "unwed", "unzip", "upper", "upset", "urban", "urine", "usage", "usher", "using", "usual", "usurp", "utile", "utter", "vague", "valet", "valid", "valor", "value", "valve", "vapid", "vapor", "vault", "vaunt", "vegan", "venom", "venue", "verge", "verse", "verso", "verve", "vicar", "video", "vigil", "vigor", "villa", "vinyl", "viola", "viper", "viral", "virus", "visit", "visor", "vista", "vital", "vivid", "vixen", "vocal", "vodka", "vogue", "voice", "voila", "vomit", "voter", "vouch", "vowel", "vying", "wacky", "wafer", "wager", "wagon", "waist", "waive", "waltz", "warty", "waste", "watch", "water", "waver", "waxen", "weary", "weave", "wedge", "weedy", "weigh", "weird", "welch", "welsh", "wench", "whack", "whale", "wharf", "wheat", "wheel", "whelp", "where", "which", "whiff", "while", "whine", "whiny", "whirl", "whisk", "white", "whole", "whoop", "whose", "widen", "wider", "widow", "width", "wield", "wight", "willy", "wimpy", "wince", "winch", "windy", "wiser", "wispy", "witch", "witty", "woken", "woman", "women", "woody", "wooer", "wooly", "woozy", "wordy", "world", "worry", "worse", "worst", "worth", "would", "wound", "woven", "wrack", "wrath", "wreak", "wreck", "wrest", "wring", "wrist", "write", "wrong", "wrote", "wrung", "wryly", "yacht", "yearn", "yeast", "yield", "young", "youth", "zebra", "zesty", "zonal"];

let keys = document.getElementsByClassName('key');
let tileIndex = 1;
let columnIndex = 1;
let rowIndex = 1;
let guess = '';

// Randomly select a word from array 'possible words'
const answerIndex = Math.floor(Math.random() * possibleWords.length + 1);
const answer = possibleWords[answerIndex];
console.log(`Correct answer = ${answer}`);

// Split the word into an Array of characters (this will make it easier to iterate)
let answerChars = answer.split('');
console.log(`Answer Chars = ${answerChars}`);

loadTiles();
setTimeout(() => { 
    renderIntro();
}, 1500);

// ---------------------- CONTROLLER ----------------------

// Open help modal on click 
let help = document.getElementById('help');
help.addEventListener('click', () => {
    renderIntro();
}) 

// Adds Event listeners to each key on the on screen keyboard
for (let keyElement of keys) {
    let key = keyElement.textContent;

    keyElement.addEventListener('click', function () {
        let tile = document.getElementById(tileIndex);
       
        switch (key) {
            case 'ENTER':
                // Toggle class to animate keys as they are pressed
                let enter = document.getElementById('enter');
                keyPress(enter);
                if (guess.length !== 5) {
                    shakeTiles(guess, tileIndex);
                } 
                else if (!possibleWords.includes(guess)) {
                    shakeTiles(guess, tileIndex);
                } else {
                    console.log('Guess: ' + guess);
                    checkWord();
                    columnIndex = 1;
                }
                break;
            case '⌫':
                // Toggle class to animate keys as they are pressed
                let backspace = document.getElementById('backspace');
                keyPress(backspace);
                if (columnIndex !== 1) {
                    guess = guess.substring(0, guess.length - 1);
                    tileIndex--;
                    let prevTile = document.getElementById(tileIndex);
                    prevTile.innerText = '';
                    prevTile.style.border = '3px solid lightgrey';
                    columnIndex--;
                }
                break;
            default:
                if (tileIndex % 6 !== 0) {
                    columnIndex++;
                    tileIndex++;
                    tile.innerText = key;
                    guess = guess + key.toLowerCase();
                    tile.style.border = '3px solid black';
                    // Toggle class to animate tiles as they are selected 
                    pulseTile(tile);
                    // Toggle class to animate keys as they are pressed
                    let letter = tile.textContent.toLowerCase();
                    let keys = document.getElementById(letter);
                    keyPress(keys);
                } else {
                    
                }
        }
    });
}

// Add event listener on keydown for physical keyboard functionallity
document.addEventListener('keydown', (event) => {
let tile = document.getElementById(tileIndex);
    if (event.key >= 'a' && event.key <= 'z') { 
        if (tileIndex % 6 !== 0) {
            columnIndex++;
            tileIndex++;
            tile.innerText = event.key.toUpperCase();
            guess = guess + event.key.toLowerCase();
            tile.style.border = '3px solid black';
            // Modify CSS to animate tiles as they are selected 
            pulseTile(tile);
            // Modify CSS to animate keys as they are pressed
            let letter = tile.textContent.toLowerCase();
            let key = document.getElementById(letter);
            keyPress(key);
        }
    } else if (event.key == 'Backspace'){
        // Toggle class to animate keys as they are pressed
        let backspace = document.getElementById('backspace');
        keyPress(backspace);
        if (columnIndex !== 1) {
            guess = guess.substring(0, guess.length - 1);
            tileIndex--;
            let prevTile = document.getElementById(tileIndex);
            prevTile.innerText = '';
            prevTile.style.border = '3px solid lightgrey';
            columnIndex--;
        }
    } else if (event.key == 'Enter'){
        // Toggle class to animate keys as they are pressed
        let enter = document.getElementById('enter');
        keyPress(enter);
        if (guess.length !== 5) {
            shakeTiles(guess, tileIndex);
        } 
        else if (!possibleWords.includes(guess)) {
            shakeTiles(guess, tileIndex);
        } else {
            console.log('Guess: ' + guess);
            checkWord(guess);
            columnIndex = 1;
        } 
    } 
});


// Checks valid 5 letter word after the user clicks enter
function checkWord() {
    tileIndex = tileIndex - 5;
    
    for (c in answerChars) {
        
        if (tileIndex % 6 !== 0){
            let tile = document.getElementById(tileIndex);
            // Grab text content of each tile and link it to the corresponding key
            let letter = tile.textContent.toLowerCase();
            let key = document.getElementById(letter);
            // Check for green tiles
            if (tile.textContent.toLowerCase() === answerChars[c]){
                flipTile(tile, '#6aaa64');
                changeKeyColor(key, '#6aaa64');
                // If player wins, toggle 'tile' class to initiate 'spin' animation
                if (answer === guess) {
                    tile.classList.toggle('spin');
                }
            // Check for yellow tiles
            } else if (answer.includes(tile.textContent.toLowerCase())){
                flipTile(tile, '#c9b458');
                changeKeyColor(key, '#c9b458');
            // Grey out incorrect tiles
            } else {
                flipTile(tile, '#787c7e');
                changeKeyColor(key, '#787c7e');
            }
            tileIndex++;
        }
    }
    if (answer === guess) {
        console.log("Guess = correct")
        console.log("Player Wins!")
        setTimeout(() => {
            renderWin();
    }, 1500);
    } else if (answer !== guess && rowIndex === 6) {
        console.log("Attempts exceeded");
        console.log("Game Over");
        renderLoose();
    } else {
        tileIndex++;
        rowIndex++;
        console.log(`Tile index: ${tileIndex}`);
        guess = '';
    }
}

// Changes tile color
function changeTileColor(tile, color) {
    tile.style.backgroundColor = `${color}`;
    tile.style.border = `3px solid ${color}`;
    tile.style.color = 'white';
}

// Changes the color of specified key on keyboard
function changeKeyColor(key, color) {
    key.style.backgroundColor = `${color}`;
    key.style.color = 'white';
}

// -------------- Animations ---------------

// Load tiles when page is refreshed
function loadTiles() {
    for (let i = 1; i <= 35; i++) {
        if (i % 6 !== 0) {
            let tile = document.getElementById(i);
            if (tile.dataset.row % 2 === 0) {
                tile.classList.add('loadTilesRight');
                setTimeout(() => { 
                    tile.classList.remove('loadTilesRight');
                }, 1500);
            } else {
                tile.classList.add('loadTilesLeft');
                setTimeout(() => { 
                    tile.classList.remove('loadTilesLeft');
                }, 1500);
            }
        }
    }
}

// Pulse tiles as they are selected 
function pulseTile(tile){
    tile.classList.add('pulse');
    setTimeout(() => { 
        tile.classList.remove('pulse');
    }, 100);
}

// Flips tiles to reveal
function flipTile(tile, color) {
    tile.style.transition = '0.3s ease-in-out'
    tile.style.transform = 'rotateX(90deg)';
    setTimeout(() => {
        tile.style.transform = 'rotateX(0deg)';
        changeTileColor(tile, color);
    }, 300);
}

// Invokes 'press' animation when keys are pressed
function keyPress(key) {
    key.classList.add('press');
    setTimeout(() => { 
        key.classList.remove('press');
    }, 200);
}

// Shakes tiles if guess is invalid
function shakeTiles(guess, tileIndex) {
    tileIndex = tileIndex - guess.length;
    for (let c of guess) {
        let tile = document.getElementById(tileIndex);
        tile.classList.add('shake');
        setTimeout(() => { 
            tile.classList.remove('shake');
        }, 1000);
        tileIndex++;
    }
    setTimeout(() => {
        if (guess.length !== 5) {
            //alert(`Please enter a 5 letter word`);
        } else {
            //alert(`'${guess}' is not a valid word`);
        }
    }, 700);
}


// ----------------- Pop-ups/Additional Screens -------------------

// Renders Intro Card including Rules of Play
function renderIntro() {
    let introContainer = document.createElement('div');
    introContainer.className = 'intro';
    introContainer.id = 'help';
    document.body.appendChild(introContainer);

    let h1 = document.createElement('h1');
    h1.className = 'intro-h1';
    h1.textContent = 'Welcome to Wordle!'
    introContainer.appendChild(h1);

    let close = document.createElement('button');
    close.className = 'intro-close';
    close.textContent = 'x'
    h1.appendChild(close);
    close.addEventListener('click', () => {
        introContainer.remove();
    })

    let h2 = document.createElement('h2');
    h2.className = 'intro-h2';
    h2.textContent = 'HOW TO PLAY:'
    introContainer.appendChild(h2);

    let p1 = document.createElement('p');
    p1.className = 'intro-p';
    p1.innerHTML = 'Guess the <span>WORDLE</span> in less than 6 tries.'
    introContainer.appendChild(p1);
    let p2 = document.createElement('p');
    p2.className = 'intro-p';
    p2.innerHTML = 'Each guess must be a valid 5-letter word. Hit the enter button to submit.'
    introContainer.appendChild(p2);
    let p3 = document.createElement('p');
    p3.className = 'intro-p';
    p3.innerHTML = 'After each guess, the color of the tiles will change to show how close your guess was to the word.'
    introContainer.appendChild(p3);

    let p4 = document.createElement('span');
    p4.className = 'intro-p';
    p4.innerHTML = 'Examples: '
    introContainer.appendChild(p4);

    renderExample(introContainer, 0, '#6aaa64', 'in the word and in the correct spot.');
    renderExample(introContainer, 1, '#c9b458', 'in the word but in the wrong spot.');
    renderExample(introContainer, 3, '#787c7e', 'not in the word in any spot.');
}

function renderExample(parent, index, color, str) {
    const wordIndex = Math.floor(Math.random() * possibleWords.length + 1);
    const randWord = possibleWords[wordIndex].toUpperCase();
    let wordChars = randWord.split('');

    for(let i = 0; i < 5; i++){
        let tile = document.createElement('div');
        tile.textContent = wordChars[i];
        parent.appendChild(tile);
        if (i === index) {
            changeTileColor(tile, color);
            tile.style.border = `1px solid ${color}`;
        }
    }
    let p5 = document.createElement('p');
    p5.className = 'intro-p';
    p5.innerHTML = `The letter <span>${wordChars[index]}</span> is ${str}`
    parent.appendChild(p5);
}

function renderWin() {
    let winContainer = document.createElement('div');
    winContainer.className = 'win';
    document.body.appendChild(winContainer);

    let h1 = document.createElement('h1');
    h1.className = 'win-h1';
    h1.textContent = 'Nice Work!'
    winContainer.appendChild(h1);

    let close = document.createElement('button');
    close.className = 'win-close';
    close.textContent = 'x'
    h1.appendChild(close);
    close.addEventListener('click', () => {
        winContainer.remove();
    })

    let p1 = document.createElement('p');
    p1.className = 'win-p';
    if (rowIndex === 1) {
        p1.innerHTML = `Congratulations you guessed the word in <span>${rowIndex} try!</span>`
    } else {
        p1.innerHTML = `Congratulations you guessed the word in <span>${rowIndex} tries!</span>`
    }
    winContainer.appendChild(p1);

    let p2 = document.createElement('p');
    p2.className = 'win-p';
    p2.innerHTML = 'Would you like to play again?';
    winContainer.appendChild(p2);

    let playAgain = document.createElement('button');
    playAgain.className = 'win-playAgain';
    playAgain.textContent = 'Play Again'
    winContainer.appendChild(playAgain);
    playAgain.addEventListener('click', () => {
        location.reload();
        setTimeout(() => { 
            let help = document.getElementById('intro');
            help.remove();
        }, 4000);
    })
}

function renderLoose() {
    let looseContainer = document.createElement('div');
    looseContainer.className = 'loose';
    document.body.appendChild(looseContainer);

    let h1 = document.createElement('h1');
    h1.className = 'loose-h1';
    h1.textContent = 'Unlucky!'
    looseContainer.appendChild(h1);

    let close = document.createElement('button');
    close.className = 'loose-close';
    close.textContent = 'x'
    h1.appendChild(close);
    close.addEventListener('click', () => {
        looseContainer.remove();
    })

    let p1 = document.createElement('p');
    p1.className = 'loose-p';
    p1.innerHTML = `The correct answer was <span>${answer.toUpperCase()}</span>`
    looseContainer.appendChild(p1);

    let p2 = document.createElement('p');
    p2.className = 'loose-p';
    p2.innerHTML = 'Would you like to play again?';
    looseContainer.appendChild(p2);

    let playAgain = document.createElement('button');
    playAgain.className = 'loose-playAgain';
    playAgain.textContent = 'Play Again'
    looseContainer.appendChild(playAgain);
    playAgain.addEventListener('click', () => {
        location.reload(); 
    })
}