const topNav = () => {
	const 
		d = document,
		headerBtn = d.querySelector('.hamburger'),
		menu = d.querySelector('.top-nav__menu');
		headerBtn.addEventListener('click', e => {
			e.preventDefault();
			headerBtn.classList.toggle('is-active'),
			menu.classList.toggle('is-active');
		}); 
};

export default topNav
