const mediumBp = matchMedia('(min-width: 600px)');
const changeSize = mql => {
  mql.matches 
    ? document.body.style.background = 'red'
    : document.body.style.background = 'yellow'
}

mediumBp.addListener(changeSize);
changeSize(mediumBp);