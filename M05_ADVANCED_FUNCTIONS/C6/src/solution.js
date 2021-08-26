function sortWords(words) {
  return words.sort((a, b)=> a.toLowerCase() > b.toLowerCase() ? 1:-1)
}

function sortNumbers(numbers) {
  return numbers.sort((a, b) => a-b)
}

function largestFirst(numbers) {
  return numbers.sort((a, b)=>b-a)
}

function sortFlowersByZone(flowers) {
  return flowers.sort((a, b) => a.zone - b.zone)
}

function sortByLength(strings) {
  return strings.sort((a, b) => a.length - b.length)
}

module.exports = {
  sortWords,
  sortNumbers,
  largestFirst,
  sortFlowersByZone,
  sortByLength,
};
