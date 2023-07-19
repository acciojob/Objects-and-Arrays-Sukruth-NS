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

// Create the variables as mentioned in the problem statement
const team = players;
const team1 = players.slice();
const cap1 = Object.assign({}, person);

// Exporting the variables so they can be accessed in the test file
export { team, team1, cap1 };