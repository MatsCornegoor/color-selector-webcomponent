## Color Selector Web Component
This is a simple customizable color selector component build with stencil.js.

## Installation

### Node Modules
Install the component using npm.
```
npm install color-selector-webcomponent --save
```
Import the module in your main.js file.
```javascript
import {defineCustomElements} from 'color-selector-webcomponent/loader';
defineCustomElements(window);
```
To import the module with polyfills, use this instead.
```javascript
import {applyPolyfills, defineCustomElements} from 'color-selector-webcomponent/loader';
applyPolyfills().then(() => {
   defineCustomElements(window);
});
```

### CDN
A simple way to try the selector is by adding a CDN to your header. 
``` html
<script type="module" src="https://unpkg.com/color-selector-webcomponent/dist/colorselector/colorselector.esm.js"><script>
<script nomodule src="https://unpkg.com/color-selector-webcomponent/dist/colorselector/colorselector.js"></script>
```


## Usage

### Html component
```html component
 <color-selector colors="#F4DB7D,#1A2238,#FF6A3D,#9DAAF2" value="#1A2238"></color-selector>
```

### Javascript Event Listener
```javascript
let colorSelectors = document.querySelectorAll("color-selector");
for(let i = 0; i < colorSelectors.length; i++){
    colorSelectors[i].addEventListener('colorChange', event => { console.log(event.detail) });
}
```

### CSS Custom Properties
To customize, define the following CSS variables in your application:
-   --selector-background
-   --selector-border
-   --selector-border-radius
-   --selector-width
-   --selector-padding
-   --color-size
-   --color-border