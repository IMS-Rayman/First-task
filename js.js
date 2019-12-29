var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');

ctx.strokeStyle="black";
ctx.lineWidth="1";
ctx.moveTo(40,40);
ctx.lineTo(40,370);
ctx.stroke();
ctx.moveTo(10,340);
ctx.lineTo(500,340);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="gray";
ctx.lineWidth="1";
ctx.moveTo(30,320);
ctx.lineTo(40,320);
ctx.moveTo(30,300);
ctx.lineTo(40,300);
ctx.moveTo(30,280);
ctx.lineTo(40,280);
ctx.moveTo(30,260);
ctx.lineTo(40,260);
	
ctx.moveTo(20,240);
ctx.lineTo(40,240);
ctx.moveTo(30,220);
ctx.lineTo(40,220);
ctx.moveTo(30,200);
ctx.lineTo(40,200);
ctx.moveTo(30,180);
ctx.lineTo(40,180);
ctx.moveTo(30,160);
ctx.lineTo(40,160);

ctx.moveTo(20,140);
ctx.lineTo(40,140);
ctx.moveTo(30,120);
ctx.lineTo(40,120);
ctx.moveTo(30,100);
ctx.lineTo(40,100);
ctx.moveTo(30,80);
ctx.lineTo(40,80);
ctx.moveTo(30,60);
ctx.lineTo(40,60);
ctx.stroke();

ctx.moveTo(60,340);
ctx.lineTo(60,350);
ctx.moveTo(80,340);
ctx.lineTo(80,350);
ctx.moveTo(100,340);
ctx.lineTo(100,350);
ctx.moveTo(120,340);
ctx.lineTo(120,350);

ctx.moveTo(140,340);
ctx.lineTo(140,360);
ctx.moveTo(160,340);
ctx.lineTo(160,350);
ctx.moveTo(180,340);
ctx.lineTo(180,350);
ctx.moveTo(200,340);
ctx.lineTo(200,350);
ctx.moveTo(220,340);
ctx.lineTo(220,350);

ctx.moveTo(240,340);
ctx.lineTo(240,360);
ctx.moveTo(260,340);
ctx.lineTo(260,350);
ctx.moveTo(280,340);
ctx.lineTo(280,350);
ctx.moveTo(300,340);
ctx.lineTo(300,350);

ctx.moveTo(320,340);
ctx.lineTo(320,360);
ctx.moveTo(340,340);
ctx.lineTo(340,350);
ctx.moveTo(360,340);
ctx.lineTo(360,350);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth="1";
ctx.moveTo(40,250);
ctx.lineTo(80,240);
ctx.moveTo(80,240);
ctx.lineTo(120,280);
ctx.moveTo(120,280);
ctx.lineTo(140,210);
ctx.moveTo(140,210);
ctx.lineTo(160,240);
ctx.moveTo(160,240);
ctx.lineTo(210,175);
ctx.stroke();

ctx.beginPath();
ctx.fillStyle="red";
ctx.arc(40,250,3,0,360);
ctx.closePath();
ctx.stroke();
ctx.fill();

ctx.beginPath();

ctx.arc(80,240,3,0,360);
ctx.closePath();
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(120,280,3,0,360);
ctx.closePath();
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(140,210,3,0,360);
ctx.closePath();
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(160,240,3,0,360);
ctx.closePath();
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(210,175,3,0,360);
ctx.closePath();
ctx.stroke();
ctx.fill();


ctx.beginPath();


//ctx.lineTo(70,140);
ctx.stroke();

//ctx.lineTo(120,180);
ctx.stroke();

//ctx.beginPath();
//ctx.lineWidth=2;

//ctx.fillStyle="white";
//ctx.strokeStyle="blue";
//ctx.arc(40,150,5,0,360);
//ctx.arc(60,100,5,0,360);
//ctx.stroke();
//ctx.fill();




