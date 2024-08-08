// let - создание переменной; (название переменной не может начинаться с цифры, а также не может содержать дефис)
        
let num = 42

let firstName = 'Danil'

const isProgrammer = true

firstName = 'Polina'

// alert(firstName)
// console.log("test: ", firstName, isProgrammer)

// console.log(num + 10)
// console.log(num - 10)
// console.log(num * 10)
// console.log(num / 10)

const answerElement = document.getElementById("answer")

const num1 = document.getElementById("num1")

const num2 = document.getElementById("num2")

const button = document.getElementById("decision")

const plus = document.getElementById("plus")

const minus = document.getElementById("minus")

const um = document.getElementById("um")

const del = document.getElementById("del")

let power = '+'

plus.onclick = function () {
    power = '+'
}

minus.onclick = function () {
    power = '-'
}

um.onclick = function () {
    power = '*'
}

del.onclick = function () {
    power = '/'
}


// console.log(typeof sum)

button.onclick = function () {
    if (power == '+') {
        const sum = Number(num1.value) + Number(num2.value) 

        answerElement.textContent = sum
    }
    
    if (power == '-') {
        const sum = Number(num1.value) - Number(num2.value) 

        answerElement.textContent = sum
    }

    if (power == '*') {
        const sum = Number(num1.value) * Number(num2.value) 

        answerElement.textContent = sum
    }

    if (power == '/') {
        const sum = Number(num1.value) / Number(num2.value) 

        answerElement.textContent = sum
    }
}
