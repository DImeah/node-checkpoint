// Install the generate password module and import generate
import { generate } from "generate-password";

// Function to generate a random password
function generatePassword() {
  var password = generate({
    length: 10, // password length
    numbers: true, // add numbers to password
    symbols: true, // add symbols to password
    excludeSimilarCharacters: true, // exclude similar characters from password
  });
  return console.log(password);
}

generatePassword();
