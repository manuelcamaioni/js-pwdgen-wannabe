// * recupero i dati dell'utente: nome, cognome, colore preferito

const userName = prompt('Insert your name');

const userLastName = prompt('Insert your last name');

const favoriteColor = prompt('Insert your favorite color');

const currentYear = 23;

// * visualizzo nell'html la password generata

const generatedPw = document.getElementById('generated_password').innerHTML = userName + userLastName + favoriteColor + currentYear;

// visualizzo messaggio di warning e password generata nell'alert

alert('Password generata: ' + generatedPw);

console.warn('Di certo non il miglior generatore di password.');

