function match(){
    var saisie1 =document.getElementById("yourname").value;
    var saisie2 =document.getElementById("theirname").value;

    if (saisie1 == "") { 
	    alert("Un champ n'est pas remplie"); 
	    return false; 
	}if (saisie2 == "") { 
	    alert("Un champ n'est pas remplie"); 
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
    .then(response => {
	    console.log(response);
    })
    .catch(err => {
	    console.error(err);
    });
}



/*function init () {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    console.log(ctx);
    var w = canvas.width;
    var h = canvas.height;

   // var bg = new Image();
   // bg.src = "../img/rose-318d4b03196e7b61af1c3587d977ef2b.png";

    var flakes = [];

    function snowfall () {
        ctx.clearRect(0, 0, w, h);
       // ctx.drawImage(bg, 0, 0);
        addFlake();
        snow();
    };

    function addFlake () {
        var x = Math.ceil(Math.random() * w);
        var s = Math.ceil(Math.random() * 100);
        flakes.push({"x": x, "y": 0, "s": s});
    };

    function snow () {
        for (var i = 0; i < flakes.length; i++) {
            var flake = flakes[i];
            ctx.beginPath();
           // ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
            var img = new Image();
            img.src = "img/rose-318d4b03196e7b61af1c3587d977ef2b.png";
            //var img = "img/rose-318d4b03196e7b61af1c3587d977ef2b.png";
            var pat = ctx.createPattern(img, "repeat");
           // ctx.rect(0, 0, 10, 5);
            ctx.fillStyle = pat;
            
            ctx.arc(flake.x, flakes[i].y+=flake.s/2, flake.s/2, 0, 2 * Math.PI);
            ctx.fill();
            //if(flakes[i].y > h){
              //  flakes.splice(i, 1);
            //}
        };
    };

    setInterval(snowfall, 500);
};
window.onload = init; 

*/

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
