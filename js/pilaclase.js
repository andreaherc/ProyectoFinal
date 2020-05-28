// Clase - Pila
//  class Pila {
//     constructor() {
//         this.pila = [];
//     }

//     push(elemento) {
//             this.pila.push(elemento);
//             return this.pila[this.pila.length - 1]
//         } 
//     pop() {
//             return this.pila.pop();
//         } 
//     peek() {
//         return this.pila[this.pila.length - 1]
//     }
    // size() {
    //     return this.pila.length;
    // }
    // print() {
    //     return this.pila;
    // }
// }

// Objeto-Clase-Pila

class Pila{
    constructor(elemento){
        // cuando le pongo llaves como objeto el print no funciona por el foreach del recorrido y lo tengo que convertir a array
        this.pila = {}; 
        this.contador = 0;
        this.elemento = elemento;
    }

    push(elemento){
        this.pila[this.contador] = elemento;
        this.contador++
        return elemento;
    }

    pop(){
        let a = this.pila[this.contador-1]
        delete this.pila[this.contador-1]
        this.contador--
        return a
    }

    peek(){
        let a = this.pila[this.contador-1]
        return a
    }

    size() {
        return this.contador;
    }

    print() {
        return this.pila;
    }
}

const pila = new Pila();

let dato = document.getElementById("push");

let cuerpo = document.getElementById("cuerpo");

let div_c = document.getElementsByTagName("div");

let b_push = document.getElementById("b_push")
let b_peek = document.getElementById("b_peek")
let b_size = document.getElementById("b_size")
let b_print = document.getElementById("b_print")

function Push() {
    b_push.disabled = true;
    div = document.createElement("span");
    div.innerHTML = pila.push(dato.value);
    cuerpo.appendChild(div);
    setTimeout(() => {
            div.style.display = "none"
            b_push.disabled = false;
        }, 1000) 
}

function Pop() {
    pila.pop();
    cuerpo.removeChild(div_c[div_c.length - 1]) 
}

function Peek() {
    b_peek.disabled = true;
    let elemento = document.createElement("span");
    elemento.innerHTML = pila.peek();
    cuerpo.appendChild(elemento);
    setTimeout(() => {
        cuerpo.removeChild(elemento);
        b_peek.disabled = false;
    }, 1000)
}

function Size() {
    b_peek.disabled = true;
    let elemento = document.createElement("span");
    elemento.innerHTML = pila.size();
    cuerpo.appendChild(elemento);
    setTimeout(() => {
        cuerpo.removeChild(elemento);
        b_peek.disabled = false;
    }, 1000)
}

function Print() {

    pila.print().forEach((element) => {
        let articulo = document.createElement("span");
        articulo.innerHTML = element;
        cuerpo.appendChild(articulo);
        setTimeout(() => {
            cuerpo.removeChild(articulo);
        }, 1000)
    });
}
