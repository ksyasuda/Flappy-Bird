class Bird {
	constructor(x, y, img) {
		this.x = x;
		this.y = y;
		this.img = img;
		this.yspeed = 5.5;
		this.flap = 50;
		this.dead = false;
		this.rounds_alive = 0;
		this.flying = false;
	}

	update() {
		this.y += this.yspeed;
	}

	fly() {
		this.flying = true;
		this.y -= this.flap;
		// console.log(this.y);
	}

	show() {
		image(this.img, this.x, this.y, width/24, height/24); //KOBE
		this.flying = false;
	}

	heDead() {
		this.y += 6;
	}

	anothaOne() {
		this.rounds_alive++;
	}
};