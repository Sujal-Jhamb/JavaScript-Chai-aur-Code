const accountId = 144553;
let accountEmail = "js@gmail.com";

// It is not advised to use var because it changes the value of the cariable through the program(globally scoped)
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

// accountId = 2 // Not allowed

accountEmail = "hehe@gmail.com";
accountPassword = "2121";
accountCity = "Bengaluru";

console.log(accountId);
console.log(accountEmail);

// Shortcut
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
Prefer not to use var
because of issue in block scope and function scope
*/