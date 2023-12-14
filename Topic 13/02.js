// Convert To Arrow Function

// Solution 01
itsMe = () => `Iam A arrow Function`; 
console.log(itsMe()); //Iam A arrow Function


// Solution 02
urlCreate = (protocol, web, tld) => {
  return `${protocol}://www.${web}.${tld}`;
};
console.log(urlCreate('https', 'elzero', 'org')); // https://www.elzero.org
