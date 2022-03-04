document.addEventListener('DOMContentLoaded',
    function () {
        const nav = document.getElementById('nav-wrapper');
        const hamburger = document.getElementById('js-hamburger');
        const blackBg = document.getElementById('js-black-bg');
        const menu_text =  document.getElementById("menu_text");

        //Press the menu and the process will begin
        hamburger.addEventListener('click', function () {
            //Button turns into an close button
            nav.classList.toggle('open');
            //Text changes
            if(menu_text.innerText === "MENU"){
                menu_text.innerText = "CLOSE";
            }else{
                menu_text.innerText = "MENU";
            }
        });

        //If you click on the background while the menu is open
        blackBg.addEventListener('click', function () {
            //Button turns into an close button
            nav.classList.remove('open');
            //Text changes
            if(menu_text.innerText === "MENU"){
                menu_text.innerText = "CLOSE";
            }else{
                menu_text.innerText = "MENU";
            }
        });

        //Scroll event to change the header text color.
        window.addEventListener('scroll', function(){
            if( 400 < window.scrollY ) {
                document.getElementById('title-color').style.color = '#F15A45';
            } else if ( 400 > window.scrollY ){
                document.getElementById('title-color').style.color = '#FFF';
            }
        });

        const menuLink = document.getElementsByClassName( "header_menu_list_link" );

        for(let i = 0; i < menuLink.length; i++){
            window.addEventListener('scroll', function(){
                if( 400 < window.scrollY ) {
                    menuLink[i].style.color = '#F15A45';
                } else if ( 400 > window.scrollY ){
                    menuLink[i].style.color = '#FFF';
                }
            });
        }
    });