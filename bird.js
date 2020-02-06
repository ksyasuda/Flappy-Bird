class Bird {
	constructor(x, y, img) {
		this.x = x;
		this.y = y;
		this.img = img;
		this.gravity = .75;
		this.flap = -11;
		this.dead = false;
		this.rounds_alive = 0;
		this.velocity = 0;
	}

	update() {
		this.velocity += this.gravity;
		if(this.velocity < -10) this.velocity = -10;
		this.y += this.velocity;
		//this.y += this.yspeed;
	}

	fly() {
		this.velocity += this.flap;
		console.log(this.velocity);
		// console.log(this.y);
	}

	show() {
		image(this.img, this.x, this.y, width/24, height/24); //KOBE
	}

	heDead() {
		this.y += 11;
	}

	anothaOne() {
		this.rounds_alive++;
	}
};