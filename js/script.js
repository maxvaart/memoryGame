let arr = ["/img/arrow.jpg","/img/batman.jpg","/img/flash.jpg","/img/cyborg.jpg","/img/wonder.jpg",
"/img/green.gif","/img/arrow.jpg","/img/batman.jpg","/img/flash.jpg","/img/cyborg.jpg","/img/wonder.jpg","/img/green.gif","/img/superman.jpg","/img/superman.jpg"]

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
                    <img src='/img/fondonegro.png' width="200" height="250px">
                </div>
            </div>
        </div>
        `;
    });
    agregarEventos();    
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

presentArr(arr);