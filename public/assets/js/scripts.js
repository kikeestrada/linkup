!function(){return function e(t,n,r){function o(u,l){if(!n[u]){if(!t[u]){var s="function"==typeof require&&require;if(!l&&s)return s(u,!0);if(c)return c(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var i=n[u]={exports:{}};t[u][0].call(i.exports,function(e){return o(t[u][1][e]||e)},i,i.exports,e,t,n,r)}return n[u].exports}for(var c="function"==typeof require&&require,u=0;u<r.length;u++)o(r[u]);return o}}()({1:[function(e,t,n){"use strict";var r=e("./modules/topNav"),o=e("./modules/searchFilter");(0,r.topNav)(),(0,o.searchFilter)(),document.body.classList.contains("home")||document.body.classList.contains("page2")},{"./modules/searchFilter":2,"./modules/topNav":3}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.searchFilter=function(){var e,t,n,r=function(e,t,n){var r=document.querySelectorAll(t),o=document.querySelectorAll(n);r.forEach(function(t){t.textContent.toUpperCase().includes(e)?t.style.display="block":t.style.display="none"}),o.forEach(function(t){t.textContent.toUpperCase().includes(e)?t.style.display="block":t.style.display="none"})};e=document.getElementById("searchInput"),t=".class-item__fragment",n=".class-item",e.addEventListener("keyup",function(e){"Escape"===e.key&&(e.target.value=""),r(e.target.value.toUpperCase(),t,n)})}},{}],3:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.topNav=function(){document.querySelector(".hamburger").addEventListener("click",function(e){e.preventDefault(),[].map.call(document.querySelectorAll(".hamburger"),function(e){e.classList.toggle("is-active")}),[].map.call(document.querySelectorAll(".top-nav__menu"),function(e){e.classList.toggle("show-top-nav")})})}},{}]},{},[1]);
//# sourceMappingURL=scripts.js.map
