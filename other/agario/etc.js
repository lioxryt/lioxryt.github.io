function isCanvasSupported(){
  var elem = document.createElement('canvas');
  return !!(elem.getContext && elem.getContext('2d'));
}
function rand(min,max,interval) {
  if(interval)
    return min + Math.round(Math.random() * (max - min))
  else
    return min + Math.round(Math.random() * interval) * (max - min) / interval
}

var isEventSupported = (function(){
 var TAGNAMES = {
   'select':'input','change':'input',
   'submit':'form','reset':'form',
   'error':'img','load':'img','abort':'img'
 }
 function isEventSupported(eventName) {
   var el = document.createElement(TAGNAMES[eventName] || 'div');
   eventName = 'on' + eventName;
   var isSupported = (eventName in el);
   if (!isSupported) {
     el.setAttribute(eventName, 'return;');
     isSupported = typeof el[eventName] == 'function';
   }
   el = null;
   return isSupported;
 }
 return isEventSupported;
})();

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       || 
          window.webkitRequestAnimationFrame || 
          window.mozRequestAnimationFrame    || 
          window.oRequestAnimationFrame      || 
          window.msRequestAnimationFrame     || 
          function( callback ){
            window.setTimeout(callback, 30);
          };
})();
