/******************************************
 *  Author : Steven G.   
 *  Created On : Wed Mar 20 2019
 *  File : app.js
 *******************************************/
// Toggle Menu Icon
const hamburgerIcon = document.querySelector('#hamburger-icon');
console.log(hamburgerIcon);

// Mobile Menu Items
const mobileLinksWrapper = document.querySelector('.mobileLinks-wrapper');
const closeIcon = "/img/sprite.svg#icon-cross";
const openIcon = '/img/sprite.svg#icon-menu';
const iconEl = hamburgerIcon.children[0];

// Function to Show/Hide Mobile Menu Items
const showMenu = (e) => {
    mobileLinksWrapper.classList.toggle('showMenu');
    if (mobileLinksWrapper.classList.contains('showMenu')) {
        iconEl.setAttribute('xlink:href', closeIcon);
    } else {
        iconEl.setAttribute('xlink:href', openIcon)
    }
}
hamburgerIcon.addEventListener('click', showMenu);

console.log(iconEl)