class Goal {

	constructor(x, y, w, h) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.speed = 3;
	}

	show() {
		// fill(255, 0, 0);
		// fill(BACKGROUND);
		noFill();
		rect(this.x, this.y, this.w, this.h);
	}

	update() {
		this.x -= this.speed;
	}
};