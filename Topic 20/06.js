let chosen = 1;

let myFriends = [
  { title: 'Osama', age: 39, available: true, skills: ['HTML', 'CSS'] },
  { title: 'Ahmed', age: 25, available: false, skills: ['Python', 'Django'] },
  { title: 'Sayed', age: 33, available: true, skills: ['PHP', 'Laravel'] },
];
function distruct({ title, age, available, skills: [one, tow] }) {
  available = available ? 'Available' : 'not Available';
  console.log(title, age, available, one, tow);
}
distruct(myFriends[--chosen]);
