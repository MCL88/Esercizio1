let phrases = [
    "Finché la barca va!",
    "Hanno ucciso l'uomo ragno",
    "Maccheroni Pepperoni",
    "Bibidi bobidi bu"
];

exports.getPhrases = () => {
    let index = Math.floor(Math.random() * phrases.length);
    return phrases[index];
}