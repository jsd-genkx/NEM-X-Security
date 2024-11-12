import bcrypt from "bcrypt";

const salt = "secret-character-you-like";

const saltRounds = 10;
const myPlaintextPassword = "JSD8*password";

const saltRounds2 = 2;
const myPlaintextPassword2 = "myPa$$wor3";

/* Async encryption */
bcrypt.hash(myPlaintextPassword + salt, saltRounds, function(err, hash) {
  console.log("hash 1 = ", hash);
});
bcrypt.hash(myPlaintextPassword2 + salt, saltRounds2, function(err, hash) {
  console.log("hash 2 = ", hash);
});

/* Sync encryption */
const hashSync = bcrypt.hashSync(myPlaintextPassword + salt, 10);
console.log(`hashSync 1 = ${hashSync}`);

const hashSync2 = bcrypt.hashSync(myPlaintextPassword2 + salt, 2);
console.log(`hashSync 2 = ${hashSync2}`);

/* Sync integrity */
const isMatchPassword = bcrypt.compareSync(myPlaintextPassword + salt, hashSync); // true
const isMatchPassword2 = bcrypt.compareSync(myPlaintextPassword2, hashSync);     // false

console.log('isMatchPassword = ', isMatchPassword);
console.log('isMatchPassword2 = ', isMatchPassword2);

/* 
-- Call Stack --
https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif
*/