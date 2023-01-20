// Chiedo il nome
let userName = prompt("Inserisci il tuo nome");
// console.log("Nome: " + userName);

// Chiedo il cognome
let userSurname = prompt("Inserisci il tuo cognome");
// console.log("Cognome: " + userSurname);

// Chiedo il colore preferito
let favouriteColor = prompt("Inserisci il tuo colore preferito");
// console.log("Colore: " + favouriteColor);

// Concateno le stringhe
const passwordGenerated = userName + userSurname + favouriteColor + "23";

// Concatenazione alternativa:
// const passwordGenerated = `${userName}${userSurname}${favouriteColor}23`
// console.log("Passw: " + passwordGenerated);

// Inserisco la password generata nel paragrafo
document.getElementById('generated_password').innerHTML = passwordGenerated;