window.addEventListener('DOMContentLoaded', function() {

    

    const body = document.querySelector('.body');
    const hamburger = document.querySelector('#hamburger');
    const menu = document.querySelector('#menu');
    const navbar = document.querySelector('#navbar');
    const toggle = document.querySelectorAll('.toggle');
    const links = document.querySelectorAll('.links');
    const link = document.querySelectorAll('.link');
    const logo = document.querySelector('#logo');

    window.addEventListener('scroll', function() {
        if(this.scrollY > 20){
            navbar.classList.add('header__sticky');
    
            linksColor('#39015e');
            logo.style.color = "#6911a1";
            toggleColor('#38005c');

            menu.style.borderRadius = "0px 0px 6px 6px";

        }else{
            navbar.classList.remove('header__sticky');
            
            linksColor('#fff');
            logo.style.color = "#FFE2FE";
            toggleColor('#fff');

            menu.style.borderRadius = "6px";
        }
    });
    hamburger.addEventListener('click', () => {
        if(hamburger.classList.contains('open')){
            body.classList.remove('no-scroll');
            hamburger.classList.remove('open');
            console.log('hide');

            //hide animated-menu
            menu.classList.remove('fade-in');
            menu.classList.add('fade-out');
        } else{
            body.classList.add('no-scroll');
            hamburger.classList.add('open');
            console.log('show');

            //show animated-menu
            menu.classList.add('fade-in');
            menu.classList.remove('fade-out');

            
        }
    });

    //Hide links after click
    link.forEach(links => {
        links.addEventListener('click', () => {
            hide();
        })
    });
   
    window.addEventListener('resize', function() {
        if(window.innerWidth > 768){
            hide();
        }
    });

    function hide(){
        body.classList.remove('no-scroll');
        hamburger.classList.remove('open');
        menu.classList.add('fade-out');

    };
    function toggleColor (color){
        toggle.forEach(ele => {
            ele.style.backgroundColor = color;
        })
    };

    function linksColor (color){
        links.forEach(link => {
            link.style.color = color;
        });
    }
});
