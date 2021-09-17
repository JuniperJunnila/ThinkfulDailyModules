/**
 * Use a binary search to find the customer with given name
 * @param {string} firstName
 * @param {string} lastName
 * @param {array} customers
 */
function searchByName(firstName, lastName, customers) {
  if (!Array.isArray(customers) || customers.length === 0) return -1;
  firstName = firstName.toLowerCase();
  lastName = lastName.toLowerCase();

  let lowerI = 0;
  let upperI = customers.length - 1;
  while (lowerI <= upperI) {
    const currentI = Math.floor((upperI + lowerI) / 2);
    const customer = customers[currentI];
    const cFirstName = customer.firstName.toLowerCase();
    const cLastName = customer.lastName.toLowerCase();
    if (cFirstName === firstName && cLastName === lastName) {
      return currentI;
    } else if (cLastName === lastName) {
      if (cFirstName > firstName) upperI = currentI - 1;
      lowerI = currentI + 1;
    }
    if (cLastName > lastName) upperI = currentI - 1;
    if (cLastName < lastName) lowerI = currentI + 1;
  }
  return -1;
}

module.exports = searchByName;
