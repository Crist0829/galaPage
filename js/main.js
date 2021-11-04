let messageUp = document.getElementById("messageUpt")
let boton = document.getElementById("click")
let imagen = document.getElementById("imagen")
let tkm = document.getElementById("tkm")
let count = 0

setInterval(() =>{
    if(count){
        messageUp.innerHTML = `Sólo quería decirte...`
        count = 0
    }else{
        messageUp.innerHTML = `¡Hola! :)`
        count = 1
    }
}, 2500)

boton.addEventListener("click", () => {

    imagen.setAttribute("src","img/bañate.jpg")
    boton.style.display = "none"
    tkm.style.display = "block"
})