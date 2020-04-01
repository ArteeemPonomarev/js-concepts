// замыканеи это момент, когда функция имеет доступ до переменных из вышестоящего scoope

// function sayHelloTo(name) {
//     const message = 'Hello ' + name

//     return function () {// anonymos function
//         console.log(message) // функции имеет доступ к переменным вышестоящего scoope, даже если мы их сюда не передаем
//     }
// }

// const helloToElena = sayHelloTo('Elena');// переменная содержит результат работы функции sayHelloTo
// console.log(helloToElena);
// console.log(helloToElena());// получаем также undefined потому что анонимная функция ничего не возвращает, а только выводит на экран сообщение

function createFrameworkManager() {
    const fw =['Angular', 'React']

    return {
        print: function(){
            console.log(fw.join(' '))
        },
        add: function(framework) {
            fw.push(framework)
        }
    }
}

const manager = createFrameworkManager()
manager.print()
manager.add('VueJS')

manager.print();

// setTimeout

const fib = [1, 2, 3, 5, 8, 13]

for (var i = 0; i < fib.length; i++) { // чтобы починить меняем var на let
    setTimeout(function () {
        console.log(`fib[${i}] = ${fib[i]}`)
    }, 1500)
}