// ***********Drawing Sad Face*************///
// draw face
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(200, 90, 60, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "yellow";
ctx.fill();

//draw  left eye
ctx.beginPath();
ctx.arc(180, 70, 7, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "black";
ctx.fill();

//draw  right eye
ctx.beginPath();
ctx.arc(220, 70, 7, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "black";
ctx.fill();

//draw sad
ctx.beginPath();
ctx.arc(200, 125, 18, 3, 2 * Math.PI);
ctx.lineWidth = 5;
ctx.stroke();

// c.addEventListener("mouseenter", function () {
// ctx.arc(200, 125, 18, 3, 2 * Math.PI);})
//happy ctx.arc(200, 115, 18, 6, 1.1 * Math.PI);;

// ***********Drawing smily Face*************///
// draw face
var c2 = document.getElementById("myCanvas2");
var ctx = c2.getContext("2d");
ctx.beginPath();
ctx.arc(200, 90, 80, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "yellow";
ctx.fill();

//draw  left eye
ctx.beginPath();
ctx.arc(170, 70, 7, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "black";
ctx.fill();

//draw  right eye
ctx.beginPath();
ctx.arc(230, 70, 7, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "black";
ctx.fill();

//draw happy
ctx.beginPath();
ctx.arc(200, 115, 20, 6, 1.1 * Math.PI);
ctx.lineWidth = 5;
ctx.stroke();

c.addEventListener("mouseenter", function () {
  c2.style.display = "block";
  c.style.display = "none";
  console.log("mouse enter");
});

c2.addEventListener("mouseleave", function () {
  c.style.display = "block";
  c2.style.display = "none";
  console.log("mouse leave");
});
