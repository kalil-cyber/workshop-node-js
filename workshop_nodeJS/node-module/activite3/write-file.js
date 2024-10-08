const fs = require('fs');

const content = 'Hello Node!';

try {
// creation et ecriture d'un fichier welcome.txt
  fs.writeFileSync('welcome.txt', content);
  // file written successfully
  console.log('Fichier "welcome.txt",créé avec succès.')
} catch (err) {
  console.error(err);
}
