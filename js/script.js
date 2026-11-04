
//creamos el arreglo q contiene nuestras imagenes
const imagenes = [
    {
        ruta: "img/carrusel_1.png",
        alt: "Peluquera realizando tecnica de Brushing"
    },
    {
        ruta: "img/carrusel_2.jpg",
        alt: "Diferentes estilos de cabello con ondas y balayage"
    },
    {
        ruta: "img/carrusel_3.jpg",
        alt: "Cabello largo castaño con reflejos"
    },
    {
        ruta: "img/carrusel_3b.jpg",
        alt: "Cabello oscuro con reflejos rojizos"
    }
];

//Buscamos en el html el id del carrusel y btns y lo asiggnamos a las variabes para poder trabajar con esos elementos aca

const imagenCarrusel = document.getElementById("imagen-carrusel");
const botonAnterior = document.getElementById("anterior");
const botonSiguiente = document.getElementById("siguiente");

if (imagenCarrusel && botonAnterior && botonSiguiente) {

//guardamos el indice en una variable, empieza en 0, es decir la primera imagen

let indiceActual = 0;



//Funcionalidad del carrusel

function carrusel() {
   imagenCarrusel.src= imagenes[indiceActual].ruta;
   imagenCarrusel.alt = imagenes[indiceActual].alt;

}

carrusel();


botonSiguiente.addEventListener("click", function() {
    indiceActual++;

    if (indiceActual >= imagenes.length)
        {
        indiceActual = 0;
        }

    carrusel();
});


botonAnterior.addEventListener("click", function()
    {
    indiceActual--;

    if (indiceActual< 0)
        {
            indiceActual= imagenes.length - 1;
        }
        carrusel();
});
}

// VALIDACIÓN DEL FORMULARIO DE CONTACTO

const formulario = document.getElementById("form-contacto");

if (formulario) {

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        // Obtenemos los valores de los campos
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const asunto = document.getElementById("asunto").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        // Obtenemos los lugares donde mostraremos los errores
        const errorNombre = document.getElementById("error-nombre");
        const errorEmail = document.getElementById("error-email");
        const errorTelefono = document.getElementById("error-telefono");
        const errorAsunto = document.getElementById("error-asunto");
        const errorMensaje = document.getElementById("error-mensaje");

        // Limpiamos los errores anteriores
        errorNombre.textContent = "";
        errorEmail.textContent = "";
        errorTelefono.textContent = "";
        errorAsunto.textContent = "";
        errorMensaje.textContent = "";

        let formularioValido = true;

        //Validaciones

        // nombre
        if (nombre.length < 2 || nombre.length > 40) {
            errorNombre.textContent = "El nombre debe tener entre 2 y 40 caracteres.";
            formularioValido = false;
        }

        // email
        const patronEmail = /^\w+@\w+(\.\w{2,4})+$/;

        if (!patronEmail.test(email)) {
            errorEmail.textContent = "Ingresá un correo electrónico válido.";
            formularioValido = false;
        }

        // teléfono
        const patronTelefono = /^[0-9]{8,15}$/;

        if (!patronTelefono.test(telefono)) {
            errorTelefono.textContent = "Ingresá un teléfono de entre 8 y 15 números.";
            formularioValido = false;
        }

        //asunto
        if (asunto.length < 3 || asunto.length > 50) {
            errorAsunto.textContent = "El asunto debe tener entre 3 y 50 caracteres.";
            formularioValido = false;
        }

        // Mensaje
        if (mensaje.length < 10 || mensaje.length > 300) {
            errorMensaje.textContent = "El mensaje debe tener entre 10 y 300 caracteres.";
            formularioValido = false;
        }

        if (formularioValido) {

            const resultado = document.getElementById("resultado-formulario");

            resultado.innerHTML = "";

            const titulo = document.createElement("h3");
            titulo.textContent = "Consulta enviada correctamente";

            const datos = document.createElement("p");
            datos.textContent = "Nombre: " + nombre;

            const correo = document.createElement("p");
            correo.textContent = "Email: " + email;

            const telefonoTexto = document.createElement("p");
            telefonoTexto.textContent = "Teléfono: " + telefono;

            const asuntoTexto = document.createElement("p");
            asuntoTexto.textContent = "Asunto: " + asunto;

            const mensajeTexto = document.createElement("p");
            mensajeTexto.textContent = "Mensaje: " + mensaje;

            resultado.appendChild(titulo);
            resultado.appendChild(datos);
            resultado.appendChild(correo);
            resultado.appendChild(telefonoTexto);
            resultado.appendChild(asuntoTexto);
            resultado.appendChild(mensajeTexto);

            formulario.reset();
        }

            });
}