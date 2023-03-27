let students = new Map();

// Add data for 3 students
students.set("id", [1, 2, 3]);
students.set("name", ['Hitanshu', 'Ninad', 'Amandeep']);
students.set("scores", [90, 88, 92]);

// Get Student Names using map functions
let studentNames = students.get("name");
console.log(studentNames);



// Display 1 parameter (only value), 2 parameters (value + key), and 3 parameters (value + key + map) for the student
console.log("-----one parameter-----");
console.log(students.get("id"));
console.log(students.get("name"));
console.log(students.get("scores"));

console.log("-----two parameter-----");
console.log("id", students.get("id"));
console.log("name", students.get("name"));
console.log("scores", students.get("scores"));

console.log("-----three parameter-----");
console.log("id", students.get("id"), students);

console.log("name", students.get("name"), students);
console.log("scores", students.get("scores"), students);
