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
window.addEventListener('load', function(){
	document.getElementById('circle-vs-square')
		.addEventListener('click', function(){
			new Game();
		});
});
	
var Game = function (){
	this.c = new Coquette(this,'circle-vs-square', 800, 600, 'white');
	var squareSettings = {
		center : {
			x:400,
			y: 400
		},
		size : {
			x: 100,
			y:100
		},
		color : '#f07'
	};

	var circleSettings = {
		center: {x:600, y: 400},
		size: {x:100, y:100},
		color: '#099'
	};

	this.c.entities.create(Square, squareSettings);
	this.c.entities.create(Circle, circleSettings);

};	

var Circle = function(game,settings){
	this.game = game;
	this.c = game.c;
	this.gravity = 8;
	this.center = settings.center;
	this.size = settings.size;
	this.color = settings.color;
	this.speed = 5;
	this.velocity = (x: 5, y: )

};

Circle.prototype = {
	update: function() {
		var input = this.c.inputter
		var down = input.isDown

		if(this.c.inputter.isDown(this.c.inputter.J))
			this.center.x -= this.speed;
		if(this.c.inputter.isDown(this.c.inputter.L))
			this.center.x += this.speed;
		if(this.c.inputter.isDown(this.c.inputter.I))
			this.center.y -= this.speed;
		if(this.c.inputter.isDown(this.c.inputter.K))
			this.center.y += this.speed;
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

var Square = function (game,settings){
	this.game = game;
	this.center = settings.center;
	this.size = settings.size;
	this.color = settings.color;
	this.speed =5;
	this.c = game.c;
};

Square.prototype = {

	update: function(){
		var input = this.c.inputter
		var down = input.isDown

		if(this.c.inputter.isDown(this.c.inputter.A))
			this.center.x -= this.speed;
		if(this.c.inputter.isDown(this.c.inputter.D))
			this.center.x += this.speed;
		if(this.c.inputter.isDown(this.c.inputter.W))
			this.center.y -= this.speed;
		if(this.c.inputter.isDown(this.c.inputter.S))
			this.center.y += this.speed;
	},

	draw: function(ctx){
		ctx.strokeStyle = this.color;
		ctx.strokeRect(this.center.x-this.size.x / 2,
					   this.center.y-this.size.y / 2,
					   this.size.x,
					   this.size.y); 
	}
};





		