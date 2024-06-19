'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElem = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElem);

// video:
document.querySelector('.play-btn').addEventListener('click', function() {
    var video = document.querySelector('.video-card video');
    if (video.paused) {
      video.play();
      this.style.display = 'none';
    }
    // else if (video.play){
    //   video.pause();
    //   // this.style.display='none';
    // }
  });


  document.addEventListener('DOMContentLoaded', () => {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const items = document.querySelectorAll('.test-item');
    const itemList = document.querySelector('.test-list');
    
    let currentItem = 0;

    function updateItems() {
      items.forEach((item, index) => {
        item.classList.toggle('active', index === currentItem);
      });
    }

    // function updateItems() {
    //   const offset = -currentItem * 100;
    //   itemList.style.transform = `translateX(${offset}%)`;
    // }

    prevBtn.addEventListener('click', () => {
      currentItem = (currentItem === 0) ? items.length - 1 : currentItem - 1;
      updateItems();
    });

    nextBtn.addEventListener('click', () => {
      currentItem = (currentItem === items.length - 1) ? 0 : currentItem + 1;
      updateItems();
    });

    updateItems(); // Initialize the first active item
  });

