(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _swDetecter = require('./modules/swDetecter');

var _topNav = require('./modules/topNav');

var _topNav2 = _interopRequireDefault(_topNav);

var _searchFilter = require('./modules/searchFilter');

var _searchFilter2 = _interopRequireDefault(_searchFilter);

var _youtubeVideo = require('./modules/youtube-video');

var _youtubeVideo2 = _interopRequireDefault(_youtubeVideo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _swDetecter.swDetecter)();
(function () {
	(0, _topNav2.default)();
	if (document.body.classList.contains('home')) {
		// functions here
		(0, _searchFilter2.default)();
		(0, _youtubeVideo2.default)();
	} else if (document.body.classList.contains('page2')) {
		// functions here
	} else if (document.body.classList.contains('page3')) {
		// functions here
	}
})();

},{"./modules/searchFilter":2,"./modules/swDetecter":3,"./modules/topNav":4,"./modules/youtube-video":5}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var searchFilter = function searchFilter() {
	// get the input data
	var fnFilter = function fnFilter(inputElement, selector, selectorContainer) {
		inputElement.addEventListener('keyup', function (e) {
			if (e.key === 'Escape') e.target.value = '';
			fnCompareElements(e.target.value.toUpperCase(), selector, selectorContainer);
		});
	};
	var fnCompareElements = function fnCompareElements(filterText, selector, selectorContainer) {
		var searchElements = document.querySelectorAll(selector);
		var searchContainers = document.querySelectorAll(selectorContainer);
		searchElements.forEach(function (el) {
			el.textContent.toUpperCase().includes(filterText) ? el.style.display = 'block' : el.style.display = 'none';
		});
		searchContainers.forEach(function (el) {
			el.textContent.toUpperCase().includes(filterText) ? el.style.display = 'block' : el.style.display = 'none';
		});
	};
	fnFilter(document.getElementById('searchInput'), '.class-item__fragment', '.class-item');
};

exports.default = searchFilter;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var swDetecter = exports.swDetecter = function swDetecter() {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('./sw.js').then(function (reg) {
			return console.log('Registro de SW exitoso', reg);
		}).catch(function (err) {
			return console.warn('Error al tratar de registrar el sw', err);
		});
	}
};

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var topNav = function topNav() {
	var d = document,
	    headerBtn = d.querySelector('.hamburger'),
	    menu = d.querySelector('.top-nav__menu');
	headerBtn.addEventListener('click', function (e) {
		e.preventDefault();
		headerBtn.classList.toggle('is-active'), menu.classList.toggle('is-active');
	});
};

exports.default = topNav;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = youtubeVideo;
/**
*   @fileoverview
*     Componente para incrustar un video de YouTube en nuestro sitio web cuando la resolución es mayor a 64em (1024px), cuando es menor se agrega un enlace al video
*     Dependencias: font-awesome
*
*   @param {String} id, id del video de YouTube, se define en el archivo pug
*   @param {String} $video-width, anchura del contenedor del video, se define en el archivo scss
*
*   @returns {void} no retorna nada
*
*   @author Jonathan MirCha <jonmircha@gmail.com>
*   @version 1.0.0
*/
function youtubeVideo() {
  var d = document,
      w = window,
      mq = w.matchMedia('(min-width: 64em)'),
      youtube = d.querySelectorAll('.Youtube'),
      youtubeWrapper = d.querySelectorAll('.Youtube-wrapper'),
      youtubeIds = [],
      youtubeIframe = [];

  youtube.forEach(function (video, index) {
    return youtubeIds[index] = video.id;
  });

  console.log(youtubeIds);

  function showVideo(mq) {
    if (mq.matches) {
      youtubeWrapper.forEach(function (video, index) {
        video.innerHTML = '<iframe src="https://www.youtube.com/embed/' + youtubeIds[index] + '" frameborder="0"></iframe>';
      });
    } else {
      youtubeWrapper.forEach(function (video, index) {
        video.innerHTML = '<a href="https://www.youtube.com/watch?v=' + youtubeIds[index] + '" target="_blank"><i class="fa fa-youtube-play"></i> Ver Video</a>';
      });
    }
  }

  mq.addListener(showVideo);
  showVideo(mq);
}

},{}]},{},[1]);

//# sourceMappingURL=scripts.js.map
