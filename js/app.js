/* Seleccionamos la clase del menu <ul>, tambien la clase
del btn que contiene la imagen de abrir menu "open-menu", 
y tambien la de cerrar el menu "close-menu" */
const menu = document.querySelector(".menu");   
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

/* Voy hacer una funcion que cuando el menu 
esta cerrado lo abra, y cuando esta abierto que lo cierre. */
function toggleMenu(){
    menu.classList.toggle("menu_opened"); /* Con esta linea le decimos que donde se encuentre "menu" añada una clase y la haga toggle, es decir que la quite y la ponga. Y menu_opened esta definido en el css. Asi que mediante esta función se la asignamos al menu */
}

/* Con estas dos líneas vamos alternando la imagen del icono y mostrando
el menu y ocultandolo, mediante un click a la imagen correspondiente */
openMenuBtn.addEventListener("click", toggleMenu); 
closeMenuBtn.addEventListener("click", toggleMenu);