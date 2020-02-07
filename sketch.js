let bird, pipe;
let pv = [];
let start = false;
let needScale = false;

function setup() {	
    background(220);
    frameRate(30);
	scale(0);
	createCanvas(windowWidth-4, windowHeight-4);
	genBird();
	// let fs = fullscreen();
	// if(!fs) {
	// 	console.log("Fullscreen");
	// 	fullscreen(true);
	// }
	// createCanvas(windowWidth-10, windowHeight-2);
	// bird = new Bird(40, windowHeight/3, img);
	color(0, 0, 255);
	// startt();
}

function checkforInput() {
	// fill(0, 0, 255);
	textSize(40);
	text("Press any key", 90, 200);
	text("Or touch to start", 70, 245);
}

function windowResized() {
	resizeCanvas(windowWidth-3, windowHeight-3);
	gifpos.x = 635;
	gifpos.y = windowHeight/4;
	gif.position(gifpos.x, gifpos.y);
}

function genBird() {
	// createCanvas(800, 1080);
	// createCanvas(windowWidth-10, windowHeight-2);
	// bird = new Bird(440, 100, img);
	bird = new Bird(40, windowHeight/3, img);
	color(0, 0, 255);
}


let img, img2, imgtop, backgroundd;
let font;
let gif, mlg;
let gifpos = {x:0, x:0};

function preload() {
	
	// img = loadImage('images/yawnick.png');
	img = loadImage('https://i.imgur.com/Z5gsvRV.png');
	imgtop = loadImage('https://i.imgur.com/xV9C0qd.png');
	img2 = loadImage('https://i.imgur.com/vzybP1t.png');
	backgroundd = loadImage('https://i.imgur.com/Iw7hroH.png');
	gif = createImg('https://media.giphy.com/media/yXVO50FJIJMSQ/giphy.gif');
	gifpos.x = 635;
	gifpos.y = windowHeight/5.5;
	gif.position(gifpos.x, gifpos.y);
	gif.hide();
	mlg = createImg('https://media.giphy.com/media/jQ9mAVH5VXwty/giphy.gif');
	mlg.hide();
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
let count = 0;

function genPipes() {
	// let x = 850, y = 0;	
	let x = 450, y = 0;
	let h = floor(random(50, 375));
	if(!bird.dead) {
		let temp = new Pipe(imgtop, x, y, 63, h);
		if(h < 85) y += 12;
		let temp2 = new Pipe(img2, x, y+(h+105), 61, windowHeight);
		pv.push(temp);
		pv.push(temp2);
		if(pv[count].x <= 450) {
			pv[count].show();
			pv[count+1].show();
		}
		pv[count].update();
		pv[count+1].update();
		let goal = new Goal(pv[count].x+60, pv[count].y+pv[count].h, 55, 99);
		goal.show();
		goal.update();
		// if(((bird.x >= pv[count].x && bird.x <= pv[count].x+55 && bird.y < goal.y-20)) ||
		// 	((bird.x >= pv[count+1].x && bird.x <= pv[count+1].x+55 && bird.y >= goal.y+100))) {
		// 	bird.dead = true;
		// }
		if (bird.x + 32 >= pv[count].x && bird.x + 32 <= pv[count].x + pv[count].w + 15 && bird.y + 4 <= pv[count].h ||
			bird.x + 32 >= pv[count+1].x && bird.x + 32 <= pv[count+1].x + pv[count+1].w + 20 && bird.y >= pv[count].h + goal.h) {
			bird.dead = true;
		}	
		if(((bird.x >= goal.x && bird.x <= goal.x + goal.w) && (bird.y >= goal.y && bird.y <= goal.y + goal.h)) && need_check) {
				bird.anothaOne();
				score = bird.rounds_alive;
				// need_check = false;
				// setTimeout()
				// fill(255, 0, 0);
				// textFont(font);
				// textSize(50);
				// text(score, 20, 200);
			}
		if(frameCount % (30*4) === 0) {
			// delete pv[count]; 
			// delete pv[count+1];
			// pv.shift(); 
			// pv.shift(); 
			pv[count].remove();
			pv[count+1].remove();
			pv.splice(count);
			pv.splice(count+1);
			count += 2;
			// need_check = true;
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
	if(score >= 1000) {
		tempx = 30;
		score = "STOP PLS";
	}
	// tempx += 380;
	if(needScale) tempx -= 15;
	text("Score: ", tempx, tempy);
	text(score, tempx+150, tempy+2);
}

let grav = 0;

// function bird(grav) {
// 	image(img, -180, grav, width/14, height/14);
// }

function keyPressed() {
	if(!start) {
		let fs = fullscreen();
		if(!fs) fullscreen(true);
		start = true; 
	}
	if(keyCode === 32 && !bird.dead) {
		needScale = false;
		bird.fly();
	}
	if(keyCode === 82) {
		reset();
	}

	// fill(255, -1550)
	return false;
}

let BACKGROUND = 220;

function youLose() {
	// text("YOU LOSE LOL \n#CHARLIE", -200, 0);
	fill(255, 0, 0);
	// text("GAVE OVER, \nCHARLIE!", 445, 250);
	if(charlie) {
		if(needScale) {
			fill(44, 40, 53);
			rect(80, 85, 290, 115);
			fill(255, 0, 0);
			text("Gamer Over", 85, 125);
			text("Charlie!", 133, 190);
		}
		else {
			fill(44, 40, 53);
			rect(40, 70, 360, 120);
			fill(255, 0, 0);
			text("Gamer Over", 85, 115);
			text("Charlie!", 135, 180);
		}
	}
	else if(!needScale) text("Game Over", 85, 175);
	else if(needScale) text("Game Over", 5, 175);
}

function ground() {
	fill(0);
	rect(0, 530, displayWidth, 40);
}

function startGame() {
	fill(124, 252, 0);	
	// genBird();
	genPipes();
	bird.show();
	bird.update();
	showScore(score);
}

function redraww() {
	// image(backgroundd, 400, 0, 450, 570);
	image(backgroundd, 0, 0, 450, windowHeight);
}

function reset() {
	start = false;
	reset_game_and_count = true;
	pv[count].x += 1000;
	pv[count+1].x += 1000;
	// redraww();
	bird.dead = false;
	delete bird;
	// // bird = new Bird(440, 100, img);
	// bird = new Bird(40, 100, img);
	score = 0;
	if (charlie) {
		gif.show();
		mlg.hide();
	}
	loop();
	// startGame();
	genBird(); //* redraw everything and restart program
}

function bar() {
	// fill(255, 255, 255);
	// fill(255, 0, 0);
	fill(40, 44, 53);
	rect(450, 0, 60, windowHeight);
}

// function touchMoved() {
// 	reset();
// 	return false;
// }


let begin = {x:0, y:0};
let end = {x:0, y:0};
let touch = {begin, end};

function touchStarted() {
	if(!start) { 
		needScale = true;
		start = true;
		//? not able to do fullscreen on mobile
		// let fs = fullscreen();
		// if(!fs) fullscreen(true);
		// bird.scalee();
		// start = true; 
	}
	if(!bird.dead) bird.fly();
	touch.begin.x = mouseX;
	touch.begin.y = mouseY;
	return false;
}

function touchEnded() {
	touch.end.x = mouseX;
	touch.end.y = mouseY;
	if(touch.end.y < touch.begin.y && Math.abs(touch.end.y-touch.begin.y) > 100 && Math.abs(touch.begin.x - touch.end.x) <= 80) reset();
	return false;
}

function darkMode() {
	fill(40, 44, 53);
	rect(700, 0, windowWidth, windowHeight);
	rect(0, windowHeight, windowWidth, 100);
}

// function bottomBar() {
// 	// fill(255, 255, 255);
// 	fill(0);
// 	rect(0, 577, windowWidth, 1000);
// }

let charlie = true;
let reset_game_and_count = true;

function draw() {
	noScroll();
	noStroke();
	fill(40, 44, 53);
	rect(0, 0, windowWidth+30, windowHeight+30);
	// background(BACKGROUND);
	// image(backgroundd, 400, 0, 450, 570);
	image(backgroundd, 0, 0, 450, windowHeight);
	if(!start) {
		checkforInput();
	} 
	else startGame();
	darkMode();
	if(charlie){ gif.show(); }
	bar();
	if(bird.dead) {
		if(charlie) {
			gif.hide();
			if(needScale) mlg.position(56, 230);
			else mlg.position(59, 200);
			mlg.show();
		}
		fill(124, 252, 0);
		bird.heDead();
		pv[count].show();
		pv[count+1].show();
		showScore();
		youLose();
		//? javascript function to wait 3000ms (3 seoncds) until it calls noLoop() so bird can fall
		setTimeout(function() {
			noLoop();
			frameCount = 0;
		}, 400);
	}
}

document.ontouchmove = function(event) {
	event.preventDefault();
}

function noScroll() {
  window.scrollTo(0, 0);
}

// add listener to disable scroll
window.addEventListener('scroll', noScroll);


