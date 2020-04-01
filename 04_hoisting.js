// Important topic for JS, show us how interpritor work
// console.log(sum(1, 42));


// function sum(a, b) {
//     return a + b
// }



// JS позволяет вызвать функциию sum до того, как мы ее определили
// hoisting это когда JS при интерпритации какого-либо файла берет и перемещает определение
// каких-либо веще: функциий в начало файла, т. е. мы можем к ним обращать до того как мы их определили

// what we need to rnow about hoisting

// console.log(i);// undefined, why?
// var i = 42;

//variables 'const', 'let' не подвержены hoisting'y
// console.log(num);// we get mistake(error)
// const num = 425;// also for  'let'
// console.log(num);

//Function Expression & Function declaration
console.log(square(25));
// function square(num) { //подобный способ создания функций - Function Declaration
//     return num**2
// }

const square = function (num) {//Function expression, we can/t вызвать ее до объявленяи
    return num**2
}

