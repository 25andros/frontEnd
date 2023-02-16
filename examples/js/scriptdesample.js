// This page is to serve as a lander for all Js for sample.

// var box, canvas;

function initCanvas() {
	let canvas = document.getElementById('canvas');
	//can also use .queryselector()
	box = canvas.getContext('2d');

	if (canvas.getContext) {
		const box = canvas.getContext('2d');

		// drawRects();
		// drawFrame(10, 10, 'green', Math.PI / 4); //offset x,y,colour, angle
		doDraw(25, 250);
		// doArc();
		doSpecial();
		// drawFilledRectangle(300, 150, 150, 150, 'yellow', 'purple', 10, angle + 0.5);
	} else {
		('There was an issue');
	}
}

function drawFilledRectangle(x, y, w, h, fillColor, strokeColor, lw, angle) {
	// GOOD PRACTICE : save if the function change the context or coordinate
	// system
	ctx.save();

	// position coordinate system
	ctx.translate(x, y);
	ctx.rotate(angle);

	// set colors, line width...
	ctx.lineWidth = lw;
	ctx.fillStyle = fillColor;
	ctx.strokeStyle = strokeColor;

	// draw at 0, 0 as we translated the coordinate
	// system already
	ctx.fillRect(0, 0, w, h);
	ctx.strokeRect(0, 0, w, h);

	// GOOD PRACTICE : a restore for a save!
	ctx.restore();
}

function drawFrame(xoff, yoff, colour, _angle) {
	box.save();

	box.rotate(_angle);
	box.fillStyle = colour;
	box.fillRect(xoff, xoff, 200, 100);

	box.restore();
}

function drawRects() {
	box.fillStyle = 'green';
	box.fillRect(10, 10, 150, 100);

	box.fillStyle = 'rgba(0, 0, 200, 0.5)';
	box.fillRect(90, 90, 150, 100);

	box.strokeStyle = 'purple';
	box.strokeRect(50, 50, 200, 100);
	box.clearRect(150, 50, 200, 100);
}

function doDraw(a, z) {
	box.save();
	// box.fillStyle = 'blue';
	// box.linewidth = 10;
	box.fillStyle = 'rgba(0,0,200,.3)';

	box.beginPath();
	box.moveTo(a, a);
	box.lineTo(z, z);
	// box.lineTo((a + z) / 2, (a + z) * 0.75);
	box.lineTo(a, z);
	box.closePath();

	box.fill();
	box.stroke();

	box.restore();
}
function doSpecial() {
	var grd = context.createRadialGradient(150, 100, 30, 150, 100, 100);
	grd.addColorStop(0, 'red');
	grd.addColorStop(0.17, 'orange');
	grd.addColorStop(0.33, 'yellow');
	grd.addColorStop(0.5, 'green');
	grd.addColorStop(0.666, 'blue');
	grd.addColorStop(1, 'violet');
	context.fillStyle = grd;
}
function doArc() {
	box.arc(100, 100, 100, 0, 2 * Math.PI);
	box.fillStyle = 'lightBlue';
	box.lineWidth = 5;
	box.strokeStyle = 'black';
	box.fill();
	box.stroke();
}
function speakName() {
	let myName = 'Zack Gibbs';
	let count = 0;

	document.body.innerHTML += '<p>speakName function executed!</p>';

	console.log(myName + ' is my name');
	console.log(count);
	count = count + 1;
	console.log(count);
}

let facts = true;
function TorF() {
	if (facts == true) {
		console.log('That is great');
	} else {
		console.log("That's a lie");
	}
}
function addSomeText() {
	let myName = 'Zack Gibbs';

	// document.body.innerHTML += "<p>Function executed!</p>";
	console.log('more shit to be said...');
	console.log('My name is ' + myName);
}

function movement() {
	// clearConsole();
	let sup = doMath(17, 43);

	return sup;
}

function doMath(a, b) {
	let alpha = a + b;
	console.log('The Value is now: ' + alpha);
	return alpha;
}

function changeMath() {
	// console.log(console.clear);
	let x = 2,
		y = 4,
		z = 6;

	console.log('value of x is ' + x);
}

function clearConsole() {
	console.clear();
}

const select = document.querySelector('select');
const para = document.querySelector('p');

function setAction() {
	const choice = select.value;

	switch (choice) {
		case 'True':
			para.textContent = 'That was true';
			break;

		case 'False':
			para.textContent = "That's a lie";
			break;
		default:
			para.textContent = '';
	}
}
