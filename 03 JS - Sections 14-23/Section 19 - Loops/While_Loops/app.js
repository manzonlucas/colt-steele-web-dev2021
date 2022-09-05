// let count = 0;
// while (count < 10) {
//     count++;
//     console.log(count)
// }

// let guess = prompt("Adivina la contraseña!").toLowerCase();
// while (guess !== "lucas") {
//     guess = prompt("Adivina la contraseña!").toLowerCase();
// }

// let input = prompt("Hola!");
// while (true) {
//     input = prompt(input);
//     if (input === "stop") {
//         alert("ok i will stop");
//         break;
//     }
// }




let max = parseInt(prompt("Ingresa un numero, este va a definir la dificultad de la adivinanza!"));
while (!max) {
    max = parseInt(prompt("Por favor, ingresa un numero válido"));
}
console.log("Max = " + max);

let randomNum = Math.floor(Math.random() * max) + 1;
// console.log(randomNum);

let guess = parseInt(prompt("Adivina tu número!"));
let attempts = 1;


while (parseInt(guess) !== randomNum) {
    if (guess === "q") {
        break;
    }
    attempts++;
    if (guess < randomNum) {
        guess = prompt("Tu número es muy bajo! Probá de nuevo");
    } else {
        guess = prompt("Tu número es muy alto! Probá de nuevo");
    }
}
if (guess === "q") {
    alert("Juego terminado");
} else {
    if (attempts === 1) {
        alert(`Felicitaciones, adivinaste! Te tomó ${attempts} intento.`);
    } else {
        alert(`Felicitaciones, adivinaste! Te tomó ${attempts} intentos.`);
    }
}






// for (let i = 0; i < 1000; i++) {
//     console.log(i);
//     if (i === 100) break;
// }

// let maximum = parseInt(prompt("Enter the maximum number!"));
// while (!maximum) {
//     maximum = parseInt(prompt("Enter a valid number!"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;

// let guess = parseInt(prompt("Enter your first guess!"));
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//     if (guess === 'q') break;
//     attempts++;
//     if (guess > targetNum) {
//         guess = prompt("Too high! Enter a new guess:");
//     } else {
//         guess = prompt("Too low! Enter a new guess:");
//     }
// }

// if (guess === 'q') {
//     console.log("OK, YOU QUIT!")
// } else {
//     console.log("CONGRATS YOU WIN!")
//     console.log(`You got it! It took you ${attempts} guesses`)
// }