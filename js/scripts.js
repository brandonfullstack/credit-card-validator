// Business Logic

// function validator(number) {
//   let numberArray = number.split("").map(Number).reverse().filter((element, index) => {
//   return index % 2 === 0;
// });

// numberArray = numberArray.map(function(number) {
//   return number * 2;
// });

//   return numberArray;
// };


function validator(number) {
  let numberArray = number.split("").map(Number).reverse().filter((element, index) => {
  return index % 2 === 0;
});

numberArray = numberArray.map(function(number) {
  return number * 2;
});

numberArray = numberArray.forEach(function(element) {
   if (element.length === 2) {
    console.log("two digits");
   }

});

  return numberArray;
};