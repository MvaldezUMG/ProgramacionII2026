interface Persona {
    nombre: string;
    edad: number;
}

const marco = {nombre: "Marco", edad: 34};

function saludar (persona: Persona) {
    return `Hola, ${persona.nombre}`
}
//Inferencia de tipo
console.log(saludar(marco))