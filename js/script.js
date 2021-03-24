let arr = ["./img/arrow.jpg","./img/batman.jpg","./img/flash.jpg","./img/cyborg.jpg","./img/wonder.jpg",
"./img/green.gif","./img/arrow.jpg","./img/batman.jpg","./img/flash.jpg","./img/cyborg.jpg","./img/wonder.jpg","./img/green.gif","./img/superman.jpg","./img/superman.jpg"]

function presentArr (arr){
    let container = document.querySelector("#table");
    let randomArr = random(arr);
    randomArr.forEach(element => {
        container.innerHTML += 
        `
        <div class="card-box">
            <div class="card">
                <div class="card-front">
                    <img src=${element} width="200" height="250px">
                </div>
                <div class="card-back">
                    <img src='./img/fondonegro.png' width="200" height="250px">
                </div>
            </div>
        </div>
        `;
    });
    agregarEventos();    
}

function animacionInicio(){
    let aleatorio1 = Math.floor(Math.random() * arr.length);
    let aleatorio2= Math.floor(Math.random() * arr.length);
    let contenedorIzq = document.getElementById("cardLeft");
    let contenedorDer = document.getElementById("cardRight");
    contenedorDer.innerHTML = 
        `
        <div class="card-box-init">
            <div class="card-init">
                <div class="card-front">
                    <img src=${arr[aleatorio1]} width="200" height="250px">
                </div>
                <div class="card-back">
                    <img src='./img/fondonegro.png' width="200" height="250px">
                </div>
            </div>
        </div>
        `;
        contenedorIzq.innerHTML = 
        `
        <div class="card-box-init">
            <div class="card-init">
                <div class="card-front">
                    <img src=${arr[aleatorio2]} width="200" height="250px">
                </div>
                <div class="card-back">
                    <img src='./img/fondonegro.png' width="200" height="250px">
                </div>
            </div>
        </div>
        `;
    giroInicio();
}

function giroInicio(){
    let arrayInicio = document.getElementsByClassName("card-init");
    setTimeout(
        ()=>{arrayInicio[0].classList.add("giro360");
            arrayInicio[1].classList.add("giro360");
            } ,100);
    setTimeout(
        ()=>{arrayInicio[0].classList.remove("giro360");
            arrayInicio[1].classList.remove("giro360");
            animacionInicio();
            } ,1500);
        
}
function agregarEventos(){
    let cards= document.getElementsByClassName("card");
    for (i=0;i<cards.length;i++){
        cards[i].addEventListener("click", girar)
    }
};

function random (arr) {
    let randomArr = arr.sort(function (){ return 0.5 - Math.random()});    
    return randomArr;
};

function girar (){
    let arrGiradas = document.getElementsByClassName("girada");
    if (arrGiradas.length < 2){
        this.classList.add("girada");
        corroborar();
    }
};

function corroborar(){
    let arrGiradasActual = document.getElementsByClassName("girada");
    if (arrGiradasActual.length == 2 ) {
        if (arrGiradasActual[0].children[0].children[0].getAttribute("src") == arrGiradasActual[1].children[0].children[0].getAttribute("src")){
            console.log(true);
            arrGiradasActual[1].classList.add("logrado");
            arrGiradasActual[0].classList.add("logrado");
            arrGiradasActual[1].classList.remove("girada");
            arrGiradasActual[0].classList.remove("girada");

        } else {
                setTimeout(
                    ()=>{arrGiradasActual[1].classList.remove("girada");
                        arrGiradasActual[0].classList.remove("girada");
                        console.log(false)} ,1000)
        }
    }
} 

function iniciar(){
    presentArr(arr);
    let nav = document.querySelector("nav");
    nav.classList.remove("oculto");
    let menu = document.getElementById("menuBox");
    let blackScreen = document.getElementById("blackScreen");
    menu.classList.add("oculto");
    blackScreen.classList.add("oculto")
    contador();
}
function finalizar() {
    let table = document.getElementById("table");
    let nav = document.querySelector("nav");
    let menu = document.getElementById("menuBox");
    let blackScreen = document.getElementById("blackScreen");
    let contador = document.getElementById("contador");
    contador.innerHTML = "30";
    nav.classList.add("oculto");
    menu.classList.remove("oculto");
    blackScreen.classList.remove("oculto");
    table.innerHTML = "";
}

function contador(){
    var contador = document.getElementById("contador");
    var tiempo = parseInt(contador.innerHTML);
    var interval;
    function descontar(){
        if (tiempo > 0 ) {
            tiempo = --tiempo
            contador.innerHTML = tiempo
        } else {
            alert("GAME OVER");
            clearInterval(interval);
            finalizar();
        }
    }
     interval = setInterval(() => {
         descontar();
     }, 1000);
}
animacionInicio()