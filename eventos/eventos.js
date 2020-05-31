const Events = require("events")

class Alumno {

    constructor() {
        this.notas = []
        this.emitter = new Events.EventEmitter;
    }

    agregarNota(nota) {
        this.notas.push(nota);
        if (nota >= 6) {
            this.emitter.emit("aprobado", { nota, alumno: this })
        } else {
            this.emitter.emit("desaprobado", { nota, alumno: this })
        }
    }
}

const alguien = new Alumno()

alguien.emitter.on("desaprobado", () => {
    console.log("estudiar mas")
})

alguien.agregarNota(10)

