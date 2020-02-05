let bird, pipe;
let pv = [];

function setup() {
    background(220);
    frameRate(30);
	// createCanvas(450, 570);
	color(BACKGROUND);
	createCanvas(800, 1080);
	// createCanvas(windowWidth-10, windowHeight-2);
	// bird = new Bird(440, 100, img);
	bird = new Bird(40, 100, img);
	// let fs = fullscreen();
	// fullscreen(!fs);
}


let img, img2, imgtop, backgroundd;
let font;

function preload() {
	// img = loadImage('images/yawnick.png');
	img = loadImage('https://i.imgur.com/RcdN7kv.png');
	imgtop = loadImage('https://i.imgur.com/xV9C0qd.png');
	img2 = loadImage('https://i.imgur.com/vzybP1t.png');
	backgroundd = loadImage('https://i.imgur.com/Iw7hroH.png');
	// font = loadFont('');
	// font = loadFont('fonts/consola.ttf');
	// loadFont('/mnt/c/Users/kyley/OneDrive/consola.ttf');
}


// function pipe() {
//     fill(124, 252, 0);
//     rect(x, y, 55, 300);
//     rect(x2, -400, 55, 300);
//     x -= 3
//     x2 -= 3;
// }
let balance = false;
let score = 0;
let need_check = true;
function genPipes() {
	// let x = 850, y = 0;	
	let x = 450, y = 0;
	let h = floor(random(50, 375));
	if(!bird.dead) {
		let temp = new Pipe(imgtop, x, y, 60, h);
		if(h < 85) y += 20;
		let temp2 = new Pipe(img2, x, y+(h+95), 58, h+400);
		pv.push(temp);
		pv.push(temp2);
		pv[0].show();
		pv[0].update();
		pv[1].show();
		pv[1].update();
		let goal = new Goal(pv[0].x+60, pv[0].y+pv[0].h, 55, 99);
		goal.show();
		goal.update();
		// if(((bird.x >= pv[0].x && bird.x <= pv[0].x+55 && bird.y < goal.y-20)) ||
		// 	((bird.x >= pv[1].x && bird.x <= pv[1].x+55 && bird.y >= goal.y+100))) {
		// 	bird.dead = true;
		// }
		if(bird.x+34 >= pv[0].x && bird.x+34 <= pv[0].x+pv[0].w+15 && bird.y <= pv[0].h ||
		   bird.x+34 >= pv[1].x && bird.x+34 <= pv[1].x+pv[1].w+20 && bird.y+30 >= pv[0].h+goal.h) {
				bird.dead = true;
		}
		else if(((bird.x >= goal.x && bird.x <= goal.x + goal.w) && (bird.y >= goal.y && bird.y <= goal.y + goal.h)) && need_check) {
			bird.anothaOne();
			score = bird.rounds_alive;
			need_check = false;
			// setTimeout()
			// fill(255, 0, 0);
			// textFont(font);
			// textSize(50);
			// text(score, 20, 200);
		}
		if(frameCount % (30*5.5) === 0) {
			delete pv[0]; 
			delete pv[1];
			pv.shift(); 
			pv.shift(); 
			need_check = true;
		}
	}
}

function showScore(score) {
	fill(0);
	// textFont(font);
	textSize(50);
	let tempx = 135, tempy = 60;
	if(score > 9) {
		tempx = 115;
	}
	if(score > 99) {
		tempx = 95;
	}
	if(score > 999) {
		tempx = 30;
		score = "STOP PLS";
	}
	// tempx += 380;
	text("Score: ", tempx, tempy);
	text(score, tempx+150, tempy+2);
}

let grav = 0;

// function bird(grav) {
// 	image(img, -180, grav, width/14, height/14);
// }

function keyPressed() {
	if(keyCode === 32 && !bird.dead) {
		bird.fly();
	}
	if(keyCode === 82) {
		reset();
	}

	// fill(255, -1550)
	return false;
}

function touchStarted() {
	if(!bird.dead) {
		bird.fly();
	}
	return false;
}

let BACKGROUND = 220;

function youLose() {
	// text("YOU LOSE LOL \n#CHARLIE", -200, 0);
	fill(255, 0, 0);
	// text("GAVE OVER, \nCHARLIE!", 445, 250);
	text("GAME OVER \nCHARLIE", 80, 250);
}

function ground() {
	fill(0);
	rect(0, 530, displayWidth, 40);
}

function startGame() {
	fill(124, 252, 0);	
	genPipes();
	bird.show();
	bird.update();
	showScore(score);
}

function redraw() {
	// image(backgroundd, 400, 0, 450, 570);
	image(backgroundd, 0, 0, 450, windowHeight);
}

function reset() {
	pv[0].x += 1000;
	pv[1].x += 1000;
	redraw();
	delete bird;
	// bird = new Bird(440, 100, img);
	bird = new Bird(40, 100, img);
	bird.dead = false;
	score = 0;
	loop();
	startGame();
}

function bar() {
	fill(255, 255, 255);
	// fill(255, 0, 0);
	rect(450, 0, 60, windowHeight);
}

function touchMoved() {
	reset();
	return false;
}

function bottomBar() {
	fill(255, 255, 255);
	rect(0, 577, windowWidth, 1000);
}

function draw() {
	noStroke();
	// background(BACKGROUND);
	// image(backgroundd, 400, 0, 450, 570);
	image(backgroundd, 0, 0, 450, windowHeight);
	// fill(0);
	// ground();
	// fill(124, 252, 0);
	startGame();	
	bar();
	bottomBar();
	// genPipes();
	// bird.show();
	// bird.update();
	// showScore(score);
	// fill(255, 255, 255);
	// rect(330, 0, 70, 800);
	// pipe();
	if(bird.dead) {
		// console.log("DEAD");
		bird.heDead();
		fill(124, 252, 0);
		pv[0].show();
		pv[1].show();
		bottomBar();
		youLose();
		//? javascript function to wait 3000ms (3 seoncds) until it calls noLoop() so bird can fall
		setTimeout(function() {
			noLoop();
			// console.log("NICE YOU LOST");
		}, 3000);
	}
}
