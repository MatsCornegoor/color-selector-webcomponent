let colorSelectors = document.querySelectorAll('color-selector');
for (let i = 0; i < colorSelectors.length; i++) {
  colorSelectors[i].addEventListener('colorChange', event => {
    console.log(event.detail);
  });
}