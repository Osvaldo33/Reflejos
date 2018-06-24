
    let inicio = document.querySelector(".inicio");
    let nombreJuego = document.querySelector(".nombreJuego");
    let instrucciones = document.querySelector(".instrucciones");
    setTimeout(function(){
        inicio.style.opacity = "0";
        inicio.style.zIndex = "-1";
        inicio.style.top = "-100vh";
        
    }, 6000);
    setTimeout(function(){
        nombreJuego.innerHTML = "Nivel 1";
        instrucciones.innerHTML = "";
        let audio = document.getElementById("audio");
        audio.play(); 
    }, 4000);



 