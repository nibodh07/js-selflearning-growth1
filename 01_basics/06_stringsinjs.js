const name = "nibodh"
const repocount = 22
const skills = "Javascript"

//onsole.log(name ,  repocount , "value" ); // one type of syntax .

//console.log(`my name is ${name} and my age is ${repocount} who is a developer working on skills ${skills}`);// another type of syntax for
//the same string

const gamename = new String('ya toh win ya toh learn')

//console.log(gamename[6]);
//console.log(gamename.__proto__);
//console.log(gamename.length);
//console.log(gamename.toUpperCase());

//console.log(gamename.charAt(8));
//console.log(gamename.lastIndexOf('w'));

const newstring = gamename.substring(0 , 9)//substring prints the value between 0-n the positon given in the string
console.log(newstring);

const anotherstring = gamename.slice(11,12)// slice prints the value of a given desired positions
console.log(anotherstring);

const newstring1 = "     Nibodh    "
console.log(newstring1);
console.log(newstring1.trim());// trims the spaces or white spaces

const url = "https://nibodh.com/%69.com"
console.log(url.replace('69', '7')); // replaces the values

console.log(url.includes('panchayat')); // shows whether the string is present in the main string or not
console.log(url.includes('https'));

console.log(url.split('9'));// converts the string into an array.















