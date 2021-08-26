function printNames(names) {
  names.forEach(element => {console.log(element)});
}

function logTreeType(trees) {
  trees.forEach(tree => {console.log(tree.type)})
}

function totalPoints(points) {
  let sum = 0
  points.forEach(point => sum += point)
  return sum
}

function buildSentence(words) {
  let sentence = ""
  words.forEach(word => sentence += `${word} `)
  return sentence
}

function logPercentages(decimals) {
  decimals.forEach(decimal => console.log(`${decimal * 100}%`))
}

module.exports = {
  printNames,
  logTreeType,
  totalPoints,
  buildSentence,
  logPercentages,
};
