var c = document.getElementById("canvas");
var ctx = c.getContext("2d");


var rect = Math.ceil(Math.random()*50);
console.log(rect)

document.getElementById("btn").onclick = function() {checkresult()};

function checkresult(){
	var guess = document.getElementById("txt_name").value;
	console.log(guess);
	if(guess == rect){
		alert("100% richtig");
	}else{
		var wrong = guess/rect;
		alert("Falsch! Richtig wäre:" + rect);
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








