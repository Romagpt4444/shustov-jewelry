'use strict';

// Progressive enhancement: keep keyboard focus on the destination of the skip link.
// Navigation and all contact links work without JavaScript.
const skipLink = document.querySelector('.skip');
const main = document.querySelector('#main');
if (skipLink && main) {
  skipLink.addEventListener('click', () => {
    main.setAttribute('tabindex', '-1');
    main.focus({ preventScroll: true });
  });
}
