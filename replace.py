import re

file_path = "/Users/umurey/Downloads/CFC/CFC Wetzlar.dc.html"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Favicon in head
content = content.replace('</head>', '  <link rel="icon" href="uploads/Gemini_Generated_Image_xcfxgjxcfxgjxcfx.jpeg" />\n</head>')

# 2. Header logo instead of text
header_text = '<button onClick="{{ goHome }}" style="font-family:\'Modak\',cursive;font-size:38px;color:#f91814;cursor:pointer;letter-spacing:2px;background:none;border:none;padding:0;line-height:1;-webkit-text-stroke:2px #4C0016;paint-order:stroke fill;">CFC</button>'
header_logo = '<button onClick="{{ goHome }}" style="background:none;border:none;cursor:pointer;padding:0;"><img src="{{ logoSrc }}" alt="CFC Logo" style="height:50px;width:auto;border-radius:50%;border:2px solid #4C0016;"/></button>'
content = content.replace(header_text, header_logo)

# 3. Footer logo instead of Giant CFC
footer_giant = '<div style="{{ footerGiant }}">CFC</div>'
footer_logo = '<div style="text-align:center;"><img src="{{ logoSrc }}" alt="CFC Logo" style="height:120px;width:auto;border-radius:50%;border:4px solid #fff;box-shadow:0 0 20px rgba(0,0,0,0.1);"/></div>'
content = content.replace(footer_giant, footer_logo)

# 4. Remove all emojis from the content
emojis_to_remove = ['🔥', '🍗', '🍔', '🍟', '🛵', '🌶️', '🧀', '🏆', '🥤', '📍', '📞', '💬', '🕐', '🏪', '🚗', '📱', '⭐', '✔']
for emoji in emojis_to_remove:
    content = content.replace(emoji, '')

# 5. Remove all remaining logo occurrences
# By matching <img src="{{ logoSrc }}" ... />
# Note: we used logoSrc in header and footer above, so we should only remove existing ones.
# Actually, the existing ones have specific styles. Let's just find all img with logoSrc and remove them FIRST, THEN add the header and footer logos.

with open(file_path, "r", encoding="utf-8") as f:
    orig_content = f.read()

# Let's completely reconstruct the file manipulations.
content = orig_content

# Remove all existing logos
content = re.sub(r'<img[^>]*src="\{\{\s*logoSrc\s*\}\}"[^>]*/>', '', content)

# 1. Favicon in head
content = content.replace('</head>', '  <link rel="icon" href="uploads/Gemini_Generated_Image_xcfxgjxcfxgjxcfx.jpeg" />\n</head>')

# 2. Header logo instead of text
content = content.replace(header_text, header_logo)

# 3. Footer logo instead of Giant CFC
content = content.replace(footer_giant, footer_logo)

# 4. Remove all emojis from the content
for emoji in emojis_to_remove:
    content = content.replace(emoji, '')

# Translations
translations = {
    'Craving…': 'Appetit…',
    '>HOME<': '>STARTSEITE<',
    '>Home<': '>Startseite<',
    '>FRIED<br/>CHICKEN<': '>KNUSPER<br/>HÄHNCHEN<',
    '>EXTRA<br/>CRISPY<': '>EXTRA<br/>KNUSPRIG<',
    '>FOOD THAT<br/>FEELS GOOD<': '>ESSEN DAS<br/>GUT TUT<',
    '>BOLD FLAVOUR<': '>VOLLER GESCHMACK<',
    '>High Protein<': '>Viel Protein<',
    '>FEEL IT<': '>FÜHL ES<',
    '>FEEL THE<br/>CHANGE<': '>FÜHLE DIE<br/>VERÄNDERUNG<',
    '>EAT LIKE YOU<br/>MEAN IT<': '>ISS MIT<br/>LEIDENSCHAFT<',
    'Wetzlar\'s Finest': 'Wetzlars Bestes',
    '>SAY HELLO<': '>SAG HALLO<',
    '>GOT A CRAVING?<br/>LET\'S TALK.<': '>HAST DU APPETIT?<br/>LASS UNS REDEN.<',
    '>SEND CRAVING<': '>NACHRICHT SENDEN<',
    'Crispy Wings · Golden Crunch · Est. 2024': 'Knusprige Flügel · Goldig Knusprig · Gegr. 2024',
    'DEINE E-MAIL': 'DEINE E-MAIL',
    'TEIL UNS DEINEN CRAVING MIT...': 'TEIL UNS DEINEN APPETIT MIT...',
    'Chicken Burger': 'Hähnchen-Burger',
    'Chicken Wrap': 'Hähnchen-Wrap',
    'Chicken-Menü': 'Hähnchen-Menü',
    'Nuggets': 'Nuggets', # accepted loan word? let's keep it or 'Hähnchenhappen'
    'Hot Wings': 'Scharfe Flügel',
    'Double Burger': 'Doppel-Burger',
    'Veggie Burger': 'Veggie-Burger', # Veggie is acceptable, or 'Gemüse-Burger'
    'Loaded Pommes': 'Überbackene Pommes',
    'Buffalo Chicken Pommes': 'Scharfe Hähnchen-Pommes',
    'Crispy Chicken Mac & Cheese': 'Knusper-Hähnchen Makkaroni mit Käse',
    'Chicken Popcorn': 'Hähnchen-Popcorn',
    'CFC Special Sauce': 'CFC Spezial-Soße'
}

for eng, ger in translations.items():
    content = content.replace(eng, ger)

# Fix empty emoji properties in js
content = content.replace("emoji: ''", "emoji: ' '")

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Done")
