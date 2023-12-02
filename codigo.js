window.addEventListener("DOMContendioaded",inicio);

function inicio(){
    let  caja = document.querySelector(".caja");
    let mario = document.querySelector(".mario");


    let player ={
        x:0,
        y:0,
        an:30,
        al:40,
        color:"",
        xv:0,
        yv:0,
        rotar:0
    };

    mario.style.width = player.an+"px";
    mario.style.height = player.al+"px";
    mario.style.background = player.color;
    let mover= false;

    funtion animacion() {
        window.requestAnimationFrame(animacion);

        player.x += player.xv;
        player.y += player.yv;
        player.yv += 2;

        mario.style.trasform = "translatex(${player.x}px)"+"translatey(${player.y}px)"+"rotatey($"{player.rotar}deg)";

        let pisos = document.querySelectorAll(".piso");
        let ladrillos =document.querySelectorAll(".ladrillos");
        let signos = document.querySelectorAll(".signo");
        let tubos = docuement.querySelectorAll(".tubo");


        if(player.x > innerWidth / 2) {
           player.x = innerWidth / 2;
           frenar.();
           mover = true;
           console.log(mover);
        };
        pisos.forEach(function(e,i){
        let pisoy = pisos[i].getBoundingClientRect().y;
        let pisox = pisos[1].getBoundingClientRect().x;
        if(player.y +player.al + player.yv> pisoy &&
           player.y < pisoy + 30 &&
           player.x + player.an > pisosx &&
           player.x < pisox + 30){

           };
           if (mover == true) {
               pisos[i].style.transform += "translatex(-4px)";
           };
        });

        ladrillos.forEach(funtion(e,i){
            let ladrillosy = ladrillos[i].getBoundingClientRect().y;
            let ladrillosx = ladrillos[i].getBoundingClientRect().x;
            if(player.y + player.al + player.yv > ladrillosy &&
               player.y + player.yv < ladrillosy + 30 &&
               player.x + player.an + player.xv > ladrillos &&
               player.x + player.xv < ladrillosx &&
               player.x + player.xv < ladrillosx + 30){
               player.yv = 0;
            };
        if (mover == true){
            ladrillos[i].style.transform += "translatex(-4px)";
        };
    });

    signos. forEach(funtion(e,i){
        let signoy = signos[i].getBoundungClientRect().y;
        let signox = signos[i].getBoundingClientRect().x;
        if (player.y + player.al + player.yv - 1 > signoy &&
            player.y + player.yv < signoy + 30 &&
            player.x + player,an + player.xv > signox &&
            player.x + player.xv < signox + 30) {

        };
        if (player.y + player.al + player.yv > signoy &&
            player.y + player.yv < signoy + 30 &&
            player.x + player.am + player.xv > signox &&
            player.x + player.xv < signox + 30){
            player.xy = 0;
            };
        if (mover == true) {
            signos{i}.style.transform += "translatex(-4px)";
        };    

    });

    tubos.forEach(funtion(e,i){
        let tuboy = tubos[i].getBoundingClientRect().y;
        let tubox = tubos[i].getBoundingClientRect().x;

    if (player.y + player.al + player.yv > tuboy &&;
        player.y + player.yv < tuboy + 90 &&
        player.x + player.an + player.xv > tubox &&
        player.x + player.xv < tubox + 60) {
        player.yv = -0.1;
    };
    if (player.x + player.an + player.xv >= tubox &&
        player.x + player.xv <= tubox + 60 &&
        player.y + player.al player.yv >= tuboy &&
        player.y <= tuboy + 90){
        player.xv =0;    
    };
    if (mover == true){
        tubos[i].style.transform += "translatex(-4px)";
    };
  });
};
animacion();

let mapa = [
    [ , , , , , , , , , , , , , , , , ,]
]