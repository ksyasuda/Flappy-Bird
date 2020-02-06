class Pipe {
	constructor(img, x, y, w, h) {
		this.img = img;
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.xvel = 4.5;
	}

	update() {
		this.x -= this.xvel;
	}

	show() {
		// rect(this.x, this.y, this.w, this.h);
		if(this.img === imgtop)
			image(this.img, this.x, this.y, this.w, this.h+8);
		else
			image(this.img, this.x, this.y-25, this.w, this.h);
	}
};