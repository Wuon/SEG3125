const selectedRestrictions = new Set()

// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
  {
    name: "brocoli",
    vegetarian: true,
    glutenFree: true,
    isOrganic: true,
    price: 1.99,
    src: './assets/broccoli.png',
    category: 'Vegetable'
  },
  {
    name: "bread",
    vegetarian: true,
    glutenFree: false,
    isOrganic: true,
    price: 2.00,
    src: './assets/bread.png',
    category: 'Grain'
  },
  {
    name: "bread (gluten-free)",
    vegetarian: true,
    glutenFree: true,
    isOrganic: true,
    price: 4.00,
    src: './assets/bread.png',
    category: 'Grain'
  },
  {
    name: "salmon",
    vegetarian: false,
    glutenFree: true,
    isOrganic: true,
    price: 10.00,
    src: './assets/salmon.png',
    category: 'Fish'
  },
  {
    name: "imitation salmon",
    vegetarian: true,
    glutenFree: true,
    isOrganic: true,
    price: 13.00,
    src: './assets/salmon.png',
    category: 'Fish'
  },
  {
    name: "avocado",
    vegetarian: true,
    glutenFree: true,
    isOrganic: true,
    price: 3.00,
    src: './assets/avocado.png',
    category: 'Fruit'
  },
  {
    name: "strawberry",
    vegetarian: true,
    glutenFree: true,
    isOrganic: false,
    price: 7.00,
    src: './assets/strawberry.png',
    category: 'Fruit'
  },
  {
    name: "banana",
    vegetarian: true,
    glutenFree: true,
    isOrganic: true,
    price: 0.50,
    src: './assets/banana.png',
    category: 'Fruit'
  },
  {
    name: "apple",
    vegetarian: true,
    glutenFree: true,
    isOrganic: true,
    price: 1.15,
    src: './assets/apple.png',
    category: 'Fruit'
  },
  {
    name: "pear",
    vegetarian: true,
    glutenFree: true,
    isOrganic: false,
    price: 3.33,
    src: './assets/pear.png',
    category: 'Fruit'
  },
  {
    name: "tuna",
    vegetarian: false,
    glutenFree: true,
    isOrganic: true,
    price: 13.00,
    src: './assets/tuna.png',
    category: 'Fish'
  },
  {
    name: "rice",
    vegetarian: true,
    glutenFree: false,
    isOrganic: true,
    price: 20.00,
    src: './assets/rice.png',
    category: 'Grain'
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
  for (let i = 0; i < chosenProducts.length; i += 1) {
    totalPrice += chosenProducts[i]
  }
  const formattedPrice = (Math.round(totalPrice * 100) / 100).toFixed(2);
  return formattedPrice;
}
