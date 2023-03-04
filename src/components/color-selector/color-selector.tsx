import { Component, Element, Prop, h } from '@stencil/core';
import { Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'color-selector',
  styleUrl: 'color-selector.css',
  shadow: true,
})
export class ColorSelector {

  @Element() el: HTMLElement;
  @Prop({mutable: true, reflect: true }) value: string;
  @Prop() colors: string;
  @Event() colorChange: EventEmitter<String>;


  selectColor(color:string){
    this.value = color;
    let colors = this.el.shadowRoot.querySelector('.colors')
    colors.classList.remove("colorsOpen");
    this.colorChange.emit(color);
  }

  toggle(){
    let colors = this.el.shadowRoot.querySelector('.colors');
    let open = this.el.shadowRoot.querySelector('.colorsOpen');

    if(open == null){
      colors.classList.add("colorsOpen");
    } else {
      colors.classList.remove("colorsOpen");
    }
  }

  render() {
    let colorArray = this.colors.split(",");
  
    return (
      <div>
        <div 
          class="colorSelector" 
          style={{backgroundColor: this.value}}

          // https://reactjs.org/docs/faq-functions.html
          // bind this element to acces the shadow root
          onClick = {this.toggle.bind(this)}
        ></div>



        <div class="colors">
          {colorArray.map((color, i) =>
              <div class="color" key={i} style={{backgroundColor: color}} onClick ={this.selectColor.bind(this, color)}></div>
          )}
        </div>
      </div>
    );
    
  }

}
