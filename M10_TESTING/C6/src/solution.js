/*
  Write a function that separates students into two buckets based on a given score. The end result for the "happy path" should be an array with two arrays inside of it.
*/

function partitionStudentsByScore(students, score) {
  return [students.filter((student) => student.score <= score),
    students.filter((student) => student.score > score)]
}

module.exports = partitionStudentsByScore;