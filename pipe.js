class Pipe {
	constructor(img, x, y, w, h) {
		this.img = img;
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.xvel = 4.8;
		this.ptr;
		this.ptr2;
	}

	update() {
		this.x -= this.xvel;
	}

	remove() {
		this.ptr.remove();
		this.ptr2.remove();
	}

	show() {
		// rect(this.x, this.y, this.w, this.h);
		if(this.img === imgtop) 
			image(this.img, this.x, this.y, this.w, this.h+8);
		else
			image(this.img, this.x, this.y-25, this.w, this.h);
	}
};