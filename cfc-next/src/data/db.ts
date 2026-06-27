export const menuData = {
  categories: [
    {
      id: "bestseller",
      name: "Bestseller Deals",
      items: [
        { id: "cm", name: "Chicken Burger Menü", price: "13,00 €", desc: "Normal o. crispy scharf, Pommes, Getränk.", allergens: ["Gluten", "Sesam"], macro: { kcal: 950, protein: 32 } },
        { id: "wm", name: "Chicken Wrap Menü", price: "12,00 €", desc: "Normal Chicken, Pommes, Getränk.", allergens: ["Gluten"], macro: { kcal: 850, protein: 28 } },
        { id: "nm", name: "Nuggets Menü", price: "10,50 €", desc: "7 Nuggets, Pommes, Getränk.", allergens: ["Gluten"], macro: { kcal: 780, protein: 24 } },
        { id: "hm", name: "Chicken-Menü", price: "10,50 €", desc: "2 Hähnchenteile, Pommes, Krautsalat.", allergens: ["Gluten", "Ei"], macro: { kcal: 1100, protein: 45 } },
        { id: "km", name: "Kinder Menü", price: "Auf Anfrage", desc: "1 Hähnchenteil o. 3 Nuggets, Pommes, Capri Sun.", allergens: ["Gluten"], macro: { kcal: 600, protein: 18 } },
        { id: "fm9", name: "Familie Menü 9 Stück", price: "22,50 €", desc: "inkl. große Pommes & Krautsalat.", allergens: ["Gluten", "Ei"], macro: { kcal: 2400, protein: 120 } },
        { id: "fm15", name: "Familie Menü 15 Stück", price: "41,50 €", desc: "inkl. große Pommes & Krautsalat.", allergens: ["Gluten", "Ei"], macro: { kcal: 3800, protein: 200 } }
      ]
    },
    {
      id: "chicken",
      name: "Geflügel-Spezialitäten",
      items: [
        { id: "c1", name: "1 Hähnchenteil", price: "2,80 €", desc: "Knusprig frittiertes Hähnchenteil.", allergens: ["Gluten"], macro: { kcal: 320, protein: 20 } },
        { id: "c3", name: "3 Hähnchenteile", price: "8,50 €", desc: "Knusprig frittierte Hähnchenteile.", allergens: ["Gluten"], macro: { kcal: 960, protein: 60 } },
        { id: "hw6", name: "Hot Wings 6 Stück", price: "7,50 €", desc: "Scharf marinierte Chicken Wings.", allergens: ["Gluten"], macro: { kcal: 600, protein: 40 } },
        { id: "hw12", name: "Hot Wings 12 Stück", price: "13,50 €", desc: "Scharf marinierte Chicken Wings.", allergens: ["Gluten"], macro: { kcal: 1200, protein: 80 } },
        { id: "n7", name: "Nuggets 7 Stück", price: "6,00 €", desc: "Hausgemachte Chicken Nuggets.", allergens: ["Gluten"], macro: { kcal: 450, protein: 22 } },
        { id: "n15", name: "Nuggets 15 Stück", price: "11,00 €", desc: "Hausgemachte Chicken Nuggets.", allergens: ["Gluten"], macro: { kcal: 900, protein: 44 } }
      ]
    },
    {
      id: "burgers",
      name: "Burger & Wraps",
      items: [
        { id: "b1", name: "CFC Burger", price: "5,50 €", desc: "Klassischer Chicken Burger.", allergens: ["Gluten", "Sesam"], macro: { kcal: 550, protein: 25 } },
        { id: "b2", name: "BBQ Burger", price: "6,50 €", desc: "Mit rauchiger BBQ Sauce.", allergens: ["Gluten", "Sesam"], macro: { kcal: 580, protein: 25 } },
        { id: "b3", name: "Crispy Chicken Burger", price: "6,50 €", desc: "Extra knuspriges Patty.", allergens: ["Gluten", "Sesam"], macro: { kcal: 620, protein: 26 } },
        { id: "b4", name: "Double Burger", price: "8,90 €", desc: "Doppeltes Patty, doppelter Geschmack.", allergens: ["Gluten", "Sesam"], macro: { kcal: 850, protein: 45 } },
        { id: "b5", name: "Veggie Burger", price: "5,50 €", desc: "Vegetarisches Patty.", allergens: ["Gluten", "Sesam", "Soja"], macro: { kcal: 450, protein: 15 } },
        { id: "w1", name: "Wrap mit Mozzarella", price: "8,50 €", desc: "Mit Mozzarella Sticks.", allergens: ["Gluten", "Milch"], macro: { kcal: 700, protein: 20 } }
      ]
    },
    {
      id: "sides",
      name: "Beilagen & Extras",
      items: [
        { id: "s1", name: "Loaded Pommes", price: "7,90 €", desc: "Mit Käsesauce und Jalapeños.", allergens: ["Milch"], macro: { kcal: 650, protein: 12 } },
        { id: "s2", name: "Pommes Groß", price: "4,00 €", desc: "Knusprige Steakhouse Pommes.", allergens: [], macro: { kcal: 400, protein: 4 } },
        { id: "s3", name: "Mozzarella Sticks", price: "5,50 €", desc: "Im knusprigen Teigmantel.", allergens: ["Gluten", "Milch"], macro: { kcal: 480, protein: 18 } },
        { id: "s4", name: "Krautsalat", price: "3,00 €", desc: "Hausgemachter Cole Slaw.", allergens: ["Ei"], macro: { kcal: 150, protein: 2 } }
      ]
    }
  ]
};

export const reviewsData = [
  { id: 1, name: 'Taha Zafar', rating: 5, text: 'Sehr leckeres Essen und nette Bedienung. Kann ich nur empfehlen.', sentiment: 'positive' },
  { id: 2, name: 'Haris Basit', rating: 5, text: 'Alles war sehr lecker aber am besten waren die Hähnchenteile.', sentiment: 'positive' },
  { id: 3, name: 'Анастасия Залесская', rating: 5, text: 'Es ist köstlich und natürlich, und die Chicken Wings sind sogar besser als die von KFC. Nettes und höfliches Personal.', sentiment: 'positive' }
];

export const locationsData = [
  { id: 'wz', city: 'WETZLAR', desc: 'Unser Zuhause — frisch aus der Fritteuse.', address: 'Garbenheimer Str. 20A, 35582 Wetzlar', rotation: 7, mapPolygon: "M10,10 L90,10 L80,90 L20,90 Z" },
  { id: 'gi', city: 'GIESSEN', desc: 'Lieferung in unter 30 Minuten.', address: 'Gießen Zentrum', rotation: -7, mapPolygon: "M20,10 L80,20 L90,80 L10,90 Z" },
  { id: 'ma', city: 'MARBURG', desc: 'Crispy, heiß und immer halal.', address: 'Marburg Süd', rotation: 12, mapPolygon: "M50,10 L90,50 L50,90 L10,50 Z" },
  { id: 'li', city: 'LIMBURG', desc: 'Drive-In Abholung verfügbar.', address: 'Limburg an der Lahn', rotation: -12, mapPolygon: "M10,20 L90,10 L80,80 L20,90 Z" },
  { id: 'ff', city: 'FRANKFURT', desc: 'Catering für deine Events.', address: 'Frankfurt Messe', rotation: 6, mapPolygon: "M10,10 L90,20 L90,90 L10,80 Z" }
];
