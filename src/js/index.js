import {swDetecter} from './modules/swDetecter';
import topNav from './modules/topNav'
import searchFilter from './modules/searchFilter'
import youtubeVideo from './modules/youtube-video'

	swDetecter();
(()=>{
	topNav();
	if (document.body.classList.contains('home')) {
		// functions here
		searchFilter();
		youtubeVideo()
	}else if (document.body.classList.contains('page2')) {
		// functions here
	}else if (document.body.classList.contains('page3')) {
		// functions here
	}
})();
