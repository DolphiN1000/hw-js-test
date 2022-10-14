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
// console.log(location); // Об'єкт location

// const country = user.location.country;
// console.log(country); // 'Jamaica'



// // ✅ Логічно і синтаксично згруповані сутності
// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // Це метод об'єкта
//   getBooks() {
//     console.log("Цей метод буде повертати всі книги - властивість books");
//   },
//   // Це метод об'єкта
//   addBook(bookName) {
//     console.log("Цей метод буде додавати нову книгу у властивість books");
//   },
// };

// // Виклики методів
// bookShelf.getBooks();
// bookShelf.addBook("Нова книга");

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     console.log(this);
//   },
// };

// // Перед крапкою знаходиться об'єкт bookShelf,
// // тому, викликаючи метод, this буде зберігати посилання на нього.
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
//   // Ключ
//   console.log(key);
//   // Значення властивості з таким ключем
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


const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const potion of this.potions) {
    if (newPotion.name === potion.name) { 
      return `Error! Potion ${newPotion.name} is already in your inventory!`;
    }
    }
       this.potions.push(newPotion);
    }
    ,
  removePotion(potionName) {
      const potionIndex = this.potions.indexOf(potionName);
      console.log(potionIndex );
    for (const potion of this.potions) {
        if (potionIndex === -1) {
      return `Potion ${potionName.name} is not in inventory!`;
    }
  
this.potions.splice(potionIndex, 1);
  
    }

    
  },
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);
    for (const potion of this.potions) {
       if (potionIndex === -1) {
      return `Potion ${oldName.name} is not in inventory!`;
    }
    }

   

    this.potions.splice(potionIndex, 1, newName);
  },
  // Change code above this line
};


atTheOldToad.getPotions()
