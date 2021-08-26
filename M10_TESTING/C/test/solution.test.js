// Write your tests here!
const findStudentScoreByName = require("../src/solution.js");
const expect = require("chai").expect;

const students = [
  { name: "Leo Yeon-Joo", score: 8.9 },
  { name: "Morgan Sutton", score: 7.4 },
  { name: "Natalee Vargas", score: 9.2 },
];

const test1 = findStudentScoreByName(students, "Natalee Vargas");
const test2 = findStudentScoreByName(students, "")
const test3 = findStudentScoreByName([], "Natalee Vargas")
const test4 = findStudentScoreByName("Natalee Vargas", students)
describe("findStudentScoreByName", () => {
  it("should return a number, given a name on the list", () => {
    expect(test1).to.equal(9.2);
  });
  it("should return null if empty string or arr is passed through", () => {
    expect(test2).to.equal(null);
    expect(test3).to.equal(null)
  });
});
