var firstName = prompt("inserisci il tuo nome");
// console.log(firstName);

var lastName = prompt("Inserisci il tuo cognome");
// console.log(lastName);

var favouriteColor = prompt("Inserisci il tuo colore preferito");
// console.log(favouriteColor);

var password = firstName + lastName + favouriteColor + 19;
// console.log(password);

// Soluzione HTML
document.getElementById("password").innerHTML = password;
// Soluzione HTML


// Soluzione JS
document.writeln("La tua password è: " + password);
// Soluzione JS
