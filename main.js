class SuperMath {
	constructor() {
		this.X = 0;
		this.Y = 0;
		this.znak = "";
	}
	check(obj) {
		this.X = obj.X;
		this.Y = obj.Y;
		this.znak = obj.znak;
		switch (this.znak) {
			case "+":
				console.log(this.X + this.Y)
				return this.X + this.Y;
			case "-":
				console.log(this.X - this.Y)
				return this.X - this.Y;
			case "/":
				console.log(this.X / this.Y)
				return this.X / this.Y;
			case "*":
				console.log(this.X * this.Y)
				return this.X * this.Y;
			case "%":
				console.log(this.X % this.Y)
				return this.X % this.Y;
			default:
				return this.input();
		}
	}
	input() {
		this.X = +prompt("Enter X");
		this.Y = +prompt("Enter Y");
		this.znak = prompt("Enter znak");
		return this.check({ X: this.X, Y: this.Y, znak: this.znak });
	}
}

let p = new SuperMath();
p.input();