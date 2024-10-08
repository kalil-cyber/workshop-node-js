// read-file.js
const fs =require('fs');

try {
    // lire le fichier welcome.txt
  const data = fs.readFileSync('Welcome.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}
