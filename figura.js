window.onload=function(){
      let audio = document.getElementById("audio");
     let audio2 = document.getElementById("audio2");
     let audio3 = document.getElementById("audio3"); 
     let audio4 = document.getElementById("audio4");
    //------------------variables del informe------------------
      let informe =document.querySelector(".informe");
        let opaco =document.querySelector(".opaco");
        let recordFinal = document.querySelector(".recordFinal");
      //-------------------------------------------------------------------------Puntaje-------------------------------------------------------------------------
    //variable refresh
        let refresh = document.querySelector(".refresh");
    //variables del puntaje
        let puntaje = document.querySelector(".puntaje");
        let mejorPuntaje = document.querySelector(".mejorPuntaje");
        let contador;
        let decimas=0;
        let entero = 0;
        let decimasFinal=0;
        let enteroFinal=0;
        let decimasFinal2=0;
        let enteroFinal2=0;
        let numero=0;
        let numeroFinal=0;
        let numeroLegitimo=0;
        let arreglo = new Array();
        let i = 0;
        let click =0;
        arreglo[1] = 0;
        
    //----------------Variables de la figura----------------
    let figura = document.querySelector(".figura");
    //--------caracteristicas iniciales de la figura--------
    (function (){
        figura.style.width = "8vw";
        figura.style.height = "5vh";
        figura.style.left = "46vw";
        figura.style.top = "80vh";
        figura.innerHTML = "Iniciar";
        figura.style.backgroundColor = "#e1f5fe";
        figura.style.color = "#22222B";
        figura.style.borderRadius = "10px";
        figura.style.boxShadow = "1px 1px 20px 0px #11e9b6";
        
    })();
    //-------------------------------------------------------------------------funciones para la figura-------------------------------------------------------------------------
    function variablesAleatorias(){
        let aleatorioSize = Math.random(),
            aleatorioTop = Math.random(),
            aleatorioLeft = Math.random(),
            aleatorioColor = Math.random();
         return [aleatorioSize, aleatorioLeft, aleatorioTop, aleatorioColor];
    }
    function medidasFigura(){ 
         mejorPuntaje.classList.remove("efectoPuntaje");
        if(click >= 20){
           figura.classList.add("figuraMovimiento"); 
        }
         
         decimas=0;
         contador = setInterval(function(){
            decimas++;
            if(decimas>=100){
                entero+=1;
                decimas=0;
            }
         }, 10);
        
        
        let randomMedida = variablesAleatorias(),
            randomTamano = Math.floor(randomMedida[0]*15);
        if(randomTamano <= 2){
            
            randomTamano = 3;
            figura.innerHTML = "";
            figura.style.width = `${randomTamano}vw`;
            figura.style.height = `${randomTamano}vw`;
        }
        
        else if(randomTamano >= 15){
            randomTamano = 15;
            figura.innerHTML = ""
            figura.style.width = `${randomTamano}vw`;
            figura.style.height = `${randomTamano}vw`;
        }
        else{
            figura.innerHTML = ""
            figura.style.width = `${randomTamano}vw`;
            figura.style.height = `${randomTamano}vw`; 
        }
        
        if(randomTamano % 2 == 0){
            figura.style.borderRadius = "50%";
        }
        else{
             figura.style.borderRadius = "0";
        }

    }
    function colorFigura(){
        let randomColor = variablesAleatorias(),
            randomHexa = Math.floor(randomColor[3]*1000); 
        figura.style.backgroundColor = `#${randomHexa}`;
        figura.style.boxShadow = `1px 1px 25px #${randomHexa}`;
    }
    function posicion(){
        
        // ------------variables random------------
        let randomPosicion = variablesAleatorias(),
            randomLeft = Math.floor(randomPosicion[2]*90),
            randomTop = Math.floor(randomPosicion[3]*68);
            
        
        //--------Asignando valores random para posición--------
        figura.style.top = `${randomTop}%`;
        figura.style.left = `${randomLeft}%`;
        
        
    }
    function comparar ( a, b ){ return a - b; }
    
    
    //----------------------------------------------------------------------------------Nivel 2----------------------------------------------------------------------------------
    function segundoNivel(){
        audio4.play();
        arreglo.splice(0, arreglo.length);
        arreglo[1] = 0;
        console.log(arreglo);
        let inicio = document.querySelector(".inicio");
        let nombreJuego = document.querySelector(".nombreJuego");
        let instrucciones = document.querySelector(".instrucciones");
            inicio.style.opacity = "1";
            inicio.style.zIndex = "3";
            inicio.style.top = "0";
            nombreJuego.innerHTML = "Nivel 2";
            instrucciones.innerHTML = "";
    
        setTimeout(function(){
            numero=0;
            clearInterval(contador);
            contador=0;
            inicio.style.opacity = "0";
            inicio.style.zIndex = "-1";
            inicio.style.top = "-100vh";
        }, 4000);
        puntaje.innerHTML = `${numero} Segundos`;
        mejorPuntaje.innerHTML = `Tu record es de : ${arreglo[1]} segundos`;
    }
    
    function info(){
        informe.classList.add("informeAparecer");
        opaco.classList.add("opaco2");
        recordFinal.innerHTML = `${arreglo[1]}`;
        
        opaco.addEventListener("click", function(){
            opaco.classList.remove("opaco2");
            informe.classList.remove("informeAparecer");
            location.reload();
        });
    }
    
    
    
    
    //--------------------------------------------------------------------------Eventos de la figura--------------------------------------------------------------------------
    figura.addEventListener("click", function(){
            audio3.play();
            figura.innerHTML = "";
        /*-----------------reset de medidas-----------------*/
            figura.style.width = `0`;
            figura.style.height = `0`;
        /*---------Se manda a llamar a las funciones---------*/
            variablesAleatorias();
            let sust = arreglo[1];
            setTimeout(medidasFigura, (Math.floor(Math.random()*2000)));
            numero = parseFloat(`${entero}.${decimas}`);
            puntaje.innerHTML = `${numero} Segundos`;
            arreglo[i] = numero;
            i++;
            arreglo.sort( comparar );
            mejorPuntaje.innerHTML = `Tu record es de : ${arreglo[1]} segundos`;
            if(sust != arreglo[1]){
                audio2.play();
                mejorPuntaje.classList.add("efectoPuntaje");
            }
            colorFigura();
            posicion();
            clearInterval(contador);
            entero = 0;
            click++;
            
            if(click == 20){
                figura.style.width = "0";
                figura.style.height = "0";
                segundoNivel();
                audio.pause();
                
            }
            if(click == 40){
                figura.style.width = "0";
                figura.style.height = "0";
                info();
            }
            console.log(arreglo);
    });  
    refresh.addEventListener("click", function(){
            location.reload();
    });
    
    
    
    

}
