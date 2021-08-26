/*
  Write a function that returns a particular student when given a name. If no name matches, return `null`.
*/

function findStudentByName(students, name) {
  let found = students.find((student) => student.name === name)
  if (found) {
    return found
  }
  return null
}

module.exports = findStudentByName;
