function splitSum1(tours) {
  let total = 0;
  tours.forEach((tour) => {
    total += tour;
  });
  let preSum = 0;
  let postSum = total;
  let smallest = Infinity;

  for (let i = 0; i < tours.length - 1; i++) {
    const tour = tours[i];
    preSum += tour;
    postSum -= tour;
    const diff = Math.abs(preSum - postSum);
    if (diff < smallest) smallest = diff;
  }
  return smallest;
}

function splitSum2(tours) {
  let smallest = Infinity;
  for (let i = 0; i < tours.length - 1; i++) {
    let preSum = 0;
    let postSum = 0;
    for (let k = 0; k <= i; k++) preSum += tours[k];
    for (let k = i + 1; k < tours.length; k++) postSum += tours[k];
    const diff = Math.abs(preSum - postSum);
    if (diff < smallest) smallest = diff;
  }
  return smallest;
}

let testos = splitSum2([2, 2, 2, 2, 8])
console.log(testos)

module.exports = { splitSum1, splitSum2 };
