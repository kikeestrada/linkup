const accordion = () => {
    const
        d = document,
        acc = document.getElementsByClassName("accordion-container__btn-acc");
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        });
    }
};

export default accordion