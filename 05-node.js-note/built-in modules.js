
const fs = require("fs");
const path = require("path");

// Example 1

console.log("Welcome to Node.js");

let student = {
    name: "Amit",
    course: "MERN Stack",
    age: 21
};

console.log("Student Name:", student.name);
console.log("Course:", student.course);

let filePath = path.join(__dirname, "student.txt");

console.log("File Path:", filePath);


