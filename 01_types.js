// база с которой стоит начинать изучение
// in JS there ara 7 types of data
//null, undefined, boolean, string, number, object, symbol, all of these are primitive,beside object
// console.log(typeof(0));
// console.log(typeof true);
// console.log(typeof 'Javascript'); // "", '', ``
// console.log(typeof undefined); 
// console.log(typeof Math); 
// console.log(typeof Symbol); 
// console.log(typeof null); // null is 'null' type of data, this is incorrect in function typeof
// console.log(typeof function() {});
// console.log(typeof NaN);// Not a Number, but type is number  (1/0)=Infinity
//difference null and undefiend
//функции, которые ничего не возвращают, по умолчанию возвращают undefined, так же используется тогда, когда переменная 
//не объявлена с помощью ключевого слова var, но у нее нет никакого значения 
//null говорит о том, что переменная объявлена, но пустая

// // Преведение типов
// let language = 'Javascript'
// if (language) {
//     console.log('The best language is:', language);
// }
// //falthy values: "", 0, null, undefined, NaN, false, при приведениее к boolean
// console.log(Boolean(0));//false
// console.log(Boolean('Hello'));//true
// console.log(Boolean(' ')); //true
// console.log(Boolean('0')); //true
// console.log(Boolean(null)); //false
// console.log(Boolean([])); //true
// console.log(Boolean({})); //true
// console.log(Boolean(()=>{})); //true

// Strings and Numbers

// console.log(1+ '2'); // '12' concattination of strings with operator '+'
// console.log('' + 1 + 0);//'10'
// console.log('' - 1 + 0);// -1 with '-' all letters are number
// console.log('3' * '8');// for string is not an operator such '*', also '-'
// console.log(3 + 10 + 'px');//'13px' order is important
// console.log('px' + 5+ 10);// 'px510'
// console.log('32' - 20);//12 because '-' is not for string 
// console.log('32px' - 12);// Nan< because is imposible convert string to number, srtind bacame a NaN,and any operation with NaN will be NaN
// console.log(null - 2);// -2; null to numder = 0
// console.log(undefined + 32);//NaN, undefined to number = NaN


// == vs ===
// == - сравнивает значения с приведением типов, JS интерпретатор пытается привести типы при сравнении
// === - сравнивает значения без приведения типов,"строгое" сравнение, болкк точное

// console.log(2 == '2');// true JS interpreter to one type
// console.log(2 === '2');//false
// console.log(undefined == null);//true
// console.log(undefined === null);//false different types of data
// // recomend is always use '===', 

// console.log('0' == false);// to number, '0'=0, false = 0
// console.log(Number('0'));
// console.log('0' == 0);
// console.log(0 === 0);

// =====

// список неодназначных сравнений, которые могут спросить на собеседовании
// console.log(false == '');//true
// console.log(false == []);
// console.log(false == {});
// console.log('' == 0);
// console.log('' == []);
// console.log('' == {});
// console.log(null == 0);
// console.log(0 == []);
// console.log(0 == {});









