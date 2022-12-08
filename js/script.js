// // ................BURGER................................................

$(document).ready(function () {
   // на header burger вешаем событие клик
   $('.header__burger').click(function (event) {
      // при клике на бургер и хедер меню добавился класс aktive (нажали-добав класс, нажали-убрался класс)
      $('.header__burger, .header__menu').toggleClass('active');
      // при открытом бургере блокируем прокрутку страницы
      $('body').toggleClass('lock');
   });
});
// const headerBurger = document.querySelector('.header__burger');
// const menuHeader = document.querySelector('.header__menu');
// if (headerBurger) {

//    headerBurger.addEventListener("click", function (e) {
//       document.body.classList.toggle('_lock');
//       headerBurger.classList.toggle('_active');
//       menuHeader.classList.toggle('_active');

//    });
//    if (headerBurger.classList.contains('_active')) {
//       document.body.classList.remove('_lock');
//       headerBurger.classList.remove('_active');
//       menuHeader.classList.remove('_active');

//    }

// }


// закрытие бургера, при нажатии на меню
// const headerLinks = document.querySelectorAll('.header__menu')
// headerLinks.forEach((el) => {
//    el.addEventListener('click', () => {
//       $('.header__burger,.header__menu').toggleClass('active');
//    })
// })

// ............................................................................................................
const isMobile = {
   Android: function () { return navigator.userAgent.match(/Android/i); },
   BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
   iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
   Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
   Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
   any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};
let body = document.querySelector('body');
// делаем проверку если мобильное, добавляем класс 'touch'
if (isMobile.any()) {
   document.body.classList.add('_touch');
   // берем все объекты с классом arrow
   let menuArrows = document.querySelectorAll('.menu__arrow');
   if (menuArrows.length > 0) {
      for (let index = 0; index < menuArrows.length; index++) {
         const menuArrow = menuArrows[index];
         menuArrow.addEventListener("click", function (e) {
            menuArrow.parentElement.classList.toggle('_active');
         });
      }
   }
} else {
   document.body.classList.add('_pc');
   let menuArrows = document.querySelectorAll('.menu__arrow');
   if (menuArrows.length > 0) {
      for (let index = 0; index < menuArrows.length; index++) {
         const menuArrow = menuArrows[index];
         menuArrow.addEventListener("click", function (e) {
            menuArrow.parentElement.classList.toggle('_active');
         });
      }
   }
}

// ............................ТАБЫ.................
$(document).ready(function () {
   $('.projects__tabs_item').click(function (e) {
      e.preventDefault()

      // класс где лежать ссылки(табы)
      // 2класс - тело, где лежить контент
      $('.projects__tabs_item').removeClass(' projects__tabs_item--active');
      $('.projects__tabs_block').removeClass('tabs-block--active');


      $(this).addClass('projects__tabs_item--active');

      $($(this).attr('href')).addClass('tabs-block--active')

   });
   $('.projects__tabs_item:first').click();

});

// ........................FILTER....................................
$(document).ready(function () {
   // на header burger вешаем событие клик
   $('.projects__filters').click(function (e) {
      e.preventDefault()

      // при клике на бургер и хедер меню добавился класс aktive (нажали-добав класс, нажали-убрался класс)
      $('.projects__filters, .filter__parametrs').toggleClass('active');
   });
});


// .........................SWIPER.......................................

new Swiper('.project-slider', {
   slidesPerView: 1,
   speed: 800,
   autowidth: true,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },
   nested: true,

   breakpoints: {


      767: {
         slidesPerView: 1,
      },
      320: {
         slidesPerView: 1.1,
         spaceBetween: 15,
      },
   }
});

new Swiper('.others-slider', {
   slidesPerView: 1,
   speed: 800,
   spaceBetween: 34,
   autowidth: true,
   pagination: {
      el: '.swiper-pagination',
      clickable: true,

   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },
   initialSlide: 1,
   adaptiveHeight: true
});

new Swiper('.new-slider', {
   slidesPerView: 1,
   autowidth: true,
   spaceBetween: 10,
   speed: 800,
   pagination: {
      el: '.new-swiper-pagination',
      clickable: true,
   },
   navigation: {
      nextEl: '.new-slider_btn-next',
      prevEl: '.new-slider_btn-prev'
   },
   breakpoints: {

      991: {
         slidesPerView: 2,

      },
      767: {
         slidesPerView: 1,
      },
      320: {
         slidesPerView: 1.1,
         spaceBetween: 5,
      },



      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev'
      },
      initialSlide: 1,
      adaptiveHeight: true
   },


});



// Сортировка по возрастанию и по убыванию

document.querySelector('#sort-asc').onclick = mySort;
document.querySelector('#sort-desc').onclick = mySortDesc;
function mySort() {
   let nav = document.querySelector('.tabs-block__item');
   for (let i = 0; i < nav.children.length; i++) {
      for (let j = i; j < nav.children.length; j++) {
         if (+ nav.children[i].getAttribute('data-sort') > + nav.children[j].getAttribute('data-sort')) {
            replaceNode = nav.replaceChild(nav.children[j], nav.children[i]);
            insertAfter(replaceNode, nav.children[i++]);
         }
      }
   }
}

function mySortDesc() {
   let nav = document.querySelector('.tabs-block__item');
   for (let i = 0; i < nav.children.length; i++) {
      for (let j = i; j < nav.children.length; j++) {
         if (+ nav.children[i].getAttribute('data-sort') < + nav.children[j].getAttribute('data-sort')) {
            replaceNode = nav.replaceChild(nav.children[j], nav.children[i]);
            insertAfter(replaceNode, nav.children[i++]);
         }
      }
   }
}
function insertAfter(elem, refElem) {
   return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}


// спойлер-аккордион
$(document).ready(function () {
   // ссылка, на которую нажимаем
   $('.spoiler__link').click(function (event) {
      // общий класс спойлера
      if ($('.projects__spoiler').hasClass('one')) {
         // ссылка, на которую нажимаем
         $('.spoiler__link').not($(this)).removeClass('hidden');
         // блок который идет сразу после ссылки
         $('.tabs-block').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('hidden').next().slideToggle(300);
   });
});