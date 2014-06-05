//倒计时
CountDown = function( time, step , speed){
	this.time = time;
	this.endTime = Date.now()+parseInt(time);
	this.step = step || 1000;
	this.speed = speed || 1000;
	this.inervalId = null;
};

CountDown.prototype = {
	constructor:CountDown,
	start:function(){
		
		var self = this;
		var step = this.step;
		var time = this.time;
		var endTime = this.endTime;
		
		var a = setInterval(function(){
			//time -= step;
			time = endTime - Date.now();
			
			//time = time < 1000 ? 0 : time;
			self.filter( time );
			if( time < 1000 ){
				clearInterval( a );
				setTimeout(function(){
					self.filter(0);	
				}, time);
			}
		}, this.speed);
		
		this.inervalId = a;
		
		this.filter(time);
	},
	stop:function(){
		clearInterval( this.inervalId );
	},
	filter:function( time ){
		//this.time = time;
		var h1 = 1000*60*60;
		var hh = parseInt(time/h1);
		var mm = parseInt(time%h1/(1000*60));
		var ss = parseInt(time%(1000*60)/1000);
		
		this.onChange( hh, mm, ss, time );
	},
	onChange:function(hh, mm, ss, time){
		
	}
}
