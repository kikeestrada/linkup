const tabs = () => {
    const 
        d = document,
        tabs = Array.prototype.slice.apply(d.querySelectorAll('.tabs-container__tab')),
        panels = Array.prototype.slice.apply(d.querySelectorAll('.tabs-container__panel'));

    d.getElementById('tabs').addEventListener('click', e => {
        if(e.target.classList.contains('tabs-container__tab')){
            let i = tabs.indexOf(e.target);
            tabs.map(tab => tab.classList.remove('is-active'));
            tabs[i].classList.add('is-active');
            panels.map(tab => tab.classList.remove('is-active'));
            panels[i].classList.add('is-active');
        }
  })        
};

export default tabs