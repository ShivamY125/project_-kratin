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

prevBtn.addEventListener('click', () => {
    sliderContainer.scrollBy({
        top: 0,
        left: -300,
        behavior : "smooth"
    })
})

nextBtn.addEventListener('click', () => {
    sliderContainer.scrollBy({
        top: 0,
        left: 300,
        behavior : "smooth"
    })
})