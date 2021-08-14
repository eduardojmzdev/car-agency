/*===== SHOW MENU =====*/
const showMenu = (toggleID, navId)=>{
    const toggle = document.getElementById(toggleID)
    // let ul = document.getElementById("nav_ul")
    const nav = document.getElementById(navId)
    
    if(toggle && nav){
        toggle.addEventListener('click', () =>{
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // console.log(navMenu)
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// ====== SWIPER =====

var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
});

// ==== FEATURE ====

const featButton = document.querySelectorAll('.feature_b')
const features = document.querySelectorAll('.feature')

function showFeature(n){
        
    // console.log(n)
    // console.log( this.getAttribute("value") )
    console.log(this.id)
    let id_f = this.id;
    let valor = this.getAttribute("value");
    let boton_f = document.getElementById(this.id).getAttribute("value");
    
    features.forEach(function(element, index, array){
        let feature = document.getElementById(element.id);
        // console.log(element.id);

        if (element.id == valor) {
            // console.log("OK");
            feature.classList.remove("nodisplay")
            feature.classList.add("blockdisplay")
        } else {
            feature.classList.add("nodisplay")
            feature.classList.remove("blockdisplay")         
        }
        
    })
    
    featButton.forEach(function(boton){
        console.log(boton.id +"-"+id_f)
        let boton_click =  document.getElementById(boton.id);

        if (boton.id == id_f) {
            console.log("OK");
            boton_click.classList.remove("button-light")
            boton_click.classList.add("button-light-active")
        } else {
            boton_click.classList.add("button-light")
            boton_click.classList.remove("button-light-active")         
        }
    })
    // When we click on each nav__link, we remove the show-menu class
    // navMenu.classList.remove('show-menu')
}

featButton.forEach(f => f.addEventListener('click', showFeature));


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    // console.log(window.pageYOffset)
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*===== GSAP ANIMATION =====*/ 

gsap.from('.home__car', {opacity:0, duration:2.5, delay:1.8, x:80})
gsap.from('.home__img', {opacity:0, duration:2, delay:.5, })
gsap.from('.home__data', {opacity:0, duration:2, delay:.8, y:25})
gsap.from('.home__greeting, .home__name, .home__profession, .home__button', {opacity:0, duration:2, delay:1, y:25, ease:'expo.out', stagger: .2})

gsap.from('.nav__logo, .nav__toggle', {opacity:0, duration:2, delay:1.5, y:25, ease:'expo.out', stagger: .2})
gsap.from('.nav__item', {opacity:0, duration:2, delay:1.8, y:25, ease:'expo.out', stagger: .2})
gsap.from('.home__social-icon', {opacity:0, duration:2, delay:2.3, y:25, ease:'expo.out', stagger: .2})