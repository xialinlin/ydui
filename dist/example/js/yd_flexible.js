!function(n,t){var e=750,i=n.documentElement,a="orientationchange"in t?"orientationchange":"resize",d=function o(){var n=i.getBoundingClientRect().width;return i.style.fontSize=5*Math.max(Math.min(20*(n/e),11),8.5)+"px",o}();n.addEventListener&&(t.addEventListener(a,d,!1),n.addEventListener("DOMContentLoaded",d,!1),n.addEventListener("touchstart",function(){},!1))}(document,window);