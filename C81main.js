canvas=document.getElementById("MyCanvas");
ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth="2";
ctx.arc(100,100,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth="2";
ctx.arc(180,100,40,0,2* Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth="2";
ctx.arc(260,100,40,0,2* Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth="2";
ctx.arc(130,150,40,0,2* Math.PI);
ctx.stroke();



ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth="2";
ctx.arc(230,150,40,0,2* Math.PI);
ctx.stroke();
