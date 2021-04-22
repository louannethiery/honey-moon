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


      // Faire apparaitre l'animation confetti :
      if (response.percentage >= 60) {
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
      }else{
        fetch("https://giphy.p.rapidapi.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=alone&limit=1", {
	        "method": "GET",
	        "headers": {
		      "x-rapidapi-key": "2825444912msh860fd3c75e79e06p1fb70ejsn604c80514e71",
		      "x-rapidapi-host": "giphy.p.rapidapi.com"
	      }
        })
        .then(response =>response.json())
        .then(response => {
	        // console.log(response);
          document.getElementById("gif1").innerText = response.embed_url ;

          //let gif1 = response.embed_url
          //console.log(gif1)
         // $("#gif1").attr("embed_url", gif1);




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