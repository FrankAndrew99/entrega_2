//FUNCIONES

const buscarProducto = (articulo,lista) => {

    let filtro = lista.findIndex(palabra => palabra.nombre == articulo)
    return filtro
}

const comprarProductos = (articulos) => {

    costoCompra.splice(0, costoCompra.length)
    compra.splice(0, compra.length)
    let inicio = 0;
    let carrito = articulos.split(',')

    for (let i = 0; i < tienda.length; i++) {
        let stock = tienda[i]

        for (let j = 0; j < carrito.length; j++) {
            let pedido = carrito[j]

            if (stock.nombre == pedido) {

                compra.push(pedido)
                costoCompra.push(stock.precio)
            }
        }
    }
    return  costoCompra.reduce((acum, valor) => acum + valor, inicio)
}

//CLASES

class Producto {

    constructor (nombre,precio) {
        this.nombre = nombre
        this.precio = precio
    }

    descripcion() {
        alert(`\n______PRODUCTOS______ \n\nNombre:   ${this.nombre}\n\nPrecio:   $${this.precio}`)
    }
}

//VARIABLES Y ARRAYS

const tienda = [];

let fideos = new Producto('FIDEOS', 270);
let vino = new Producto('VINO', 530);
let jabon = new Producto('JABON', 850);
let shampoo = new Producto('SHAMPOO', 700);

tienda.push(fideos, vino, jabon, shampoo);

const compra = [];
const costoCompra = [];
const historial = [];

let accion = 0;
let salir = false;

//PROGRAMA PRINCIPAL

while(true) {

    alert('\nTe damos la bienvenida a CoderShop!!!\n\nPulsa ACEPTAR para continuar.');
    let opcion = parseInt(prompt('Seleccione una accion: \n\n1- Ver tienda\n2- Agregar productos\n3- Eliminar productos\n4- Comprar productos\n5- Mis compras\n6- Salir'));

    switch(opcion) {

        case 1: //VER TIENDA
            
            for (prod of tienda) {
                prod.descripcion()
            };
            alert('Viste todos los productos');
            break;

        case 2: //AGREGAR PRODUCTO

            let nombre = prompt('\nInserte nombre del producto\n\n(Escriba ATRAS para volver)').toUpperCase();   
            if (nombre == 'ATRAS') {
                break
            };
            
            if (nombre == '' || nombre == ' ') {
                alert('No se completaron los campos')
                break;
            }
            
            let precio = parseInt(prompt('Indique precio del producto.'));

            if (Number.isInteger(precio) == false) {
                alert('No se completaron los campos')
                break;
            }

            let producto = new Producto(nombre, precio);
            tienda.push(producto);
            alert('Sumaste un producto a la tienda.')
            continue;
        
        case 3: //ELIMINAR PRODUCTOS

            let busqueda = prompt('Inserte el nombre del producto a eliminar.').toUpperCase();
            if (busqueda == '' || busqueda == ' ') {
                alert('Ups! Algo salio mal...')
                break;
            }
            
            let resultado = buscarProducto(busqueda,tienda);
            if (resultado == -1) {
                alert('El producto ingresado no existe')
                break;
            }

            alert(`\nHas seleccionado:\n\n\nNombre:  ${tienda[resultado].nombre}\n\Precio:  $${tienda[resultado].precio}`);
        
            let decision = prompt('Deseas eliminar este producto?\n\nSI/ NO').toUpperCase();
            if (decision == 'SI') {
                tienda.splice(resultado,1)
                alert('Producto eliminado con exito.')
                break;
            };

            if (decision == 'NO') {
                break;
            };

            if (decision != 'SI' || 'NO') {
                alert('Opcion invalida')
                break;
            };
       
        case 4: //COMPRAR PRODUCTOS

            let demanda = prompt('Escriba el nombre de los productos a comprar (separados por una coma).').toUpperCase();;
            let total = comprarProductos(demanda)

            if (total == 0) {

                alert('Ups! Algo salio mal...\nTe invitamos a ver la tienda y conocer nuestro stock!')
                break;
            }
            compra.forEach(element => {
                alert (`Tu carrito contiene: \n\nProducto:  ${element}`)
            });

            let pagar = prompt (`El monto de tu pedido es de: $${total}\n\nDesea realizar la compra? (SI/NO)`).toUpperCase();

            if (pagar == 'SI') {
                
                historial.push(total)
                alert('Gracias por comprar!!!\n\nTe esperamos pronto...')
                break;
            }

            if (pagar == 'NO') {
                break;
            };

            if (pagar != 'SI' || 'NO') {
                alert('Opcion invalida')
                break;
            };
        
        case 5: //MIS COMPRAS

            for (let i = 0; i < historial.length; i++) {
                alert (`Esto has gastado en tus compras: \n\nCOMPRA Nº${i+1}:  $${historial[i]}\n`)
            }

            alert('Esas son todas tus compras.')
            break;

        case 6: //SALIR
        
            salir = true
            break;
    };

    if (salir) {
        break;
    }
};

