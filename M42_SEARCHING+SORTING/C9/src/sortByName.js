const sort = require("./sort");

/**
 * Sort the array of customers by first and last name
 * @param {array} customers
 */

function sortByName(customers) {
  customers = [...customers]
    .sort((cusA, cusB) => {
      const nameA = cusA.firstName.toLowerCase();
      const nameB = cusB.firstName.toLowerCase();
      if (nameA > nameB) return 1;
      if (nameA === nameB) return 0;
      return -1;
    })
    .sort((cusA, cusB) => {
      const nameA = cusA.lastName.toLowerCase();
      const nameB = cusB.lastName.toLowerCase();
      if (nameA > nameB) return 1;
      if (nameA === nameB) return 0;
      return -1;
    });
  return customers;
}

module.exports = sortByName;
