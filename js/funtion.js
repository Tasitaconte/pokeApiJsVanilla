
let array = []

function title(title) {
    document.title = title;
}

function guardarLocal(datosJson) {
  
    let datos = {
        id: datosJson.id,
        nombre: datosJson.name,
        img: datosJson.sprites.other.dream_world.front_default
    }

    // console.log(array);

    localStorage.setItem("datos", JSON.stringify(datos));   
}

function obtenerLocal() {
    return JSON.parse(localStorage.getItem('datos'));
}


export const funcion = {
    title,
    obtenerLocal,
    guardarLocal
}