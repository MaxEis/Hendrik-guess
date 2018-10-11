var c = document.getElementById("canvas");
var ctx = c.getContext("2d");


var rect = Math.ceil(Math.random()*20);
var arc = Math.ceil(Math.random()*13);
console.log("rect" + rect);
console.log("arc"+ arc);

document.getElementById("btn").onclick = function() {checkresult()};

function checkresult(){
	var guessr = document.getElementById("rect").value;
	var guess = document.getElementById("arc").value;
	if(guess  == arc && guessr == rect){
		alert("Du bist eine MASCHINE komplett richtig hier 500$");
	}else{
		alert("Komplett falsch !!!" + "Rect= " + rect + "Kreise" + arc);
	}
	
}

var i = 0;
while(i<rect){
	var x = Math.ceil(Math.random()*500);
	var y = Math.ceil(Math.random()*500);
	
	ctx.rect(x,y,12,12);
	ctx.stroke();
	
	i++;
}
var ii = 0;
while(ii<arc){
	var x = Math.ceil(Math.random()*200)+50;
	var y = Math.ceil(Math.random()*200)+50;
	

	ctx.beginPath();
	ctx.arc(x,y,50,0,2*Math.PI);	
	ctx.stroke();
	
	ii++;
}








