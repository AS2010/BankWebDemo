const btn__text = document.querySelector(".btn--text");
const section__header = document.querySelector("#section--1");
const nav__links = document.querySelector(".nav__links");
const nav__link = document.querySelectorAll(".nav__link");
const operations__tab = document.querySelectorAll(".operations__tab");
const operations__tab_container = document.querySelector(".operations__tab-container");
const operations__content = document.querySelectorAll(".operations__content");
const nav = document.querySelector(".nav");
const nav__logo = document.querySelector('.nav__logo');
const header = document.querySelector(".header");





// **** smooth scrolling ******//\

btn__text.addEventListener('click', function (e) {
    section__header.scrollIntoView({ behavior: 'smooth' })
    console.log(section__header)
});

// **** smoooth scrolling of navigation buttons *********//

nav__links.addEventListener('click', function (e) {
    let atr = e.target;
    if (atr.classList.contains("nav__link")) {
        let reference = document.querySelector(atr.getAttribute('href'));
        reference.scrollIntoView({ behavior: 'smooth' });
    };

})



//* animative view page on every element */ $$ viewing clicked content by each button below

operations__tab_container.addEventListener('click', function (tab) {
    target = tab.target.closest('.operations__tab');
    if (!target) return;
    operations__tab.forEach(el => el.classList.remove("operations__tab--active"))
    operations__content.forEach(el => el.classList.remove("operations__content--active"));
    target.classList.add("operations__tab--active")
    document.querySelector(`.operations__content--${target.dataset.tab}`).classList.add("operations__content--active");
})


// *********** element fading in header navigation ******//

const handleover = function (e) {
    if (e.target.classList.contains('nav__link')) {
        link = e.target;
        siblings = e.target.closest('.nav').querySelectorAll('.nav__link');
        logo = e.target.closest('.nav__logo');

        siblings.forEach(el => {
            if (el !== link) {
                el.style.opacity = this
            };
        })
        nav__logo.style.opacity = this
    };

}


// * fixed header after some particular section ?? here, after the header title *// 


nav.addEventListener('mouseover', handleover.bind(0.5))
nav.addEventListener('mouseout', handleover.bind(1))

const StickyNav = function (entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) nav.classList.add("sticky");
    else nav.classList.remove('sticky');
};

const headerobserver = new IntersectionObserver(StickyNav, {
    root: null,
    threshold: 0,

});

headerobserver.observe(header);


// *******smooth transition of every section**********//


const allsections = document.querySelectorAll(".section");
const revealsection = function (entries, observe) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section--hidden");
    sectionobserver.unobserve(entry.target)


}
const sectionobserver = new IntersectionObserver(revealsection, {
    root: null,
    threshold: 0.2,

})

allsections.forEach(el => {
    el.classList.add("section--hidden");
    sectionobserver.observe(el)
})
// * lazy image for webpage performance **

const lazyimages = document.querySelectorAll('img[data-src]');

const Lazy_Image = function (entries, observe) {
    [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener('load', function () {
        entry.target.classList.remove("lazy-img")
    })
    lazy_image_observer.unobserve(entry.target)

}

const lazy_image_observer = new IntersectionObserver(Lazy_Image, {
    root: null,
    threshold: 0,
});

lazyimages.forEach(el => lazy_image_observer.observe(el))


// ********** slider for testinomials ******//

const slider = document.querySelector(".slider");
const slide = document.querySelectorAll(".slide");
const slider__btn__left = document.querySelector(".slider__btn--left");
const slider__btn__right = document.querySelector(".slider__btn--right");
let curslide = 0;

slide.forEach((s, i) => {

    s.style.transform = `translateX(${100 * Math.abs(i)}%)`;

});
const slidefunc = function (sl) {
    slide.forEach((s, i) => {

        s.style.transform = `translateX(${100 * (i - sl)}%)`;

    })
}

slider__btn__right.addEventListener("click", function () {
    if (curslide == slide.length - 1) {
        curslide = 0;
    } else {
        curslide++
    }
    slidefunc(curslide);
})

slider__btn__left.addEventListener("click", function () {
    if (curslide == 0) {
        curslide = slide.length - 1;
    } else {
        curslide--
    }
    slidefunc(curslide);
});


// ********** nav bar smooth scrolling *******//















