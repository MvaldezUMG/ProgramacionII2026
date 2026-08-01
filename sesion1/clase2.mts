//Importamos biblioteca para abrir archivos
import { readFile } from 'node:fs/promises';

function AsincronoConPromesas(): void{
    console.log("Hola desde clase 2");
    //Se debe indicar la codificacion de los caracteres.
    let textoPromise = readFile("demo.txt", 'utf-8');
    textoPromise.then((data: string)=> {
        console.log(data);
        console.log('Finalizado');
    })
}

//AsincronoConPromesas();
//console.log("Despues de ejecutar");
async function AsincronoConAwait(): Promise<void>{
 console.log("Hola desde clase 2");
 try {
    let texto = await readFile("demo.txt", "utf-8");
    console.log(texto); 
 }catch(err: Error){
    console.error("Ha ocurrido un error" + err)
 } 
}

AsincronoConAwait();
//console.log('Finalizado')


function usandoPromise(edad:number): Promise<number>{
    let promise: Promise<number> = new Promise((resolve, reject)=>{
        if (edad >= 18){
            resolve(edad)
        }
        else{
            reject("No cumplete la condicion")
        }
    });
    return promise
}

async function probandoPromise(): Promise<void>{
    try{
        let resultado = await usandoPromise(18);
        console.log(resultado);
    }catch(err){
        console.error(err)
    }
    
}
probandoPromise()

async function recuperarDatos(): Promise<any>{
    let fetchResult = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    let jsonResult = await fetchResult.json();
    return jsonResult
}

console.log("Datos recuperados", await recuperarDatos())