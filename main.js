function digitar(caracter){
    let ecra = document.getElementById("valor");

    console.log()

    if(ecra.innerHTML.length < 10){

        if (caracter == "."){
            if(!ecra.innerHTML.includes(".")){
                ecra.innerHTML += caracter;
            }
            else{
                alert("Apenas pode incluir uma vez o simbolo (.)");
            }
        }
        else if (caracter == "-"){

            if(ecra.innerHTML.length == 0){
                ecra.innerHTML += caracter;
            }
            else{
                alert("Apenas pode incluir o simbolo (-) no inicio");
            }
                      
        }
        else {
            ecra.innerHTML += caracter;
        }
    }
    else{
        alert("Não pode conter mais de 10 dígitos");
    }

    resultado(parseFloat(ecra.innerHTML));
}


function resultado(valor){
    let resultado = document.getElementById("resultado");
    let celsius = parseFloat(valor);
    
    
    if(!isNaN(celsius)){
        let k = celsius + 273.15;
        let f = (celsius * 1.8 )+32;
        resultado.innerHTML= "<hr> <p>SAÍDA</p>" + f.toFixed(2) + " F <br>";
        resultado.innerHTML+= k.toFixed(2) + " K <br>";
    }
    else{
        resultado.innerHTML="";
    }
}

function apagar(){
    document.getElementById("valor").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
}

function apagarUltimo(){
    let ecra = document.getElementById("valor");

    ecra.innerHTML = ecra.innerHTML.toString().slice(0,-1);
    resultado(parseFloat(ecra.innerHTML));
}



function ligar(){

    let ecra = document.getElementById("visor");

    let botao = document.getElementById("botao");

    if(botao.getAttribute("src") == "on-icon.png"){

        botao.setAttribute("src", "off-icon.png");
        botao.setAttribute("alt", "icon off");

        ecra.style.backgroundColor = "white";

        apagar();
    }
    else{

        botao.setAttribute("src", "on-icon.png");
        botao.setAttribute("alt", "icon on");

        ecra.style.backgroundColor = "black";

        apagar();
    }
  
}

var botao = document.getElementById('botao');
var conjuntoBotoes = document.getElementsByClassName('tecla');
var ativado = false;

botao.addEventListener('click', ativarDesativar);

function ativarDesativar(){
    ativado = !ativado; 

    for(var i = 0; i < conjuntoBotoes.length; i++){
        conjuntoBotoes[i].disabled = !ativado; 
    }

    if(ativado){
        for(var i = 0; i < conjuntoBotoes.length; i++){
            conjuntoBotoes[i].classList.add("ativo");
            conjuntoBotoes[i].classList.remove("desativo");
        }
    } 
    else{
        for(var i = 0; i < conjuntoBotoes.length; i++){
            conjuntoBotoes[i].classList.add("desativo");
            conjuntoBotoes[i].classList.remove("ativo");
        }

    }
}

