// function calculateTotal(number) {
//     // Change code below this line
//     let total = 0;
//      for (let i = 0; i <= number; i +=1) {
//      total += i;
//      console.log(i)
//    }
//    return total;
//      // Change code above this line
//    }

//    console.log(calculateTotal(2));
//    console.log(calculateTotal(5));
//    console.log(calculateTotal(30));
//    console.log(calculateTotal(10));

// function findLongestWord(string) {
//   // Change code below this line
//   const words = string.split(" ");
//   let word = words[0];
//   const wordsCount = words.length;
//   for (i = 0; i < wordsCount; i += 1) {
//     if (word.length < words[i].length) {
//       word = words[i];
//       // console.log(words[i]);      
//     }
   
//   }
//  return word;
//   // Change code above this line
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
// for (let i of order)
//  {
//     total += order[i];
//   }

//   // Change code above this line
//   return total;
// }


// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }

//   // Change code above this line
//   return total;
// }

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const i of order) {
//     total += i;
//   }

//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([0]));


// function includes(array, value) {
//   // Change code below this line
// for (arr of array) {
//    if (arr === value) {
//     return true;
//    } }
//    return false
//   // Change code above this line
// }
// console.log(includes([1, 2, 3, 4, 5], 3))
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"))


// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swiming", "music", "sci-fi"],
// };

// const location = user.location;
// console.log(location); // ????'?????? location

// const country = user.location.country;
// console.log(country); // 'Jamaica'



// // ??? ?????????????? ?? ?????????????????????? ???????????????????? ????????????????
// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // ???? ?????????? ????'????????
//   getBooks() {
//     console.log("?????? ?????????? ???????? ?????????????????? ?????? ?????????? - ?????????????????????? books");
//   },
//   // ???? ?????????? ????'????????
//   addBook(bookName) {
//     console.log("?????? ?????????? ???????? ???????????????? ???????? ?????????? ?? ?????????????????????? books");
//   },
// };

// // ?????????????? ??????????????
// bookShelf.getBooks();
// bookShelf.addBook("???????? ??????????");

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     console.log(this);
//   },
// };

// // ?????????? ?????????????? ?????????????????????? ????'?????? bookShelf,
// // ????????, ???????????????????? ??????????, this ???????? ?????????????????? ?????????????????? ???? ??????????.
// bookShelf.getBooks(); // {books: ['The Last Kingdom'], getBooks: f}

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// bookShelf.removeBook("The Mist");
// console.log(bookShelf.getBooks()); //

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // ????????
//   console.log(key);
//   // ???????????????? ?????????????????????? ?? ?????????? ????????????
//   console.log(book[key]);
// }


// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];
// // Change code above this line
// console.log(numberOfTags)

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = '';
// apartment.location.country = "Jamaica";
// apartment.location.city = "Kingston";

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
// for (productName of products) {
//   if (productName === products.name) {
//     console.Log(products.price)
//     return products.price;
    
//   }
// }


//   // Change code above this line
// }



// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {highYesterday, highToday, highTomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;
// console.log(highTemperatures)

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log((highYesterday + highToday + highTomorrow) / 3)

// const atTheOldToad = {
//   // Change code below this line
// potions : []
//   // Change code above this line
// };
// console.log(atTheOldToad.potions)

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
// const indexName = this.potions.indexOf(potionName);
//     this.potions.splice(indexName, 1);
// console.log(this.potions)
// return this.potions
//     // Change code above this line
//   },
// };


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion({name, price,}) {
//     if (this.potions.includes(name, price)) {
//       return `Error! Potion ${name, price} is already in your inventory!`;
//     }

//     this.potions.push(name, price);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };
// console.log(atTheOldToad.getPotions())
// console.log(atTheOldToad.addPotion("Speed potion"))
// atTheOldToad.addPotion({ name: "Dragon breath", price: 780 })
// atTheOldToad.addPotion({ name: "Invisibility", price: 620, year: 2000 })
// atTheOldToad.addPotion({ name: "Stone skin", price: 240 })
// console.log(atTheOldToad.getPotions())


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//     if (newPotion.name === potion.name) { 
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }
//     }
//        this.potions.push(newPotion);
//     }
//     ,
//   removePotion(potionName) {
//       const potionIndex = this.potions.indexOf(potionName);
//       console.log(potionIndex );
//     for (const potion of this.potions) {
//         if (potionIndex === -1) {
//       return `Potion ${potionName.name} is not in inventory!`;
//     }
  
// this.potions.splice(potionIndex, 1);
  
//     }

    
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);
//     for (const potion of this.potions) {
//        if (potionIndex === -1) {
//       return `Potion ${oldName.name} is not in inventory!`;
//     }
//     }

   

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };


// atTheOldToad.getPotions()

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     for (const pizza of pizzaPalace.pizzas) {
//       console.log(pizza);
//     if (!pizzaName === pizza) {
//       onOrderError(pizzaName); {console.log(`There is no pizza with a name {$pizzaName} in the assortment.`);
//       }
//     }
//       else {
//         makePizza(pizzaName);
//       }
//     }}

//   }
// ;
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line
  
//   if (firstArray.length <= secondArray.length) {
//     let firstArrays = secondArray;
//     let  secondArray = firstArray;
//   } else {
//     let firstArrays = firstArray;
//     let secondArrays = secondArray;
//   }
// firstArrays.forEach(function(firstArr) {
//   secondArrays.forEach(function(secondArr) {
//     if (firstArr === secondArr) {
//       commonElements.push(firstArr)
//     }
//   })
// })
  

//   return commonElements;
//   // Change code above this line
// }

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]

const gender = "female"

// Change code below this line
const getTotalBalanceByGender = (users, gender) => [...users]
  .filter(user => user.gender === gender)
  .flatMap(user => user.balance)
  .reduce((acc, index) => {return acc + index}, 0);


// Change code above this line
// console.log(getTotalBalanceByGender([
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]))
console.log(getTotalBalanceByGender(users, gender))