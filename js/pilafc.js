
function Pila(){
    this.tamano = 0;
    this.contenedor = [];
}

Pila.prototype.push = function(elemento){
    let size = this.tamano++;
    this.contenedor[size] = elemento;
    return this.elemento,
    this.contenedor[size];
}

// Funciona hasta el segundo clic
// Das click en pop y no se refleja en el print hasta el segundo clic 
// y ya despues funciona normal con un solo clic

Pila.prototype.pop = function(){
    let size = this.tamano, 
    deletedData;

    if (size) {
        deletedData = this.contenedor[this.size];

        delete this.contenedor[size];
        this.tamano--;

        return deletedData;
    }
};

Pila.prototype.peek = function(){
    let fila = this.contenedor[this.tamano - 1]
    return fila; 
}

Pila.prototype.size = function(){
    return this.tamano;
}

Pila.prototype.print = function(){
    return this.contenedor;
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