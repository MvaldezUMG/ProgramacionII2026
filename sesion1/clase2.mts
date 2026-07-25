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


