const selectedRestrictions = new Set()

// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
  {
    name: "brocoli",
    vegetarian: true,
    glutenFree: true,
    isOrganic: false,
    price: 1.99
  },
  {
    name: "bread",
    vegetarian: true,
    glutenFree: false,
    isOrganic: true,
    price: 2.00
  },
  {
    name: "salmon",
    vegetarian: false,
    glutenFree: true,
    isOrganic: true,
    price: 10.00
  },
  {
    name: "avacado",
    vegetarian: true,
    glutenFree: true,
    isOrganic: true,
    price: 3.00
  },
  {
    name: "strawberry",
    vegetarian: true,
    glutenFree: true,
    isOrganic: false,
    price: 7.00
  },
  {
    name: "banana",
    vegetarian: true,
    glutenFree: true,
    isOrganic: true,
    price: 0.50
  },
  {
    name: "apple",
    vegetarian: true,
    glutenFree: true,
    isOrganic: true,
    price: 1.15
  },
  {
    name: "pear",
    vegetarian: true,
    glutenFree: true,
    isOrganic: false,
    price: 3.33
  },
  {
    name: "tuna",
    vegetarian: false,
    glutenFree: true,
    isOrganic: true,
    price: 13.00
  },
  {
    name: "rice",
    vegetarian: true,
    glutenFree: false,
    isOrganic: true,
    price: 20.00
  },
];

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods) {
  let filteredProducts = [];
  for (let i = 0; i < prods.length; i += 1) {
    if ((selectedRestrictions.has("Vegetarian")) && (prods[i].vegetarian == false)){
      continue;
    }
    if ((selectedRestrictions.has("GlutenFree")) && (prods[i].glutenFree == false)){
      continue;
    }
    if ((selectedRestrictions.has("Organic")) && (prods[i].isOrganic == false)){
      continue;
    }
    filteredProducts.push(prods[i]);
  }
  return filteredProducts;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
  totalPrice = 0;
  for (let i = 0; i < products.length; i += 1) {
    if (chosenProducts.indexOf(products[i].name) > -1) {
      totalPrice += products[i].price;
    }
  }
  return totalPrice;
}
