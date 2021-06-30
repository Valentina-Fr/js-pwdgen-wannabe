// Verifica js
console.log('JS OK');

/* Step da affrontare:
1-Dichiarare variabile per ottenere nome utente
2-Dichiarare variabile per ottenere cognome utente
3-Dichiarare variabile per ottenere colore preferito
4-Dichiarare variabile messaggio da visualizzare
5-Dichiarare variabile elemento html da modificare
6-Generare password in html
 */

// Dichiarazioni e assegnazioni variabili
var firstName = prompt('Qual è il tuo nome?');
console.log('nome utente: ', firstName);

var lastName = prompt('Qual è il tuo cognome?');
console.log('cognome utente: ', lastName);

var favoriteColor = prompt('Qual è il tuo color preferito?');
console.log('colore utente: ', favoriteColor);

var message = 'La tua password è: ';
console.log('messaggio: ', message);

var passwordPlaceholder = document.getElementById('password');
console.log('elemento html: ', passwordPlaceholder);