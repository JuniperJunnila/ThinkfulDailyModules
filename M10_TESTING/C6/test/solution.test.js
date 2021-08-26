// Write your tests here!
const partitionStudentsByScore = require("../src/solution");
const expect = require("chai").expect;

describe("partitionStudentByScore", () => {
  const students = [
    { name: "Leo Yeon-Joo", score: 8.9 },
    { name: "Morgan Sutton", score: 7.4 },
    { name: "Natalee Vargas", score: 9.2 },
  ];
  it("should return a nested array, first of students with <= the given score, then the rest", () => {
    let test1 = partitionStudentsByScore(students, 8);
    let expect1 = [
      [{ name: "Morgan Sutton", score: 7.4 }],
      [
        { name: "Leo Yeon-Joo", score: 8.9 },
        { name: "Natalee Vargas", score: 9.2 },
      ],
    ];
    expect(test1).to.eql(expect1);
    let test2 = partitionStudentsByScore(students, 5);
    let expect2 = [
      [],
      [
        { name: "Leo Yeon-Joo", score: 8.9 },
        { name: "Morgan Sutton", score: 7.4 },
        { name: "Natalee Vargas", score: 9.2 },
      ],
    ];
    expect(test2).to.eql(expect2);
  });
  it("should return an empty nested arr if student list is empty", () => {
    expect(partitionStudentsByScore([], 5)).to.eql([[], []]);
  });
});
