abstract class TareaBase {
    public titulo: string;
    public completada: boolean = false;
    
    constructor(titulo: string){
        this.titulo = titulo;
    }
    completar(): void {
        this.completada = true
    }
    //Quienes hereden estan obligados a implementarlo el metodo.
    abstract mensajeProgreso(): string;
}

class TareaSimple extends TareaBase {
    constructor(titulo: string, dificultad: number){
        super(titulo)
    }
    mensajeProgreso(): string {
        return this.completada ? "Tarea hecha" : "Pendiente por hacer"
    }
}

class TareaRecurrente extends TareaBase {
    constructor(titulo: string, public frecuenciaDias: number){
        super(titulo)
    }
    mensajeProgreso(): string {
        return this.completada ? "Esperando la proxima repeticion": 
                                 `Repetir cada ${this.frecuenciaDias} dias`
    }
}