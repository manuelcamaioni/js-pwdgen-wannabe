const userName = prompt('Insert your name');

const userLastName = prompt('Insert your last name');

const favoriteColor = prompt('Insert your favorite color');

let currentYear = 23;

document.getElementById('generated_password').innerHTML = userName + userLastName + favoriteColor + currentYear;