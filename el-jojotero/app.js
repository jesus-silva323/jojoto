let cerrar = document.getElementById("btn-close");
let abrir = document.getElementById("nav-btn");

let abrir_menu = document.getElementById("nav");
let cerrar_menu = document.getElementById("nav");


cerrar.addEventListener("click", cerrarNav);
function cerrarNav(){
    cerrar_menu.classList.remove("nav-cell");
}

abrir.addEventListener("click", cerrarMenu);
function cerrarMenu(){
    abrir_menu.classList.add("nav-cell");
}
