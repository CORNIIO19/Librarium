let libros = [];

async function cargarLibros() {
    try {
        let respuesta = await fetch("libros.json");
        libros = await respuesta.json();
    } catch (error) {
        console.error("Error al cargar la información:", error);
    }
}

function actualizarFormulario() {
    let selectLibro = document.getElementById("book-title");
    let autorInput = document.getElementById("author");
    let descripcionTextarea = document.getElementById("description");
    
    // Obtener el índice seleccionado
    let indiceSeleccionado = parseInt(selectLibro.value, 10) - 1;

    if (indiceSeleccionado >= 0 && indiceSeleccionado < libros.length) {
        // Mostrar la información del libro seleccionado
        let libro = libros[indiceSeleccionado];
        autorInput.value = libro.autor;
        descripcionTextarea.value = libro.descripcion;
    } else {
        // Limpiar el formulario si no hay un libro válido seleccionado
        autorInput.value = "";
        descripcionTextarea.value = "";
    }
}

async function init() {
    await cargarLibros();
    document.getElementById("book-title").addEventListener("change", actualizarFormulario);
}

init()
    .then(() => console.log("Inicialización completada"))
    .catch((error) => console.error("Error durante la inicialización:", error));

    function cambiarFondo(){
    document.getElementById('darkModeButton').addEventListener('click', function() {

        document.body.classList.toggle('dark-mode');

    });
}