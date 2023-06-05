// La idea era hacer un simulador de compras de una página de indumentaria y accesorios deportivos.
// Cada producto tiene distinto precio, se añade al carrito esos precios, se suman y se muestra el total del carrito por
// la consola y por alerts.


let carritoDeCompras = 0;

function pedirNombre() {
  let nombreIngresado = prompt("¡Bienvenido! Ingrese su nombre");
  saludar(nombreIngresado);
}

function saludar(nombre) {
  let opcionIngresada;

  do {
    opcionIngresada = prompt(`¡Hola ${nombre}! Estás en el menú, ¿qué deseas hacer?
    1 - Comprar indumentaria femenina de natación
    2 - Comprar indumentaria masculina de natación
    3 - Comprar accesorios
    4 - Ver total del carrito
    5 - Pagar y finalizar compra
    6 - Salir del menú :(`);

    opcionIngresada = parseInt(opcionIngresada); 

    switch (opcionIngresada) {
      case 1:
      case 2:
      case 3:
        let cantidad = prompt("Ingrese la cantidad de productos que desea agregar al carrito:");
        cantidad = parseInt(cantidad);
        if (!isNaN(cantidad) && cantidad > 0) {
          let confirmacion = prompt(`¿Estás seguro de agregar ${cantidad} producto(s) al carrito? (s/n)`);
          confirmacion = confirmacion.toLowerCase();
          if (confirmacion === "s") {
            let precio = obtenerPrecio(opcionIngresada);
            agregarAlCarrito(cantidad, precio);
            console.log(`Se ha agregado ${cantidad} producto(s) al carrito.`);
            alert("Se agregó " + cantidad + " producto(s) al carrito.");
          } else {
            console.log("Producto no agregado al carrito. Puedes continuar navegando.");
            alert("Producto no agregado al carrito. Puedes continuar navegando.");
          }
            console.log(`Monto acumulado en el carrito: $${carritoDeCompras}`);
            alert("Monto acumulado en el carrito: $" + carritoDeCompras);
            } else {
            console.log("Cantidad inválida. Por favor, ingrese un número válido.");
            alert("Cantidad inválida. Por favor, ingrese un número válido.");
        }
        break;
        case 4:
          console.log(`El total de tu carrito es: $${carritoDeCompras}`);
          alert("El total de tu carrito es: $" + carritoDeCompras);
        break;
        case 5:
          pagar();
        break;
        case 6:
          console.log(`Seleccionaste salir del menú. El total de tu carrito es: $${carritoDeCompras}. ¡Hasta luego!`);
          alert("Seleccionaste salir del menú. El total de tu carrito es: $" + carritoDeCompras +". ¡Hasta luego!");
        break;
        default:
          console.log("Opción inválida. Por favor, elija una opción válida.");
          alert("Opción inválida. Por favor, elija una opción válida.")
          opcionIngresada = 0; // pongo la opción inválida a 0 para repetir el bucle
        }
    } while (opcionIngresada !== 6);
}

function agregarAlCarrito(cantidad, precio) {
  let total = cantidad * precio;
  carritoDeCompras += total;
}

function obtenerPrecio(opcion) {
  switch (opcion) {
    case 1:
      return 10000;
    case 2:
      return 8000;
    case 3:
      return obtenerPrecioAccesorio();
    default:
      return 0;
  }
}

function obtenerPrecioAccesorio() {
  let opcionAccesorio = prompt(`¿Qué accesorio deseas comprar?
    1 - Antiparras
    2 - Gorros`);

  opcionAccesorio = parseInt(opcionAccesorio);
  switch (opcionAccesorio) {
    case 1:
      return 4000;
    case 2:
      return 3500;
    default:
      return 0;
  }
}

function pagar() {
  let confirmacion = prompt("¿Estás seguro de pagar y finalizar la compra? (s/n)");
  confirmacion = confirmacion.toLowerCase();
  if (confirmacion === "s") {
    console.log("Compra finalizada. ¡Pronto nos comunicaremos vía mail con usted!");
    alert("Compra finalizada. ¡Pronto nos comunicaremos vía mail con usted!");
    carritoDeCompras = 0; // pone el carrito en cero después de pagar
  } else {
    console.log("La compra sigue en pie. Seguí navegando.");
    alert("La compra sigue en pie. Seguí navegando.");
  }
}

// Ejemplo de uso
pedirNombre();