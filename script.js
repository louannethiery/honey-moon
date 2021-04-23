document.getElementById("result").style.visibility = "hidden";


// Api LOVE
function match(){
    var saisie1 =document.getElementById("yourname").value;
    var saisie2 =document.getElementById("theirname").value;

    if (saisie1 == "") { 
	    alert("You won't find love alone"); 
	    return false; 
	}if (saisie2 == "") { 
	    alert("He/She will not find love alone");; 
	    return false; 
    }

//console.log(saisie2);
//console.log(saisie1);

    fetch("https://love-calculator.p.rapidapi.com/getPercentage?fname="+ saisie1 + "&sname=" + saisie2, {
	    "method": "GET",
	    "headers": {
		    "x-rapidapi-key": "2825444912msh860fd3c75e79e06p1fb70ejsn604c80514e71",
		    "x-rapidapi-host": "love-calculator.p.rapidapi.com"
	    }
    })
    .then(response =>response.json())
    .then(response => {
	    //console.log(response);

      //Faire apparaitre le Résultat :
        document.getElementById("result").style.visibility = "visible";
        document.getElementById("score").innerText = response.percentage+"%" ;
        document.getElementById("loveinfo").innerText = response.result ;
       
      // Si >=60 % :
      if (response.percentage >= 60) {
        // Mettre à dispo un saignement d'oreille
        (function () {
          'use strict';
        
          const URL = 'https://p.scdn.co/mp3-preview/91e6d3e0b48cda2f3a1b2391a1c1384fbf73b8a8?cid=774b29d4f13844c495f206cafdad9c86';
            
          const context = new AudioContext();
          const playButton = document.querySelector('#play');
            
          let loveBuffer;
        
          window.fetch(URL)
            .then(response => response.arrayBuffer())
            .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
            .then(audioBuffer => {
              playButton.disabled = false;
              loveBuffer = audioBuffer;
            });
            
            playButton.onclick = () => play(loveBuffer);
        
          function play(audioBuffer) {
            const source = context.createBufferSource();
            source.buffer = audioBuffer;
            source.connect(context.destination);
            source.start();
          }
        }());

        // Faire apparaitre l'animation confetti 
        var end = Date.now() + (15 * 1000);
        var colors = ['#bb0000', '#ffffff'];

        (function frame() {
          confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
          });
          confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
          });

          if (Date.now() < end) {
            requestAnimationFrame(frame);
          }
        }());
      // Si < 60% : 
      }else{
        // Pas de musique de lover
        document.getElementById("play").style.display = "none";

        // Gif lonely
        fetch("https://api.giphy.com/v1/gifs/random?api_key=Ywoh06QC87SD53OtIyyhhxyzM7MZKSAl&tag=lonely&limit=1")
        .then(response => response.json())
        .then(response => {
        console.log(response)
            let gif1 = response.data.image_original_url
            console.log(gif1)
            $("#gif1").attr("src", gif1);
        })
        .catch(err => {
      	  console.error(err);
        });
      } 
    })
    .catch(err => {
	    console.error(err);
    });
}


// Animation rose
var falling = true;
TweenLite.set("#container",{perspective:600})
// TweenLite.set("img",{xPercent:"-50%",yPercent:"-50%"})

var total = 8;
var container = document.getElementById("container"),	w = window.innerWidth , h = window.innerHeight;
 
 for (i=0; i<total; i++){ 
   var Div = document.createElement('div');
   TweenLite.set(Div,{attr:{class:'dot'},x:R(0,w),y:R(-200,-150),z:R(-200,200)});
   container.appendChild(Div);
   animm(Div);
 }
 
 function animm(elm){   
   TweenMax.to(elm,R(6,15),{y:h+100,ease:Linear.easeNone,repeat:-1,delay:-20});
   TweenMax.to(elm,R(4,8),{x:'+=100',rotationZ:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
   // TweenMax.to(elm,R(2,8),{rotationX:R(0,360),rotationY:R(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
 };


function R(min,max) {return min+Math.random()*(max-min)};