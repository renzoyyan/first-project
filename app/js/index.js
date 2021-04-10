window.addEventListener('DOMContentLoaded', function() {

    const body = document.querySelector('.body');
    const hamburger = document.querySelector('#hamburger');
    const menus = document.querySelector('#menus'); 
    const menu = document.querySelector('#menu');
    const navbar = document.querySelector('#navbar');
    const toggle = document.querySelectorAll('.toggle');
    const links = document.querySelectorAll('.links');
    const link = document.querySelectorAll('.link');
    const logo = document.querySelector('#logo');

    window.addEventListener('scroll', function() {
        if(this.scrollY > 20){
            navbar.classList.add('header__sticky');
            links.forEach(link => {
                link.style.color = "#39015e";
            });
            logo.style.color = "#6911a1";

            toggle.forEach(element => {
                element.style.backgroundColor = '#38005c';
            });

            menu.style.borderRadius = "0px 0px 6px 6px";

        }else{
            navbar.classList.remove('header__sticky');
            links.forEach(link => {
                link.style.color = "#fff";
            });
            logo.style.color = "#FFE2FE";

            toggle.forEach(element => {
                element.style.backgroundColor = '#fff';
                
            });

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

   

});
