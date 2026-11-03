
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

//guardamos el indice en una variable, empieza en 0, es decir la primera imagen

let indiceActual = 0;

<!--Buscamos en el html el id del carrusel y btns y lo asiggnamos a las variabes para poder trabajar con esos elementos aca-->
const imagenCarrusel = document.getElementById("imagen-carrusel");
const botonAnterior = document.getElementById("anterior");
const botonSiguiente = document.getElementById("siguiente");

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