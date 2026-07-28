const tarotCards = [

    // ==========================
    // Major Arcana (22)
    // ==========================

    { id: 0, name: "The Fool", file: "fool" },
    { id: 1, name: "The Magician", file: "magician" },
    { id: 2, name: "The High Priestess", file: "high-priestess" },
    { id: 3, name: "The Empress", file: "empress" },
    { id: 4, name: "The Emperor", file: "emperor" },
    { id: 5, name: "The Hierophant", file: "hierophant" },
    { id: 6, name: "The Lovers", file: "lovers" },
    { id: 7, name: "The Chariot", file: "chariot" },
    { id: 8, name: "Strength", file: "strength" },
    { id: 9, name: "The Hermit", file: "hermit" },
    { id: 10, name: "Wheel of Fortune", file: "wheel-of-fortune" },
    { id: 11, name: "Justice", file: "justice" },
    { id: 12, name: "The Hanged Man", file: "hanged-man" },
    { id: 13, name: "Death", file: "death" },
    { id: 14, name: "Temperance", file: "temperance" },
    { id: 15, name: "The Devil", file: "devil" },
    { id: 16, name: "The Tower", file: "tower" },
    { id: 17, name: "The Star", file: "star" },
    { id: 18, name: "The Moon", file: "moon" },
    { id: 19, name: "The Sun", file: "sun" },
    { id: 20, name: "Judgement", file: "judgement" },
    { id: 21, name: "The World", file: "world" },

    // ==========================
    // Wands (14)
    // ==========================

    { id: 22, name: "Ace of Wands", file: "ace-of-wands" },
    { id: 23, name: "Two of Wands", file: "two-of-wands" },
    { id: 24, name: "Three of Wands", file: "three-of-wands" },
    { id: 25, name: "Four of Wands", file: "four-of-wands" },
    { id: 26, name: "Five of Wands", file: "five-of-wands" },
    { id: 27, name: "Six of Wands", file: "six-of-wands" },
    { id: 28, name: "Seven of Wands", file: "seven-of-wands" },
    { id: 29, name: "Eight of Wands", file: "eight-of-wands" },
    { id: 30, name: "Nine of Wands", file: "nine-of-wands" },
    { id: 31, name: "Ten of Wands", file: "ten-of-wands" },
    { id: 32, name: "Page of Wands", file: "page-of-wands" },
    { id: 33, name: "Knight of Wands", file: "knight-of-wands" },
    { id: 34, name: "Queen of Wands", file: "queen-of-wands" },
    { id: 35, name: "King of Wands", file: "king-of-wands" },

    // ==========================
    // Cups (14)
    // ==========================

    { id: 36, name: "Ace of Cups", file: "ace-of-cups" },
    { id: 37, name: "Two of Cups", file: "two-of-cups" },
    { id: 38, name: "Three of Cups", file: "three-of-cups" },
    { id: 39, name: "Four of Cups", file: "four-of-cups" },
    { id: 40, name: "Five of Cups", file: "five-of-cups" },
    { id: 41, name: "Six of Cups", file: "six-of-cups" },
    { id: 42, name: "Seven of Cups", file: "seven-of-cups" },
    { id: 43, name: "Eight of Cups", file: "eight-of-cups" },
    { id: 44, name: "Nine of Cups", file: "nine-of-cups" },
    { id: 45, name: "Ten of Cups", file: "ten-of-cups" },
    { id: 46, name: "Page of Cups", file: "page-of-cups" },
    { id: 47, name: "Knight of Cups", file: "knight-of-cups" },
    { id: 48, name: "Queen of Cups", file: "queen-of-cups" },
    { id: 49, name: "King of Cups", file: "king-of-cups" },
        // ==========================
    // Swords (14)
    // ==========================

    { id: 50, name: "Ace of Swords", file: "ace-of-swords" },
    { id: 51, name: "Two of Swords", file: "two-of-swords" },
    { id: 52, name: "Three of Swords", file: "three-of-swords" },
    { id: 53, name: "Four of Swords", file: "four-of-swords" },
    { id: 54, name: "Five of Swords", file: "five-of-swords" },
    { id: 55, name: "Six of Swords", file: "six-of-swords" },
    { id: 56, name: "Seven of Swords", file: "seven-of-swords" },
    { id: 57, name: "Eight of Swords", file: "eight-of-swords" },
    { id: 58, name: "Nine of Swords", file: "nine-of-swords" },
    { id: 59, name: "Ten of Swords", file: "ten-of-swords" },
    { id: 60, name: "Page of Swords", file: "page-of-swords" },
    { id: 61, name: "Knight of Swords", file: "knight-of-swords" },
    { id: 62, name: "Queen of Swords", file: "queen-of-swords" },
    { id: 63, name: "King of Swords", file: "king-of-swords" },

    // ==========================
    // Pentacles (14)
    // ==========================

    { id: 64, name: "Ace of Pentacles", file: "ace-of-pentacles" },
    { id: 65, name: "Two of Pentacles", file: "two-of-pentacles" },
    { id: 66, name: "Three of Pentacles", file: "three-of-pentacles" },
    { id: 67, name: "Four of Pentacles", file: "four-of-pentacles" },
    { id: 68, name: "Five of Pentacles", file: "five-of-pentacles" },
    { id: 69, name: "Six of Pentacles", file: "six-of-pentacles" },
    { id: 70, name: "Seven of Pentacles", file: "seven-of-pentacles" },
    { id: 71, name: "Eight of Pentacles", file: "eight-of-pentacles" },
    { id: 72, name: "Nine of Pentacles", file: "nine-of-pentacles" },
    { id: 73, name: "Ten of Pentacles", file: "ten-of-pentacles" },
    { id: 74, name: "Page of Pentacles", file: "page-of-pentacles" },
    { id: 75, name: "Knight of Pentacles", file: "knight-of-pentacles" },
    { id: 76, name: "Queen of Pentacles", file: "queen-of-pentacles" },
    { id: 77, name: "King of Pentacles", file: "king-of-pentacles" }

];