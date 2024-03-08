function cambiarColor(){
    variable_album = document.getElementById("album");
    variable_album.style.backgroundColor = "rgb(151, 121, 66)" ;
}

function cambiarTamano() {
    var imagenes = document.getElementsByClassName("imagen");
    for (var i = 0; i < 1 ; i++) {
        imagenes[i].style.height = "400px";
        imagenes[i].style.width = "400px";
        // imagenes[i].style.width = "auto"; // Para mantener la proporción de la imagen
    }
    console.log("Tamaño cambiado");
}
