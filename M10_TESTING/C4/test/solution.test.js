// Write your tests here!
const findStudentByName = require("../src/solution.js");
const expect = require("chai").expect;

const students = [
  { name: "Leo Yeon-Joo", score: 8.9 },
  { name: "Morgan Sutton", score: 7.4 },
  { name: "Natalee Vargas", score: 9.2 },
];

let test1 = findStudentByName(students, "Natalee Vargas");
let exp1 = { name: "Natalee Vargas", score: 9.2 };
let test2 = findStudentByName(students, "Terry Peters");

describe("findStudentByName", () => {
  it("should return student obj given array of students and a name", () => {
    expect(test1).to.eql(exp1);
  });
  it("should return null if name is not present", () => {
    expect(test2).to.be.null;
  });
});
