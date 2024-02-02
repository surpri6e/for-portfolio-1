import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const texts = document.querySelectorAll('.nt');

for(let i = 0; i < texts.length; i++) {
    let txt = texts[i].textContent.slice(0, 150);
    texts[i].textContent = txt + '...';
}

const swiper = new Swiper('.news_list', {
    loop: false,
    modules: [Navigation, Pagination],
    pagination: {
        el: '.swiper-pagination',
    },
    allowTouchMove: false,
    spaceBetween: 15,
    navigation: {
       nextEl: '.bnl',
       prevEl: '.bnr',
       disabledClass: 'nav-dis',
    },
    slidesPerView: 1,
    breakpoints: {
        1055: {
            slidesPerView: 3,
        },
        850: {
            slidesPerView: 2,
        }
    }
  });