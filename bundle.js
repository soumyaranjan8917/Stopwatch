!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){"use strict";!function(){var t=!1,e=!1,n=void 0,r=0,o=0,i=void 0,u=[],c=null,d=0;function l(){(t=!t)?(document.getElementById("start-stop-button").innerHTML="Stop",document.getElementById("split-reset-button").disabled=!1,document.getElementById("split-reset-button").innerHTML="Split",document.getElementById("start-stop-button").innerHTML="Stop",n=Date.now(),i=setInterval(b,10)):(document.getElementById("start-stop-button").innerHTML="Start",document.getElementById("split-reset-button").innerHTML="Reset",document.getElementById("start-stop-button").innerHTML="Start",o=r,clearInterval(i))}function s(){t?(u.push(r),u.length>=20&&u.shift(),p()):(document.getElementById("split-reset-button").disabled=!1,e=!0,u=[],t||(r=0,o=0,e=!1,document.getElementById("split-reset-button").disabled=!0,document.getElementById("split-reset-button").innerHTML="Split",f()))}function a(){var t=document.getElementById("progress-bar-canvas"),e=document.getElementById("app-child");t.width=e.offsetWidth,t.height=e.offsetHeight,d=Math.min(e.offsetWidth-50,e.offsetHeight-50)/2,g()}function f(){m(),p(),g()}function m(){var t=h(r);document.getElementById("minutes").innerHTML=t.minutes,document.getElementById("seconds").innerHTML=t.seconds,document.getElementById("milliseconds").innerHTML=t.milliseconds}function p(){var t=document.getElementById("splits");t.innerHTML="",u.forEach(function(e){var n=document.createElement("li"),r=h(e);n.innerHTML=r.minutes+":"+r.seconds+":"+r.milliseconds,t.appendChild(n)})}function g(){var t=document.getElementById("progress-bar-canvas");(c=t.getContext("2d")).clearRect(0,0,400,200),c.beginPath(),c.lineWidth=5;var e={start:4.72,cw:c.canvas.width/2,ch:c.canvas.height/2,radius:d};!function(t){c.arc(t.cw,t.ch,t.radius+c.lineWidth/2,0,2*Math.PI,!1),c.fillStyle="#171718",c.fill(),c.strokeStyle="#000",c.stroke(),c.fillStyle="#000"}(e),function(t){y(t,60,"#54f04f",t.radius)}(e),function(t){y(t,3600,"#ff66d4",t.radius+c.lineWidth)}(e)}function y(t,e,n,o){var i=t.start,u=t.cw,d=t.ch,l=function(t){return r/1e3/t*100%100}(e)/100*Math.PI*2;c.strokeStyle=n,c.beginPath(),c.arc(u,d,o,i,l+i,!1),c.stroke()}function b(){e?(r=0,o=0,n=Date.now(),e=!1,f()):(r=o+Date.now()-n,m(),g())}function h(t){var e=function(t){return I(v(t),2)}(t),n=function(t){return I(E(t),2)}(t);return{milliseconds:function(t){return I(function(t){return t-6e4*v(t)-1e3*E(t)}(t),3)}(t),seconds:n,minutes:e}}function v(t){return Math.floor(t/6e4)}function E(t){return Math.floor((t-6e4*v(t))/1e3)}function I(t,e){for(var n=t+"";n.length<e;)n="0"+n;return n}a(),g(),window.addEventListener("resize",a),document.getElementById("start-stop-button").addEventListener("click",l),document.getElementById("split-reset-button").addEventListener("click",s)}()}]);