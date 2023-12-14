let myFriends = ['Ahmed', 'Elham', 'Osama', 'Gamal'];
let num = 3;
// Solution 1
myFriends.length = num;

// Solution 2
// myFriends.length -= myFriends[num].startsWith('G');

console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
