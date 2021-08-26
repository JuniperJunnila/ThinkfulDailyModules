/*
  Write a function that returns a particular student's score when given a name. If no name matches, return `null`.
*/


function findStudentScoreByName(students = [], name = "") {
  if (students.length === 0 || name.length === 0 || !Array.isArray(students) || typeof name != "string"){
    return null
  }
  let found = students.find((student) => student.name === name)
  if (found) {
    return found.score
  }
  return null
}

module.exports = findStudentScoreByName;
