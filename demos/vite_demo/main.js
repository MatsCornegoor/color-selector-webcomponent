import {applyPolyfills, defineCustomElements} from 'color-selector-webcomponent/loader';
applyPolyfills().then(() => {
   defineCustomElements(window);
});

// import {defineCustomElements} from 'color-selector-webcomponent/loader';
// defineCustomElements(window);


let colorSelectors = document.querySelectorAll('color-selector');
for (let i = 0; i < colorSelectors.length; i++) {
  colorSelectors[i].addEventListener('colorChange', event => {
    console.log(event.detail);
  });
}