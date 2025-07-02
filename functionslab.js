//task one
function addStrings (str1, str2) {
    return str1 + str2;
};

console.log(addStrings("what's ", "up?!")); 


//task two
function addNumbers (num1, num2 = 15) {
    return num1 + num2;
};
console.log(addNumbers(5, 10)); //using both parameters
console.log(addNumbers(5)); //using default


//task three
const arrowFunction = (str1,str2) => {
    return str1 + str2;
};
console.log(arrowFunction("what's ", "up?!"));