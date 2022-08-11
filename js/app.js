

ScrollReveal().reveal('.header__logo', { 
	
	duration: 840,	
	easing: 'ease-in-out',
	origin: 'bottom',
	distance: '-70px',

});

ScrollReveal().reveal('.header__menu', { 
	
	duration: 840,	
	easing: 'ease-in-out',
	origin: 'bottom',
	distance: '-70px',

});

ScrollReveal().reveal('.home__title', { 
	
	duration: 740,	
	easing: 'ease-in-out',
});

ScrollReveal().reveal('.home__subtitle--second', { 
	
	duration: 740,	
	easing: 'ease-in-out',
});

ScrollReveal().reveal('.home__subtitle--first', { 
	
	duration: 640,	
	easing: 'ease-in-out',
	delay: 240,

});

ScrollReveal().reveal('.project__container--filly', { 
	
	duration: 1050,	
	easing: 'ease-in-out',
	origin: 'bottom',
	distance: '60px',

});

ScrollReveal().reveal('.project__container--linkedin', { 
	
	duration: 1080,	
	easing: 'ease-in-out',
	origin: 'bottom',
	distance: '50px',
	delay: 450,

});

ScrollReveal().reveal('.project__container--vebe', { 
	
	duration: 1080,	
	easing: 'ease-in-out',
	origin: 'bottom',
	distance: '50px',
	delay: 540,

});

ScrollReveal().reveal('.project__container--olla', { 
	
	duration: 1080,	
	easing: 'ease-in-out',
	origin: 'bottom',
	distance: '50px',
	delay: 550,

});



ScrollReveal().reveal('.footer__title', { 
	
	duration: 770,	
	easing: 'ease-in-out',
	delay: 530,
});

ScrollReveal().reveal('.footer__socialmedia--item', { 
	
	duration: 770,	
	easing: 'ease-in-out',
	delay: 530,
});

ScrollReveal().reveal('.footer__email', { 
	
	duration: 770,	
	easing: 'ease-in-out',
	delay: 530,
	
});

ScrollReveal().reveal('.about__header', { 
	
	duration: 780,	
	easing: 'ease-in-out',
	delay: 600,
});

ScrollReveal().reveal('.about__title', { 
	
	duration: 780,	
	easing: 'ease-in-out',
	delay: 200,
});

ScrollReveal().reveal('.about__subtitle', { 
	
	duration: 780,	
	easing: 'ease-in-out',
	delay: 200,
});

ScrollReveal().reveal('.about__text', { 
	
	duration: 780,	
	easing: 'ease-in-out',
	delay: 300,
});


ScrollReveal().reveal('.about__img', { 
	
	duration: 780,	
	easing: 'ease-in-out',
	origin: 'left',
	distance: '80px',
	delay: 600,
});

ScrollReveal().reveal('.value__title', { 
	
	duration: 1100,	
	easing: 'ease-in-out',
	delay: 100,
});

ScrollReveal().reveal('.value__element--alpha', { 
	
	duration: 750,	
	easing: 'ease-in-out',
	delay: 1000,
	origin: 'bottom',
	distance: '200px',

});

ScrollReveal().reveal('.value__element--beta', { 
	
	duration: 1000,	
	easing: 'ease-in-out',
	delay: 1600,
	origin: 'bottom',
	distance: '200px',

});

ScrollReveal().reveal('.value__element--gama', { 
	
	duration: 1000,	
	easing: 'ease-in-out',
	delay: 1900,
	origin: 'bottom',
	distance: '200px',

});

ScrollReveal().reveal('.value__img--responsive', { 
	
	duration: 780,	
	easing: 'ease-in-out',
	delay: 200,
	origin: 'bottom',
	distance: '200px',

});

ScrollReveal().reveal('.value__titleR', { 
	
	duration: 1100,	
	easing: 'ease-in-out',
	delay: 500,
});

ScrollReveal().reveal('.value__element--alphaR', { 
	
	duration: 850,	
	easing: 'ease-in-out',
	delay: 1300,
	origin: 'bottom',
	distance: '200px',

});

ScrollReveal().reveal('.value__element--betaR', { 
	
	duration: 900,	
	easing: 'ease-in-out',
	delay: 1300,
	origin: 'bottom',
	distance: '200px',

});

ScrollReveal().reveal('.value__element--gamaR', { 
	
	duration: 900,	
	easing: 'ease-in-out',
	delay: 1350,
	origin: 'bottom',
	distance: '200px',

});


window.addEventListener("scroll", function(){
	var header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0)
});

var lastScrollTop = 0;
	navbar = document.getElementById("header");
window.addEventListener("scroll", function(){
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if (scrollTop > lastScrollTop){
		navbar.style.top="-135px";
	}else{

		navbar.style.top="0px"
		navbar.style.display="flex";
	}
	
	lastScrollTop = scrollTop;
});

const menu = document.querySelector(".header__list");
const openMenuBtn = document.querySelector(".header__openmenu");
const closeMenuBtn = document.querySelector(".header__closemenu");

function toggleMenu() {
	menu.classList.toggle("header__openedmenu")
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

