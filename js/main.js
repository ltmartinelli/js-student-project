(function ()
{
    var $body = document.querySelector('body');
    $body.classList.remove('no-js')
    $body.classList.add('js')


    var menu = new Menu({
        container: '.header-nav',
        toggleBtn: '.header-btn-menu',
        widthEnabled: 1024
    })

    var carouselImgs = new Carousel({
        container: '.slider-container .slider',
        items: 'figure',
        btnPrev:'.prev',
        btnNext:'.next'
    })

    var carouselQuotes = new Carousel({
        container: '.quote-container .quote-slider',
        items: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    })

})()