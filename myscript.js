// * recupero i dati dell'utente: nome, cognome, colore preferito

const userName = prompt('Insert your name');

const userLastName = prompt('Insert your last name');

const favoriteColor = prompt('Insert your favorite color');

const currentYear = 23;

// * visualizzo nell'html la password generata
// Il numero currentYear viene visualizzato come stringa, se volessimo fare un'operazione tra due variabili con valore numerico in una stringa usiamo le parentesi es. (currentYear + 34) = nomecognomecolorepreferito57
const generatedPw = document.getElementById('generated_password').innerHTML = userName + userLastName + favoriteColor + currentYear; 

// visualizzo messaggio di warning e password generata nell'alert

alert('Password generata: ' + generatedPw);

console.warn('Di certo non il miglior generatore di password.');

