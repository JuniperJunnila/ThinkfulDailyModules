/**
 * Return the index of the customer with given email, otherwise -1.
 * @param {string} email The email address to search for
 * @param {*} customers The array to search
 */
function searchByEmail(email, customers) {
  return customers.findIndex((customer) => customer.email === email);
}

module.exports = searchByEmail;
