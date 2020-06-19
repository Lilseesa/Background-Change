const changeBackground = () => {
    let altoPantalla = this.innerHeight;

    this.scrollY > altoPantalla/1.5 
    ? document.body.classList.add('body--active')
    : document.body.classList.remove('body--active');
    
};

window.addEventListener('scroll', changeBackground);