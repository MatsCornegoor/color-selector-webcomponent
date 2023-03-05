## Color Selector Web Component
This is a simple customizable color selector component build with stencil.

## Installation

### Script tag
The easiest way to add the selector to your website is by adding a CDN to your header. 
```
    <script type="module" src="https://unpkg.com/color-selector-webcomponent/dist/colorselector/colorselector.esm.js"><script>
    <script nomodule src="https://unpkg.com/color-selector-webcomponent/dist/colorselector/colorselector.js"></script>
```

### Node Modules
- Run `npm install color-selector-webcomponent --save`
- Put a script tag similar to this `<script src='node_modules/color-selector-webcomponent/dist/colorselector/colorselector.esm.js></script>` in the head of your index.html
- Then you can use the element anywhere in your template


## Usage

```html
 <color-selector colors="#F4DB7D,#1A2238,#FF6A3D,#9DAAF2" value="#1A2238"></color-selector>
```

To customize, define the following CSS variables in your application:
-   --selector-background
-   --selector-border
-   --selector-border-radius
-   --selector-width
-   --selector-padding
-   --color-size
-   --color-border