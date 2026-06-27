import re

file_path = "/Users/umurey/Downloads/CFC/CFC Wetzlar v1.dc.html"
with open(file_path, "r", encoding="utf-8") as f:
    orig_content = f.read()

content = orig_content

# Remove all existing logos
content = re.sub(r'<img[^>]*src="\{\{\s*logoSrc\s*\}\}"[^>]*/>', '', content)

# 1. Favicon in head
if '<link rel="icon"' not in content:
    content = content.replace('</head>', '  <link rel="icon" href="uploads/Gemini_Generated_Image_xcfxgjxcfxgjxcfx.jpeg" />\n</head>')

# 2. Header logo instead of text
header_text = '<button onClick="{{ goHome }}" style="font-family: \'Bangers\', cursive; font-size: 34px; color: #E31837; cursor: pointer; letter-spacing: 4px; background: none; border: none; padding: 0; line-height: 1;">CFC</button>'
header_logo = '<button onClick="{{ goHome }}" style="background:none;border:none;cursor:pointer;padding:0;"><img src="{{ logoSrc }}" alt="CFC Logo" style="height:50px;width:auto;border-radius:50%;border:2px solid #E31837;"/></button>'
content = content.replace(header_text, header_logo)

# 3. Footer logo instead of Giant CFC
footer_giant = '<div style="{{ footerTextStyle }}">C F C</div>'
footer_logo = '<div style="text-align:center;"><img src="{{ logoSrc }}" alt="CFC Logo" style="height:120px;width:auto;border-radius:50%;border:4px solid #fff;box-shadow:0 0 20px rgba(0,0,0,0.1);"/></div>'
content = content.replace(footer_giant, footer_logo)

# 4. Remove all emojis from the content
emojis_to_remove = ['🔥', '🍗', '🍔', '🍟', '🛵', '🌶️', '🧀', '🏆', '🥤', '📍', '📞', '💬', '🕐', '🏪', '🚗', '📱', '⭐', '✔']
for emoji in emojis_to_remove:
    content = content.replace(emoji, '')

# Translations
translations = {
    '>HOME<': '>STARTSEITE<',
    '>SPEISEKARTE<': '>SPEISEKARTE<',
    '>KONTAKT<': '>KONTAKT<',
    '>JETZT BESTELLEN<': '>JETZT BESTELLEN<',
    '>FOOD THAT FEELS GOOD<': '>ESSEN DAS GUT TUT<',
    '>FEEL THE<br/>CHANGE<': '>FÜHLE DIE<br/>VERÄNDERUNG<',
    '>EAT LIKE YOU MEAN IT<': '>ISS MIT LEIDENSCHAFT<',
    'Wetzlar\'s Finest': 'Wetzlars Bestes',
    '>SAY HELLO<': '>SAG HALLO<',
    '>GOT A CRAVING?<br/>LET\'S TALK.<': '>HAST DU APPETIT?<br/>LASS UNS REDEN.<',
    '>SEND CRAVING<': '>NACHRICHT SENDEN<',
    'DEINE E-MAIL': 'DEINE E-MAIL',
    'TEIL UNS DEINEN CRAVING MIT...': 'TEIL UNS DEINEN APPETIT MIT...',
    'Chicken Burger': 'Hähnchen-Burger',
    'Chicken Wrap': 'Hähnchen-Wrap',
    'Chicken-Menü': 'Hähnchen-Menü',
    'Nuggets': 'Nuggets',
    'Hot Wings': 'Scharfe Flügel',
    'Double Burger': 'Doppel-Burger',
    'Veggie Burger': 'Veggie-Burger',
    'Loaded Pommes': 'Überbackene Pommes',
    'Buffalo Chicken Pommes': 'Scharfe Hähnchen-Pommes',
    'Crispy Chicken Mac & Cheese': 'Knusper-Hähnchen Makkaroni mit Käse',
    'Chicken Popcorn': 'Hähnchen-Popcorn',
    'CFC Special Sauce': 'CFC Spezial-Soße',
    '>SPEISEKARTE ANSEHEN<': '>SPEISEKARTE ANSEHEN<'
}

for eng, ger in translations.items():
    content = content.replace(eng, ger)

# Fix empty emoji properties in js
content = content.replace("emoji: ''", "emoji: ' '")

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Done")
