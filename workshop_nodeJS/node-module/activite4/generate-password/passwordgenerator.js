// Importation du module generate-password
var generator = require('generate-password');
// Generation d'un mot de passe aléatoire
var password = generator.generate({
	length: 10, //Longueur du mot de pass
	numbers: true, //Inclure des chiffres
    symbols: true, // Inclure des symboles
    uppercase: true, // Inclure des lettres majuscules
    lowercase: true, //Inclure des lettres en minuscules
});

// 'uEyMTw32v9' Afficher le mot de passe dans la console
console.log(password);