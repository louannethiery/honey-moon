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
window.onload = init; */