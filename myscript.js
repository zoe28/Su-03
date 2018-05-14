
var cnv = document.getElementById('mycanvas');
var ctx = cnv.getContext('2d');
var harryPotterPict = new Image();
var spellPict = new Image();
ctx.strokeStyle = '#bf9e60';
ctx.lineWidth = '10';
harryPotterPict.src = "hp.jpg";
spellPict.src = "spell.png";

harryPotterPict.onload = function () {
  // draw Harry Potter image
  ctx.drawImage(harryPotterPict, 50, -50, harryPotterPict.width * 2.5, harryPotterPict.height * 2.5);
  // draw rectangle
  ctx.strokeRect(100, 60, 300, 150);
  // draw text
  ctx.strokeStyle = '#707c6d';
  ctx.lineWidth = '1.5';
  ctx.font = '22px "Arial Black"';
  ctx.strokeText('You\'re a wizard, Harry', 115, 150);
  // draw circle
  ctx.fillStyle = '#ab674e';
  ctx.arc(900, 300, 55, 0, Math.PI * 2, false);
  ctx.fill();
  ctx.moveTo(1050, 250);
  ctx.arc(1050, 250, 70, 0, Math.PI * 2, false);
  ctx.fill();
  ctx.moveTo(1250, 200);
  ctx.arc(1300, 160, 150, 0, Math.PI * 2, false);
  ctx.fill();
  // draw picture
  spellPict.onload = function () {
    ctx.drawImage(spellPict, 1210, 45, spellPict.width * 0.3, spellPict.height * 0.3);
  }
  // draw triangle
  ctx.fillStyle = '#707c6d';
  ctx.beginPath();
  ctx.moveTo(400, 210);
  ctx.lineTo(450, 210);
  ctx.lineTo(450, 260);
  ctx.fill();

}

var animationCanvas = document.getElementById('animationCanvas');
var animCtx = animationCanvas.getContext('2d');
var snitchPict = new Image();
snitchPict.src = 'snitch.png';

document.addEventListener('mousemove', function(event) {
  animCtx.clearRect(0, 0, animationCanvas.width, animationCanvas.height);
  animCtx.drawImage(snitchPict, event.clientX, event.clientY, snitchPict.width * 0.3, snitchPict.height * 0.3);
});
