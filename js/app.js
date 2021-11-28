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

/* Esta linea dice, selecioname todos los elemntos que esten en la clase menu
y en una etiqueta <a> con un href, el href se define con todos esos simbolos 
aqui en JS.  */
const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

/*Este intesectionObserver va a recibbir una funcion que 
va a usar una function de flecha, que va a recibir unas entries
y a estas entries les vamos a hacer un foreach, y por cada entry.
Mirar el video de Yoelvis Mulen "Conecta enlaces del menu" */
/*
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        const menuLink = document.querySelector(`.menu a[href="#${id}"]`);

        if(entry.isIntersecting){
            menuLink.classList.add("selected");
        }else{
            menuLink.classList.remove("seleted");
        }
    })
})
*/

/*Recorremos todos los enlaces "href" y por cada enlace vamos a añadirle
un eventListener que vamos a escuchar el evento click, y cuando se le haga 
click alguno de esos botones "href", vamos a ejectuar una funcion, que esta
funcion lo que va hacer es coger el menu y eliminarlo, en este caso de las clases,
osea eliminar el "menu_opened". Asi que cada vez que le demos click a alguno de 
ellos se va a cerrar nuestro menu que sale, ese menu solo sale cuando tenemos la
clase menu_opened */
menuLinks.forEach(menuLinks => {
    menuLinks.addEventListener("click", function(){
        menu.classList.remove("menu_opened");
    })

    /*Ultimo video, sin terminar */
    /*
    const hash = menuLink.getAttribute("href");
    const target = document.querySelector(hash);
    if(target){
        observer.observe(target);
    }
    */
})

