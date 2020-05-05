import {swDetecter} from './modules/swDetecter';
import topNav from './modules/topNav'
import searchFilter from './modules/searchFilter'

	swDetecter();
(()=>{
	topNav();
	if (document.body.classList.contains('home')) {
		// functions here
		searchFilter();
	}else if (document.body.classList.contains('page2')) {
		// functions here
	}else if (document.body.classList.contains('page3')) {
		// functions here
	}
})();
