// const listaDeCursos = ['DW', 'JS', 'React', 'Backend'];

// const numerosDNI = [432345, 3453453, 8976079];

//para recorrer arrays de objetos se utiliza
//for of.

// for (const i of array) {

//}

// .push: agrega elementos al final del array. 

// .unshift: agrega elementos al principio del array
// y desplaza las posiciones (ES MALA PRACTICA).

// .shift: elimina el primer elemento del array.

// .pop: elimina el ultimo elemento del array.

// .splice: elimina elementos por posicion. Pide primero
// desde que posicion empieza a eliminar, y cuantos elementos
// desamos eliminar.
    //ej: diasDeLaSemana.splice(2,2). En este ejemplo, splice
    //procede a pararse en la pos 2 y a eliminar los elementos 
    //en las posiciones 2 y 3.

    //ej_2: diasDeLaSemana.splice(2,1,"Miercoles"), borra el elemento
    //en la pos 2, y lo reemplaza por "Miercoles."

    //ej_3: diasDeLaSemana.splice(2,0,"Miercoles"), no borra ningun
    // elemento, y en la pos 2 agrega a "Miercoles", desplazando las 
    //posiciones.

// .concat:concatena arrays.
    //ej: array.concat(array_2, array_3)

// .join: separa un string en base al parametro que le asignemos.
    // ej: datos.join(","). Va a separar el string segun las comas.
    // ej_2: si se le pasa un array, lo convierte todo junto en un string
    // segun el parametro.

// .includes: me indica si en el array esta incluido cierto elemento.

// .indexOF: indica si el indice se encuentra en uso o no.
// si no lo encuentra devuelve -1 , si lo encuentra, devuelve
// en que posicion se encuentra. Se le pasa como parametro el elemento a 
// encontrar.

// .reverse: invierte el orden de los elementos del array.
// ES MUY MALA PRACTICA. ES UN METODO DESTRUCTIVO. 

// A la hora de usar un array de objetos




// .forEach : recorre y muestra elementos.

// array.forEach(element => {
    //console.log(element);
//});

//.find : busca un elemento en el array,
// si lo encuentra devuelve un true. Devuelve
//el primer elemento que encuentra.

//.filter: busca el elemento en el array, y 
//devuelve todos los elementos que coinciden
//con el parametro de busqueda.

// .reduce : recorre el array, itera los valores,
// y los reduce a un unico valor.
//calcula un total.

// recibe el acumulador, valor actual e
// indice actual (saldo anterior).

//let saldoAnterior = 500

//let num = [1,2,3,4,5,6]

// const total = num.reduce((acc, elem) => acc = elem, saldoAnterior).

// .map : mapea el array original y devuelve
// un nuevo array segun lo que haga la funcion.

//ej: 

// const prod = [

    //{nombre: 'Papa', precio: 500},
    //{nombre: 'Tomate', precio: 300},
    //{nombre: 'Camote', precio: 2300}

//]

// const prodConIva = prod.map((elementos) => elementos.precio * 1.21)

// const prodConMayusIva = prod.map((elementos) => {

    //return {

        //prod.nombre.upperCase()

    //}

//})








