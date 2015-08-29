////////////////////////////////////////////////////////////////////////////// 
//   ____ _          _                    ____                              //
//  / ___(_)_ __ ___| | ___  __   _____  / ___|  __ _ _   _  __ _ _ __ ___  //
// | |   | | '__/ __| |/ _ \ \ \ / / __| \___ \ / _` | | | |/ _` | '__/ _ \ //
// | |___| | | | (__| |  __/  \ V /\__ \  ___) | (_| | |_| | (_| | | |  __/ //
//  \____|_|_|  \___|_|\___|   \_/ |___/ |____/ \__, |\__,_|\__,_|_|  \___| //
//                                                 |_|                      //
//////////////////////////////////////////////////////////////////////////////
// A game about determining superior geometry.
//

window.addEventListener('load', function() {
	document.getElementById('circle-vs-square')
			.addEventListener('click', function(){
				new Game();
			});
});

var Game = function () {
	this.c = new Coquette(this, 'circle-vs-square', 800, 600, 'white');
	this.c.height = 600;
	this.c.width = 800;
	this.c.gravity = 1;

	var squareSettings = {
		center: { x:200, y:400}, 
		size:{x:100, y:100}, 
		color: '#f07'
	};

	var circleSettings = {
		center: {x: 600, y: 400},
		size: 	{x: 100, y: 100},
		color:  "#099"
	};

	this.c.entities.create(Circle, circleSettings);
	this.c.entities.create(Square, squareSettings);
};

Game.prototype = {

};

var Circle = function (game, settings) {
	this.c = game.c;
	this.center = settings.center;
	this.size = settings.size;
	this.color = settings.color;
	this.velocity = {x: 5, y:0};
};

Circle.prototype = {
	update: function() {
		// WHY THIS NO WORK?! (ノಠ益ಠ)ノ彡┻━┻
		// var input = this.c.inputter;
		// var down  = this.c.inputter.isDown;

		// Lateral movement
		if(this.c.inputter.isDown(this.c.inputter.J))
			this.center.x -= this.velocity.x;
		if(this.c.inputter.isDown(this.c.inputter.L))
			this.center.x += this.velocity.x;

		// Vertical movement
		if(this.center.y + this.size.y/2 <= this.c.height) {
			this.velocity.y -= this.c.gravity;
		} else {
			this.velocity.y = 0;
		}
		if(this.c.inputter.isDown(this.c.inputter.I)){
			if(this.center.y > this.c.height - 100 && this.velocity.y >= 0)
				this.velocity.y = 20;
		}
		
		// console.log(this.velocity.y);
		this.center.y -= this.velocity.y;
	},

	draw: function(ctx) {
		ctx.beginPath();
		ctx.arc(this.center.x,
				this.center.y,
				this.size.x / 2,
				0,
				Math.PI * 2,
				true);
		ctx.closePath();
		ctx.strokeStyle = this.color;
		ctx.stroke();
	}
};

var Square = function (game, settings) {
	this.c = game.c;
	this.center = settings.center;
	this.size  = settings.size;
	this.color = settings.color;
	this.velocity = {x:5, y:0};
};

Square.prototype = {
	update: function() {
		// Lateral movement
		if(this.c.inputter.isDown(this.c.inputter.A))
			this.center.x -= this.velocity.x;
		if(this.c.inputter.isDown(this.c.inputter.D))
			this.center.x += this.velocity.x;

		// Vertical movement
		if(this.center.y + this.size.y/2 <= this.c.height) {
			this.velocity.y -= this.c.gravity;
		} else {
			this.velocity.y = 0;
		}
		if(this.c.inputter.isDown(this.c.inputter.W)){
			if(this.center.y > this.c.height - 50 && this.velocity.y >= 0)
				this.velocity.y = 10;
		}
		
		// console.log(this.velocity.y);
		this.center.y -= this.velocity.y;
	},

	draw: function(ctx) {
		ctx.strokeStyle = this.color;
		ctx.strokeRect(this.center.x - this.size.x / 2, 
					   this.center.y - this.size.y / 2,
					   this.size.x, this.size.y);
	}
};