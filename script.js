function menu() {
    document.getElementById("menu").classList.toggle("hidde");

    var result = document.getElementById("nav-menu").classList.toggle("gray");

    console.log(result)

  if (result == true) {
    document.querySelector('#nav-menu').src = 'images/icon-close.svg';
  }else if (result == false) {
    document.querySelector('#nav-menu').src = 'images/icon-hamburger.svg';
  }
    
}

var section = 0;
document.querySelector('.cantidad').innerHTML = section;

fetch('datos.json')
    .then(response => response.json())
    .then(json => {
        document.querySelector('.imagen').src = json[section].imagen;
        document.querySelector('.title').innerHTML = json[section].header;
        document.querySelector('.subtext').innerHTML = json[section].subtext;
        document.querySelector('.link').href = json[section].link;
    });

function aumentar(){
    if(section >= 2){
        section = 0 - 1;
    }else{
        console.log('else de aumentar')
    }
    section = ++section
    document.querySelector('.cantidad').innerHTML = section;

    fetch('datos.json')
    .then(response => response.json())
    .then(json => {
        document.querySelector('.imagen').src = json[section].imagen;
        document.querySelector('.title').innerHTML = json[section].header;
        document.querySelector('.subtext').innerHTML = json[section].subtext;
        document.querySelector('.link').href = json[section].link;
    });
}

function reducir(){
    
    if(section <= 0){
        section = 2 + 1; 
    }else{
        console.log('else de reducir')
    }
    section = --section
    document.querySelector('.cantidad').innerHTML = section;

    fetch('datos.json')
    .then(response => response.json())
    .then(json => {
        document.querySelector('.imagen').src = json[section].imagen;
        document.querySelector('.title').innerHTML = json[section].header;
        document.querySelector('.subtext').innerHTML = json[section].subtext;
        document.querySelector('.link').href = json[section].link;
    });
}

function movimiento(event){
    if(event.keyCode == '37'){//Izquierda
        reducir();
    }
	if(event.keyCode == '39'){//derecha
		aumentar();
	}
}
window.onkeyup = movimiento;