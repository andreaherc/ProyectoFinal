function Cola(){
    // this.elemento = elemento;
    this.elementoF = 0;
    this.elementoN = 0;
    this.contenedor = [];
}

// indefinido el elemento
Cola.prototype.enqueue = function(elemento){
    this.contenedor[this.elementoN] = elemento;
    this.elementoN++;
    return this.elemento,
    this.contenedor[elemento];
}

Cola.prototype.dequeue = function () {
    var elementoF = this.elementoF,
        elementoN = this.elementoN,
        deletedData;

    if(elementoF !== elementoN){
        deletedData = this.contenedor[elementoF]
        delete this.contenedor[elementoF];
        this.elementoF++;

        return deletedData;
    }
}

// indefinido el elemento
Cola.prototype.peek = function(){
    return this.elemento;
}

Cola.prototype.size = function(){
    return this.elementoN - this.elementoF;
}

Cola.prototype.print = function(){
    return this.contenedor;
}


let cola = new Cola();

let dato = document.getElementById("enqueue");
let cuerpo = document.getElementById("cuerpo");
let div_c = document.getElementsByTagName("div")

let b_enqueue = document.getElementById("b_enqueue")
let b_dequeue = document.getElementById("b_dequeue")
let b_peek = document.getElementById("b_peek")
let b_size = document.getElementById("b_size")
let b_print = document.getElementById("b_print")

function Enqueue() {
    b_enqueue.disabled = true;
    div = document.createElement("span");
    div.innerHTML = cola.enqueue(dato.value);
    cuerpo.appendChild(div);
    setTimeout(() => {
            div.style.display = "none"
            b_enqueue.disabled = false;
        }, 1000) 
}
function Dequeue() {
    cola.dequeue();
    cuerpo.shift();
}
function Peek() {
    b_peek.disabled = true;
    let elemento = document.createElement("span");
    elemento.innerHTML = cola.peek();
    cuerpo.appendChild(elemento);
    setTimeout(() => {
        cuerpo.removeChild(elemento);
        b_peek.disabled = false;
    }, 1000)
}

function Size() {
    b_peek.disabled = true;
    let elemento = document.createElement("span");
    elemento.innerHTML = cola.size();
    cuerpo.appendChild(elemento);
    setTimeout(() => {
        cuerpo.removeChild(elemento);
        b_peek.disabled = false;
    }, 1000)
}

function Print() {
    cola.print().forEach((element) => {
        let articulo = document.createElement("span");
        articulo.innerHTML = element;
        cuerpo.appendChild(articulo);
        setTimeout(() => {
            cuerpo.removeChild(articulo);
        }, 1000)
    });
}