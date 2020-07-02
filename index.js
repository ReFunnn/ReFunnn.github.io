// JavaScript Document
var img = 30;
var time = window.setInterval("start()", 3000);
window.onload = start;
function start(){
	if(img < 30)
		img += 3;
	else
		img -=3;
	switch(img % 3){
		case 0:
			img1();
			break;
		case 1:
			img2();
			break;
		case 2:
			img3();
			break;
	}
}
function img1(){
	document.getElementById("box").style.background = "url('img/img1.jpg') center";
	change("circle1", "circle2", "circle3");
	img++;
}
function img2(){
	document.getElementById("box").style.background = "url('img/img2.jpg') center";
	change("circle2", "circle1", "circle3");
	img++;
}
function img3(){
	document.getElementById("box").style.background = "url('img/img3.jpg') center";
	change("circle3", "circle1", "circle2");
	img++;
}
function left(){
	clearInterval(time);
	img++;
	start();
	time = window.setInterval("start()", 3000);
}
function right(){
	clearInterval(time);
	start();
	time = window.setInterval("start()", 3000);
}
function change(id1, id2, id3){
	document.getElementById(id1).style.backgroundColor = "#fff";
	document.getElementById(id2).style.backgroundColor = "transparent";
	document.getElementById(id3).style.backgroundColor = "transparent";
	document.getElementById(id1).style.width = "20px";
	document.getElementById(id1).style.height = "20px";
	document.getElementById(id2).style.width = "16px";
	document.getElementById(id2).style.height = "16px";
	document.getElementById(id3).style.width = "16px";
	document.getElementById(id3).style.height = "16px";
	document.getElementById(id1).style.top = "468px";
	document.getElementById(id2).style.top = "470px";
	document.getElementById(id3).style.top = "470px";
	document.getElementById(id1).style.borderRadius = "10px";
	document.getElementById(id2).style.borderRadius = "8px";
	document.getElementById(id3).style.borderRadius = "8px";
}
function circle1(){
	img = 30;
	clearInterval(time);
	start();
	time = window.setInterval("start()", 3000);
}
function circle2(){
	img = 31;
	clearInterval(time);
	start();
	time = window.setInterval("start()", 3000);
}
function circle3(){
	img = 32;
	clearInterval(time);
	start();
	time = window.setInterval("start()", 3000);
}