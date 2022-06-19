window.addEventListener('load',function(){

    var imagenes =[];
    imagenes[0]='ba.jpg'
    imagenes[1]='imagen2.jpg'
    imagenes[2]='imagen3.jpg'
    imagenes[3]='imagen4.jpg'
    imagenes[4]='imagen5.jpg'

      var inidiceImagenes=0;

    function cambiarImagenes(){
        this.document.slider.src =imagenes[inidiceImagenes];

        if (inidiceImagenes <4){
            inidiceImagenes++;


        }else{
            inidiceImagenes=0;
        }
    }

    this.setInterval(cambiarImagenes,2000);
    
});