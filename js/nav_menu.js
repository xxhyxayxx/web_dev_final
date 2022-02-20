document.addEventListener('DOMContentLoaded',
    function () {
        const nav = document.getElementById('nav-wrapper');
        const hamburger = document.getElementById('js-hamburger');
        const blackBg = document.getElementById('js-black-bg');
        hamburger.addEventListener('click', function () {
            nav.classList.toggle('open');
        });

        blackBg.addEventListener('click', function () {
            nav.classList.remove('open');
        });

        window.addEventListener('scroll', function(){
            console.log(window.scrollY);
            if( 400 < window.scrollY ) {
                document.getElementById('header-fix-color').classList.add('color_red');
            } else if ( 400 > window.scrollY ){
                document.getElementById('header-fix-color').classList.remove('color_red');
                console.log(true);
            }
        });
    });