// 'use strict';

// // 네비 효과

// const navbar = document.querySelector('#navbar');
// const navbarHeight = navbar.getBoundingClientRect().height+700;

// document.addEventListener('scroll', function(){
//   if (window.scrollY > navbarHeight) {
//     navbar.classList.add('navbar--dark');
//   } else {
//     navbar.classList.remove('navbar--dark');
//   }
// });

// // nav click 이동

// const navbarMenu = document.querySelector('.navbar__menu');
// navbarMenu.addEventListener('click', function(event){
//   const target = event.target;  //이벤트가 일어날 객체
//   const link = target.dataset.link; //dom의 data
//   if (link == null) {
//     return;
//   }
//   navbarMenu.classList.remove('open');
//   scrollIntoView(link);
// });


// // Navbar toggle button
// const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
// navbarToggleBtn.addEventListener('click', function(){
//   navbarMenu.classList.toggle('open');
// });


// //  contact me button
// const homeContactBtn = document.querySelector('.home__contact');
// homeContactBtn.addEventListener('click',function(){
//   scrollIntoView('#contact');
// });

// // home down blur
// const home = document.querySelector('.home__container');
// const homeHeight = home.getBoundingClientRect().height;
// document.addEventListener('scroll', function(){
//   home.style.opacity = 1 - window.scrollY / homeHeight;
// });

// // arrow visible

// const arrowUp = document.querySelector('.arrow-up');
// document.addEventListener('scroll', () => {
//   if (window.scrollY > homeHeight / 2) {
//     arrowUp.classList.add('visible');
//   } else {
//     arrowUp.classList.remove('visible');
//   }
// });

// // arrow click
// arrowUp.addEventListener('click', () => {
//   scrollIntoView('#home');
// });

// // Projects
// const workMenu = document.querySelector('.work__menu');
// const projectContainer = document.querySelector('.work__projects');
// const projects = document.querySelectorAll('.project');

// workMenu.addEventListener('click', function(e){
//   const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter; 
//   //e.target.parentNode.dataset.filter를 쓴 이유는 메뉴의 숫자부분엔 data-filter값이 없기때문에 숫자부분을 감싸는 부모태그를 받아오는것.
//   if (filter == null) {
//     return; // 화면 다른부분을 클릭해도 그대로 유지해줌.
//   }

//   // projects 클릭
//   const active = document.querySelector('.menu__btn.selected');
//   if (active != null) {
//     active.classList.remove('selected');
//   }
//   e.target.classList.add('selected');

//   projectContainer.classList.add('anime-out');
//   setTimeout(() => {
//       projects.forEach((project) => {
//         if (filter === '*' || filter === project.dataset.type) {
//           project.classList.remove('invisible');
//         } else {
//           project.classList.add('invisible');
//         }
//       });
//       projectContainer.classList.remove('anime-out');
//     }, 300);
// });

// function scrollIntoView(selector) {
//   const scrollTo = document.querySelector(selector);
//   scrollTo.scrollIntoView({ behavior: 'smooth' });
// }



// // 1. 모든 섹션 요소들과 메뉴아이템들을 가지고 온다
// // 2. IntersectionObserver를 이용해서 모든 섹션들을 관찰한다
// // 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다
// const sectionIds = [
//   '#home',
//   '#about',
//   '#skills',
//   '#work',
//   '#contact',
// ];
// const sections = sectionIds.map(id => document.querySelector(id));
// const navItems = sectionIds.map(id =>
//   document.querySelector(`[data-link="${id}"]`)
// );

// let selectedNavIndex = 0;
// let selectedNavItem = navItems[0];
// function selectNavItem(selected) {
//   selectedNavItem.classList.remove('active');
//   selectedNavItem = selected;
//   selectedNavItem.classList.add('active');
// }

// const observerOptions = {
//   root: null,
//   rootMargin: '0px',
//   threshold: 0.3,
// };

// const observerCallback = (entries, observer) => {
//   entries.forEach(entry => {
//     if (!entry.isIntersecting && entry.intersectionRatio > 0) {
//       const index = sectionIds.indexOf(`#${entry.target.id}`);
//       // 스크롤링이 아래로 되어서 페이지가 올라옴
//       if (entry.boundingClientRect.y < 0) {
//         selectedNavIndex = index + 1;
//       } else {
//         selectedNavIndex = index - 1;
//       }
//     }
//   });
// };

// // const observer = new IntersectionObserver(observerCallback, observerOptions);
// // sections.forEach(section => observer.observe(section));
