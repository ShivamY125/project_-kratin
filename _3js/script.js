// first on is for search bar:-
let searchForm = document.querySelector('.search-form');
let nextBtn = document.querySelector('.nxt-btn');
let prevBtn = document.querySelector('.pre-btn');
let sliderContainer = document.querySelector('.slider .container');

document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');
    CallDoc.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
}

// second on is for call box:-
let CallDoc = document.querySelector('.CallDoc');

document.querySelector('#call-btn').onclick = () =>
{
    CallDoc.classList.toggle('active');
    searchForm.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
}
// Third for login page:-
let loginform = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>
{
    loginform.classList.toggle('active');
    CallDoc.classList.remove('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}
// Fourth used for menu button below 768px :-
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>
{
    navbar.classList.toggle('active');
    loginform.classList.remove('active');
    CallDoc.classList.remove('active');
    searchForm.classList.remove('active');
   
    
 

}


window.onscroll = () =>
{
    searchForm.classList.remove('active');
    CallDoc.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');

}


// code for Swiper in section buy(products):- 
var swiper = new Swiper(".product-slider", {
  loop:true,
  spaceBetween: 20,
   
  autoplay: {
    delay:7500,
    disableonInteraction: false,

  },
  
  breakpoints: {
    0: {
      slidesPerView: 1,
     
    },
    768: {
      slidesPerView: 2,
 
    },
    1020: {
      slidesPerView: 3,
    
    },
  },
});




//   Slider window of review of doctors:-
var swiper = new Swiper(".review-slider", {
  loop:true,
  spaceBetween: 20,
   
  autoplay: {
    delay:7500,
    disableonInteraction: false,

  },
  
  breakpoints: {
    0: {
      slidesPerView: 1,
     
    },
    768: {
      slidesPerView: 2,
 
    },
    1020: {
      slidesPerView: 3,
    
    },
  },
});

// routine slider
var swiper = new Swiper(".routine-slider", {
  loop: false,
  spaceBetween: 20,
   
  autoplay: {
    delay:7500,
    disableonInteraction: false,

  },
  
  breakpoints: {
    0: {
      slidesPerView: 1,
     
    },
    768: {
      slidesPerView: 3,
 
    },
    1020: {
      slidesPerView: 4,
    
    },
  },
});



