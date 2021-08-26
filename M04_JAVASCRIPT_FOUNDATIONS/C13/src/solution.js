/*
  The following functions have various syntax errors in them. Fix the bugs to get the tests to pass!
  
  When any of the following function's parameters reference `products`, they are referencing an array full of objects with the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ],
     quantity: 0
   }
   
  When any of the following function's parameters reference `product`, they are referencing an object with the above shape.
*/

function printablePrice(priceInCents) {
  const amount = (priceInCents / 100).toFixed(2);
  return `$${amount}`;
}

function chooseItemByNameAndSize(products, name, size) {
  let product = null;
  for (let item of products) {
    if (item.name === name && item.availableSizes.includes(size)) {
      return (product = item);
    }
  }
  return product;
}

function addProductToCart(product, cart = {}) {
  let name = product.name;
  let cents = product.priceInCents;
  if (cart.length === 0) {
    return { name: { quantity: 1, priceInCents: cents } };
  } else if (cart.hasOwnProperty(name)) {
    cart[name].quantity += 1;
    return cart;
  } else {
    cart[name] = { quantity: 1, priceInCents: cents };
    return cart;
  }
}

function calculateTotal(cart) {
  let sum = 0;
  for (let product in cart) {
    sum += cart[product].priceInCents * cart[product].quantity;
  }
  return sum;
}

function printReceipt(cart = {}) {
  let reciept = null;
  if (Object.keys(cart).length === 0) {
    return reciept;
  } else {
    reciept = [];
    for (let item in cart) {
      product = cart[item];
      reciept.push(
        `${product.quantity}x${item} - ${printablePrice(
          product.priceInCents * product.quantity
        )}`
      );
    }
    reciept = reciept.join("\n");
    return (reciept += `\nTotal: ${printablePrice(calculateTotal(cart))}`);
  }
}

module.exports = {
  chooseItemByNameAndSize,
  addProductToCart,
  calculateTotal,
  printReceipt,
};
