/*! Countdown 2014-06-05 */
APP.CountDown=function(a,b,c){this.time=a,this.endTime=Date.now()+parseInt(a),this.step=b||1e3,this.speed=c||1e3,this.inervalId=null},APP.CountDown.prototype={start:function(){var a=this,b=(this.step,this.time),c=this.endTime,d=setInterval(function(){b=c-Date.now(),a.filter(b),1e3>b&&(clearInterval(d),setTimeout(function(){a.filter(0)},b))},this.speed);this.inervalId=d,this.filter(b)},stop:function(){clearInterval(this.inervalId)},filter:function(a){var b=36e5,c=parseInt(a/b),d=parseInt(a%b/6e4),e=parseInt(a%6e4/1e3);this.onChange(c,d,e,a)},onChange:function(){}};