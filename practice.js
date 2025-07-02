// rest parameter
function restParameterFunction(...restParameter){
    console.log(restParameter);
};
restParameterFunction("welcome", "to", "rest parameter",4,5, true, false);

//arrow function
function normalFunction (value) { //a normal and traditional function
    return value;
};

const arrowFunction = (value) => value; //arrow function
//you can use this simple version because it has only one parameter and one expression

//full verison of arrow function

//const arrowFunction = (value) => { 
   // return value;
//};
//console.log (arrowFunction("i am from the arrow function!"));

const arrowFunctionTwo = (paramOne, paramTwo, paramThree ="John") => {
    return paramOne + paramTwo + paramThree +".";
};
console.log(arrowFunctionTwo("my middle name ","is "));
