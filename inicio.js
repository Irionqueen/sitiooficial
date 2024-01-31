let indiceActual = 0;
const imagenes = document.querySelectorAll(".carrusel-imagenes img");
const totalImagenes = imagenes.length;

document.getElementById('siguiente').addEventListener('click', () => {
    cambiaImagen(1);
});

document.getElementById('anterior').addEventListener('click', () => {
    cambiaImagen(-1);
});

function cambiaImagen(direccion) {
    imagenes[indiceActual].style.display = 'none';
    indiceActual += direccion;

    if (indiceActual >= totalImagenes) {
        indiceActual = 0;
    } else if (indiceActual < 0) {
        indiceActual = totalImagenes - 1;
    }

    imagenes[indiceActual].style.display = 'block';
}

// Inicializar el carrusel mostrando la primera imagen
imagenes[0].style.display = 'block';
