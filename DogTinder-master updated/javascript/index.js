// 1. Create a var that stores the name that user enters
var name = prompt("What is your name?");

// 2. Capitalise the first letter of their name

// A) isolate the first character
var firstChar = name.slice(0, 1);

// B) Turn the first character to uppercase
var upperCaseFirstChar = firstChar.toUpperCase();

// C) isolate the rest of the name
var restOfName = name.slice(1, name.length);

// D) Change the rest of the name to lowercase
restOfName = restOfName.toLowerCase();

// E) Concatenate the first char with the rest
var captilisedName = upperCaseFirstChar + restOfName;

// 3. Use the capitalised version of name in alert
alert("Hello, " + captilisedName);
