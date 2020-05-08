import {swDetecter} from './modules/swDetecter';
import topNav from './modules/topNav'
import searchFilter from './modules/searchFilter'
import youtubeVideo from './modules/youtube-video'
import {Prism} from '../../node_modules/prismjs/prism'
import tabs from './modules/tabs'
import accordion from './modules/accordion' 
import {tnsCarousell, tnsSingle, tnsVertical, tnsSyncing} from "./modules/tns-slider";

	swDetecter();
	
(()=>{
	topNav();
	tabs();
	accordion();
	tnsCarousell();  
	tnsSingle();
	tnsVertical();
	tnsSyncing();
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
