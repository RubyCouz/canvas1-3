var c = document.getElementById("voiture");
var ctx = c.getContext("2d");

//caisse
ctx.fillStyle = "#00A551";
ctx.fillRect(125,75,150,75);
ctx.fillRect(50,150,300,75);

//roues
ctx.beginPath();
ctx.arc(75,275,50,0,Math.PI*2,true);
ctx.strokeStyle = "#868686";
ctx.fillStyle = "#CDCDCD";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(325,275,50,0,Math.PI*2,true);
ctx.strokeStyle = "#868686";
ctx.fillStyle = "#CDCDCD";
ctx.fill();
ctx.stroke();
