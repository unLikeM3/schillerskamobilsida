/* energize.js v0.1.0 */
(function(){if("ontouchstart"in window){var b,c,d,e,f,g,a={};b=function(a,b){return Math.abs(a[0]-b[0])>5||Math.abs(a[1]-b[1])>5},c=function(a){this.startXY=[a.touches[0].clientX,a.touches[0].clientY],this.threshold=!1},d=function(a){return this.threshold?!1:(this.threshold=b(this.startXY,[a.touches[0].clientX,a.touches[0].clientY]),void 0)},e=function(a){if(!this.threshold&&!b(this.startXY,[a.changedTouches[0].clientX,a.changedTouches[0].clientY])){var c=a.changedTouches[0],d=document.createEvent("MouseEvents");d.initMouseEvent("click",!0,!0,window,0,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),d.simulated=!0,a.target.dispatchEvent(d)}},f=function(b){var c=Date.now(),d=c-a.time,e=b.clientX,f=b.clientY,h=[Math.abs(a.x-e),Math.abs(a.y-f)],i=g(b.target,"A")||b.target,j=i.nodeName,k="A"===j,l=window.navigator.standalone&&k&&b.target.getAttribute("href");return a.time=c,a.x=e,a.y=f,(!b.simulated&&(500>d||1500>d&&50>h[0]&&50>h[1])||l)&&(b.preventDefault(),b.stopPropagation(),!l)?!1:(l&&(window.location=i.getAttribute("href")),i&&i.classList&&(i.classList.add("energize-focus"),window.setTimeout(function(){i.classList.remove("energize-focus")},150)),void 0)},g=function(a,b){for(var c=a;c!==document.body;){if(!c||c.nodeName===b)return c;c=c.parentNode}return null},document.addEventListener("touchstart",c,!1),document.addEventListener("touchmove",d,!1),document.addEventListener("touchend",e,!1),document.addEventListener("click",f,!0)}})();