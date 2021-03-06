class Bird {
	constructor(x, y, img) {
		this.x = x;
		this.y = y;
		this.img = img;
		this.gravity = 1.5;
		this.flap = -24;
		this.dead = false;
		this.rounds_alive = 0;
		this.velocity = 0;
		this.scale = false;
	}

	update() {
		this.velocity += this.gravity;
		if(this.velocity < -12) this.velocity = -12;
		else if(this.velocity > 25) this.velcity = 25;
		this.y += this.velocity;
		if(this.y > windowHeight) {
			bird.dead = true;
		}
		if(this.y < 0) {
			this.y = 0;
		}
		//this.y += this.yspeed;
	}

	fly() {
		this.velocity += this.flap;
		// console.log(this.velocity);
		// console.log(this.y);
	}

	scalee() {
		this.scale = true;
		// this.gravity = 1.02;
		// this.flap = -12.5;
	}

	show() {
		let w = 34;
		let h = 27;
		if(this.scale) {
			image(this.img, this.x, this.y, w*2.7, h*2.7);
		}
		else image(this.img, this.x, this.y, w, h); 
	}

	heDead() {
		this.y += 85;
	}

	anothaOne() {
		this.rounds_alive++;
	}
};