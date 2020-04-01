// Let ES6

// позволяют создавать переменнные, кооторые в последствии можем изменить, сделать pereassign

let a = 'variable a';
let b = 'variable b';

{
    a = 'New variable A'// we didn't use keyword 'let' => мы обращались к созданной переменной а
    let b = 'local variable B';// здесь же мы пересоздали переменную b, но только внутри этого scoope
    console.log('Scope A', a)
    console.log('Scope B', b)
} // in es6 create his own scoope
// let доступна только внутри блочного scoope, т.е. внутри фигурных скобок {}
console.log('A', a)
console.log('B', b)

// Const
//это не совсем константа

// const PORT = 8080
// PORT = 2000;// TypeError: Assignment to constant variable.

const array = ['Javascript', 'is', 'awesome']
array.push('!')// array has been changed 
array[0] = 'JS'
console.log(array)
//array = ''; так не можем написать

const obj = {}
obj.name = 'Artem'
obj.age = 25
console.log(obj)

obj.age = 25.25
delete obj.name // удаляем ключ с его значением

console.log(obj)