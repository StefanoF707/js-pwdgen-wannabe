var firstName = prompt("inserisci il tuo nome");
// console.log(firstName);

var lastName = prompt("Inserisci il tuo cognome");
// console.log(lastName);

var favouriteColor = prompt("Inserisci il tuo colore preferito");
// console.log(favouriteColor);

var currentYear = 20;
// console.log(currentYear);

var currentYearString = currentYear.toString();
// console.log(currentYearString);

// Soluzione HTML
document.getElementById("first-name").innerHTML = firstName;
document.getElementById("last-name").innerHTML = lastName;
document.getElementById("favourite-color").innerHTML = favouriteColor;
document.getElementById("current-year").innerHTML = currentYearString;
// Soluzione HTML


// Soluzione JS
document.writeln("La tua password è: " + firstName + lastName + favouriteColor + currentYear);
// Soluzione JS
