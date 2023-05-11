const userName = prompt('Insert your name');

const userLastName = prompt('Insert your last name');

const favoriteColor = prompt('Insert your favorite color');

let currentYear = 23;

let generatedPw = document.getElementById('generated_password').innerHTML = userName + userLastName + favoriteColor + currentYear;

alert('Password generata: ' + generatedPw);

console.warn('Di certo non il miglior generatore di password.');

