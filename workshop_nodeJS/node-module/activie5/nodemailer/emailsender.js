// Importation du module nodemailer
var nodemailer = require('nodemailer');

// Création d'un transporteur pour envoyer des emails
var transporter = nodemailer.createTransport({
  // Utilisation du service Gmail pour l'envoi d'emails
  service: 'gmail',
  auth: {
    // Remplacez par votre adresse email Gmail
    user: 'youremail@gmail.com',
    // Remplacez par votre mot de passe Gmail
    pass: 'yourpassword'
  }
});

// Configuration des options de l'email à envoyer
var mailOptions = {
  // Adresse email de l'expéditeur
  from: 'youremail@gmail.com',
  // Adresse email du destinataire
  to: 'myfriend@yahoo.com',
  // Sujet de l'email
  subject: 'Sending Email using Node.js',
  // Contenu de l'email
  text: 'That was easy!'
};

// Envoi de l'email
transporter.sendMail(mailOptions, function(error, info) {
  // Vérification s'il y a une erreur lors de l'envoi
  if (error) {
    // Affichage de l'erreur dans la console
    console.log(error);
  } else {
    // Affichage d'un message de confirmation avec la réponse
    console.log('Email sent: ' + info.response);
  }
});
