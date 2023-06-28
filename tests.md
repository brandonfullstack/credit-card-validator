Describe: validator();

Test: "It will return an error if alphabetical characters are entered."
Code: validator(\^[a-z]\gi);
Expected Output: "Numbers only, please."

Test: It should double every other digit.
Code:
function validator(number) {
    const numberArray = number.split("").map(number).reverse();
    return numberArray;
};



Input:  4102 0808 8043 5620
Output: 4204 0707 8046 5320
