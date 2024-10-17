// 1. Introducción a javascript
// Ejercicio 2
const a = 5;
const b = 10;
let c = a + b;

console.log("La suma de las variables a y b es: "+c);

// Ejercicio 3
let nombre = window.prompt("¿Cual es tu nombre?");
console.log("Hola, "+nombre+"!");

// Operadores Lógicos
// Ejercicio 1
const d = 6;
const e = 7;
let f = 0;

if (d < e) {
    f += e;
    console.log("El mayor de los numeros es: "+ f);
} else if (d > e) {
    f += d;
    console.log("El mayor de los numeros es: "+f);
} else {
    console.log("Ambos numeros son iguales");
}

//Ejercicio2
let numero = window.prompt("Ingresa un numero y te dire si es par o impar");
if (numero%2 == 0){
    console.log("El numero "+numero+" es par");
}else{
    console.log("El numero "+numero+" es impar");
}


// Operadores de asignación y bucles
//Ejercicio1
let g = 10;
console.log("Ejercicio3");
while (g != 0) {
    console.log(g);
    g--;
}
//Ejercicio2
let mayoracien = window.prompt("Ingresa un número mayor a 100:");
do {
    if (mayoracien <= 100) {
        mayoracien = window.prompt("El número ingresado no es mayor a 100. Intenta de nuevo:");
    }
} while (mayoracien <= 100);
console.log("Ingresaste un número mayor a 100: " + mayoracien);

//Funciones de JavaScript
//Ejercicio1
let numeroparimpar = 2;

function esPar() {
    let esNumeroPar;
    if (numeroparimpar % 2 == 0) {
        esNumeroPar = true;  
    } else {
        esNumeroPar = false;
    }
    console.log("El número " + numeroparimpar + " es par: " + esNumeroPar);
}

//Ejercicio2
function convertirCelsiusAFahrenheit(){
    let celcius = 30;
    let fahrenheit = 0;
    fahrenheit = celcius*1.8 +32;
    console.log(celcius+"°C son equivalentes a "+fahrenheit+"°F");
}
convertirCelsiusAFahrenheit();

//Objetos en Javascript
//Ejercicio1
let persona = {
    nombre: "Ana",
    edad: 30, 
    ciudad: "Madrid",
    imprimirdatos: function() {
        console.log("Persona: " + this.nombre + " Edad: " + this.edad + " Ciudad: " + this.ciudad);
    },
    actualizarciudad: function(nuevaCiudad) {
        this.ciudad = nuevaCiudad;
    }
}

persona.imprimirdatos();

persona.actualizarciudad("Barcelona");

persona.imprimirdatos();

//Ejercicio2
let libro = {
    titulo:"El Quijote",
    autor: "Miguel de Cervantes",
    año:1605,
    antiguetad: function(){
        let esAntiguo;
        if( 2024 - this.año >= 10){
            esAntiguo = true
        }else{esAntiguo = false}
        return esAntiguo;
    },

    muestraAntiguedad: function(){
        let esAntiguo = this.antiguetad();
        console.log("El libro: "+this.titulo+" es antiguo: "+esAntiguo);
    }
}
libro.muestraAntiguedad();

//Arrays
//Ejercicio1
let arraynumeros = [1,2,3,4,5,6,7,8,9,10];
console.log("Numeros originales: "+arraynumeros);

let arraymultiplicados = arraynumeros.map(elemento => elemento*2);
console.log("Numeros multiplicados por 2: "+arraymultiplicados);

//Ejercicio2
let pares = [];
for(let i = 0; i < 20; i++){
    if(i%2 === 0){
        pares.push(i);
    }
    if (pares.length ===10){break}
}
console.log("Primeros 10 números pares: "+pares);

//Introducción al DOM
//Ejercicio1
const parrafos = document.querySelectorAll(".parrafos");

const cambiocolor = () => {
    parrafos.forEach(parrafo => {
        parrafo.classList.add("blue");
        console.log("Clase 'blue' añadida al párrafo");
    });
}

const buttonC = document.getElementById("cambiocolor");
buttonC.addEventListener("click", cambiocolor);

//Ejercicio2
const inputTexto = document.getElementById("inputmensaje");
const buttonA = document.getElementById("mostrarAlerta");
buttonA.addEventListener(("click"),()=>{
    const mensajeingresado = inputTexto.value;
alert ("Has ingresado: "+ mensajeingresado);
});

//Eventos en DOM
//Ejercicio1
const elementos = document.getElementsByClassName("lista elementos");
for (let i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener("click", () => {
        console.log("Elemento " + (i+1));
    });
}

const inputtexto = document.getElementById("inputhabdeshab");
const buttonD = document.getElementById("deshabilitar");
const buttonH = document.getElementById("habilitar");
buttonD.addEventListener(("click"),()=>{
    inputtexto.disabled = true;
})
buttonH.addEventListener(("click"),()=>{
    inputtexto.disabled = false;
})

//LocalStorage
//Ejercicio1
const emailInput = document.getElementById('email');
const guardarCorreoBtn = document.getElementById('guardarCorreo');
const eliminarCorreoBtn = document.getElementById('eliminarCorreo');
const correoGuardadoP = document.getElementById('correoGuardado');


function cargarCorreoGuardado() {
    const correoGuardado = localStorage.getItem('correo');
    if (correoGuardado) {
        correoGuardadoP.textContent = "Correo guardado: " + correoGuardado;
        emailInput.value = correoGuardado;
    } else {
        correoGuardadoP.textContent = "Correo guardado: "; 
    }
}

cargarCorreoGuardado();
guardarCorreoBtn.addEventListener('click', function() {
    const email = emailInput.value; 
    if (email) {
        localStorage.setItem('correo', email); 
        correoGuardadoP.textContent = "Correo guardado: " + email; 
    } else {
        alert("Por favor ingresa un correo electrónico válido.");
    }
});

eliminarCorreoBtn.addEventListener('click', function() {
    localStorage.removeItem('correo'); 
    correoGuardadoP.textContent = "Correo guardado: "; 
    emailInput.value = ""; 
});