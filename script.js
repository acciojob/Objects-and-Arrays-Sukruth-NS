const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

// window.players = players;
// window.person = person;
// window.team = team;
// window.team1 = team1;
// window.cap1 = cap1;

const team = players;

const team1 = players.slice();// Using slice() to create a shallow copy

const cap1 = Object.assign({}, person);// Using Object.assign() to create a shallow copy

console.log(team);   
console.log(team1);  
console.log(cap1);  