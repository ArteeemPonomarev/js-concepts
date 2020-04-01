// она же область видимости, глабальная, локальная

function funcA() {
    let a = 1

    function funcB() {
        let b = 2

        function funcC() {
            let c = 3

            console.log('funcC:', a, b, c)
        }
        funcC();
        console.log('funcB:', a, b)
    }
    funcB()
    console.log('funcA:', a)
}

funcA();// funcA содержит только переменную а, в funcB определена переменная b, но т.к. ф-ия находится в том же scoope что  и переменная а, то она тоже доступна funcB

