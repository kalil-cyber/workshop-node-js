 const http = require('http'); // import du module http de Node.js

const hostname = '127.0.0.1';
const port = 3000;
// Creer le serveur en utilisant http.createServe()
const server = http.createServer((req, res) => {
// Définir les entêtes de la reponse Http (code statut et type de contenu)
   res.statusCode = 200; // 200 signifie que la requête a réussi
  res.setHeader('Content-Type', 'text/plain'); // Type de reponse = HTML
//   Envoyer la reponse HTML au client
  res.end('Hello World');
});
// le serveur écoute sur le port 3000
server.listen(port, hostname, () => {
  console.log('le serveur tourne sur http://localhost:${port}');
});
