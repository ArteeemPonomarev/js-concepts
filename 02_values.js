//Mutatrors

// let a = 32;
// let b = a;
// b++
// console.log('a', a)
// console.log('b', b)

// let a = [1,2,3];
// let b = a.concat();// мы не значение скопировали, а ссылку, при изменении переменной b меняет а, we can use method .concat, variable work isolate and don't mutate
//  b.push(8);//метод .concat()  без параметров он бере и возвращает копии массива 
//  console.log('a', a);// both arrays content '8'
//  console.log('b', b);//

 let a = [1,2,3];
let b = a;
 b.push(8);

 let c = [1, 2, 3, 8 ];

 console.log('a', a);// both arrays content '8'
 console.log('b', b);//

 console.log(a === b);// передача значений как reference
 console.log(a === c);// different array
