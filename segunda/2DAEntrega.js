

// Funciones globales

const existeElementoId = (array, idReferencia) => {
    let existe = array.some( elemento => elemento.id === idReferencia );
    return existe;
}
 // array que simula un stock preexistente 
let stockProductos = [
    {id: 1 , nombre: "Quilmes" , tipo: "Cerveza" , precio: 1000 },
    {id: 2 , nombre: "andes" , tipo: "Cerveza" , precio: 1500 },
    {id: 3 , nombre: "brama" , tipo: "Cerveza" , precio: 1800 },
    {id: 4 , nombre: "patagonia" , tipo: "Cerveza" , precio: 1600 },
    {id: 5 , nombre: "toro" , tipo: "vino" , precio: 1100 },
    {id: 6 , nombre: "las perdices" , tipo: "vino" , precio: 1900 },
    {id: 7 , nombre: "rutini" , tipo: "vino" , precio: 2000 },
    {id: 8 , nombre: "wiski" , tipo: "licor" , precio: 1100 },
    {id: 9 , nombre: "vodka" , tipo: "licor" , precio: 1000 }
];

function verificacionEdad() {
    let mayores = prompt("DEBES TENER MÁS DE 18 PARA COMPRAR\n¿ERES MAYOR DE 18 AÑOS?\n si/no").toLowerCase();
    
    while (mayores !== "si") {
        alert("No puedes comprar alcohol, debes ser mayor de 18");
        mayores = prompt("¿Eres mayor de 18 años? si/no").toLowerCase();
    }
}

// nuevo array de stock 

let IdStock = 1;
let Productos = [];

class Producto {
    constructor (nombre, tipo, precio, stock) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.precio = precio;
        this.stock = stock;
        this.id = IdStock;
    }
}  

let agregarProductos = (producto) => {
    Productos.push(producto);
    IdStock++;
};

const eliminarElemento = (id) => {
    const index = Productos.findIndex(elemento => elemento.id === id);
    if (index !== -1) {
        Producto.splice(index, 1);
    } else {
        alert("No existe ningún producto con ese ID");
    }
};

alert("BIENVENIDO A MI MINI TIENDA VIRTUAL");

verificacionEdad();

let eleccion = parseInt(prompt("Elige una opción\n 1- Cerveza\n 2- Vino\n 3- Licores\n 4- Agregar elementos \n 5- Quitar elementos"));

switch (eleccion) {
    case 1:
        const Cervezas = stockProductos.filter(birra => birra.tipo.includes("Cerveza"));
        mostrarCadenaObjetos(Cervezas);
        console.log(Cervezas);
        break;
    case 2:
        const vino = stockProductos.filter(tinto => tinto.tipo.includes("vino"));
        mostrarCadenaObjetos(vino);
        console.log(vino);
        break;
    case 3:
        const destilados = stockProductos.filter(licor => licor.tipo.includes("licor"));
        mostrarCadenaObjetos(destilados);
        console.log(destilados);
        break;
    case 4:

        let salida = prompt ("cargar elementos ? \n si/no").toLowerCase();
        
        if (salida == "si") {

            let nombre = prompt("Ingrese el nombre del producto");
            let tipo = prompt("Ingrese el tipo de productos");
            let precio = prompt("Ingrese el precio del producto");
            let producto = new Producto(nombre, tipo, precio);
            agregarProductos(producto); 
            // SICLO WILE PARA SEGUIR CARGANDO MAS ELEMENTOS
            while (salida != "si") {
            agregarElementos();
            salida = prompt ("desea salir ? \n (si/no)").toLowerCase();
            }   
        }else { alert("HASTA LUEGO ")}

        console.log(Productos);
        break;
    case 5:
        eliminarElemento(prompt("ingrese el id del producto que desea eliminar "))
        break;
    default:
        alert("Opción no válida");
}
// FUNCION PARA VER LOS ELEMENTOS DEL ARRAY EN LAS OPCIONES DE COMPRA

function mostrarCadenaObjetos(array) {
    let alertas = [];

    array.forEach(objeto => {
        let alerta = `Nombre: ${objeto.nombre}, Tipo: ${objeto.tipo}, Precio: ${objeto.precio}`;
        alertas.push(alerta);
    });

    alertas.forEach(alerta => {
        alert(alerta);
    });
}

// funcion agregar elementos 

function agregarElementos () {

    let nombre = prompt("Ingrese el nombre del producto");
    let tipo = prompt("Ingrese el tipo de productos");
    let precio = prompt("Ingrese el precio del producto");
    let producto = new Producto(nombre, tipo, precio);
    agregarProductos(producto);
}
