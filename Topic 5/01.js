let userName = 'Elzero';
console.log(userName[0].toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName[userName.indexOf('E')].toLowerCase()); // e
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName.split('', 1).toString().toLowerCase()); // e
console.log(userName.substr(0, 1).repeat(3).toLowerCase()); // eee
