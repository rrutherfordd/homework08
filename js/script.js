/*
var item = {
  "name": "",
  "price": "",
  "description": "",
  "imageTitle": ""
};
*/

var products = [
    {
      "name": "Reversible Plaid",
      "price": 26.99,
      "description": "Two classic patterns in one great look: This supersoft and cozy reversible scarf instantly doubles your street-style cred. 100% acrylic.",
      "imageTitle": "reversible-plaid.jpeg"
    },
    {
      "name": "Wool Cable Knit",
      "price": 49.99,
      "description": "Warm yourself with this women's natural cable knit scarf, crafted from 100% Merino wool. Imported.",
      "imageTitle": "wool-cable.jpeg"
    },
    {
      "name": "Northern Lights",
      "price": 29.99,
      "description": "Handmade by women in Agra, sales provide medical and educational support in this remote area of India. Crinkly 100% cotton.",
      "imageTitle": "northern-lights.jpeg"
    },
    {
      "name": "Ombre Infinity",
      "price": 11.99,
      "description": "A dip-dye effect adds color and dimension to a cozy infinity scarf featuring a soft, chunky knit. 100% acrylic.",
      "imageTitle": "ombre-infinity.jpeg"
    },
    {
      "name": "Fringed Plaid",
      "price": 18.99,
      "description": "Generously sized, extra soft and featuring a dazzling fringe, this scarf is rendered in a versatile gray, black and white plaid. Expertly beat the cold with style. 100% acrylic.",
      "imageTitle": "fringed-plaid.jpeg"
    },
    {
      "name": "Multi Color",
      "price": 22.99,
      "description": "The Who What Wear Oversize Color-Block Square Scarf is big, bold, and designed to twist and wrap any way you wish. All the colors of the season are harmonized in this oversize accent, so you can adjust to contrast or match your outfit; it's your stylish stnadoff against cold AC and unexpected fall breezes. 100% acrylic",
      "imageTitle": "multi-color.jpeg"
    },
    {
      "name": "Etro Paisley-Print Silk",
      "price": 249.99,
      "description": "Luxurious silk scarf with subtle paisley pattern. 100% silk",
      "imageTitle": "etro.png"
    },
    {
      "name": "Ashby Twill",
      "price": 70.99,
      "description": "Faribault brings you the Ashby Twill Scarf in Natural. Woven with a 'broken' twill technique, the Ashby Twill Scarf has a slight zigzag texture. Made in USA, this timeless scarf is crafted with luxurious merino wool and finished with heather gray fringe. 100% Merino wool",
      "imageTitle": "twill.jpeg"
    }
  ];

var productsSortedByName = [], productsSortedByPrice = [];

/* ++ http://stackoverflow.com/questions/18238173/javascript-loop-through-json-array ++ */

var key;

/*
for (key in products) {
  if (products.hasOwnProperty(key)) {
    //window.alert(products[key].name);
    //window.alert(products[key].description);
    //window.alert(products[key].price);
    //window.alert(products[key].imageTitle);
    window.console.log(key + ": " + products[key].name);
    window.console.log(key + ": " + products[key].description);
    window.console.log(key + ": " + products[key].price);
    window.console.log(key + ": " + products[key].imageTitle);
  }
}
*/


function sumPrices(cartArray) {
  "use strict";
  var total, i;
  total = i = 0;
  for (i = 0; i < cartArray.length; i += 1) {
    window.console.log(cartArray[i].price);
    total = total + cartArray[i].price;
  }
  window.console.log(total);
}

var cart = [ ];

function insertAnswer(answer) {
  'use strict';
    
  cart.push(answer);
  window.console.log(cart);
  event.preventDefault();
}

function removeAnswer(answer) {
  'use strict';
  var index = cart.indexOf(answer);
  
  if (index >= 0) {
    cart.splice(index, 1);
  }
  window.console.log(cart);
  event.preventDefault();
}

function compareNames(item1, item2) {
  'use strict';
  if (item1.name > item2.name) {
    return 1;
  } else if (item1.name === item2.name) {
    return 0;
  } else {
    return -1;
  }
}
  
function comparePrices(item1, item2) {
  'use strict';
  if (item1.price > item2.price) {
    return 1;
  } else if (item1.price === item2.price) {
    return 0;
  } else {
    return -1;
  }
}

function sortProductsByName() {
  'use strict';
  var nkey;
  productsSortedByName = products.sort(compareNames);
  window.alert("# of names: " + productsSortedByName.length);
  window.console.log(productsSortedByName);
  for (nkey in productsSortedByName) {
    if (productsSortedByName.hasOwnProperty(nkey)) {
      window.console.log(key + ": " + products[nkey].name);
      window.console.log(key + ": " + products[nkey].description);
      window.console.log(key + ": " + products[nkey].price);
      window.console.log(key + ": " + products[nkey].imageTitle);
    }
  }
  event.preventDefault();
}

function sortProductsByPrice() {
  'use strict';
  var pkey;
  productsSortedByPrice = products.sort(comparePrices);
  window.alert("# of names: " + productsSortedByPrice.length);
  window.console.log(productsSortedByName);
  for (pkey in productsSortedByPrice) {
    if (productsSortedByPrice.hasOwnProperty(pkey)) {
      window.console.log(key + ": " + products[pkey].name);
      window.console.log(key + ": " + products[pkey].description);
      window.console.log(key + ": " + products[pkey].price);
      window.console.log(key + ": " + products[pkey].imageTitle);
    }
  }
  event.preventDefault();
}


/* ++ http://stackoverflow.com/questions/18238173/javascript-loop-through-json-array ++ */

function capture() {
  "use strict";
  var key;
  window.console.log("Submit capture");
  window.console.log(document.productFilter.filter.value);
  if (document.productFilter.filter.value === 'price') {
    window.console.log(products.sort(comparePrices));
  } else if (document.productFilter.filter.value === 'name') {
    window.console.log(products.sort(compareNames));
  } else {
    window.alert("No comparison selection");
  }
  /* DEBUG
  for (key in products) {
    if (products.hasOwnProperty(key)) {
      window.console.log(key + ": " + products[key].name);
      window.console.log(key + ": " + products[key].description);
      window.console.log(key + ": " + products[key].price);
      window.console.log(key + ": " + products[key].imageTitle);
    }
  }
  */
  event.preventDefault();
}

//sortProductsByName();

//sortProductsByPrice();