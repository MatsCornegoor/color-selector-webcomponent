/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ColorSelector {
        "colors": string;
        "value": string;
    }
}
export interface ColorSelectorCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLColorSelectorElement;
}
declare global {
    interface HTMLColorSelectorElement extends Components.ColorSelector, HTMLStencilElement {
    }
    var HTMLColorSelectorElement: {
        prototype: HTMLColorSelectorElement;
        new (): HTMLColorSelectorElement;
    };
    interface HTMLElementTagNameMap {
        "color-selector": HTMLColorSelectorElement;
    }
}
declare namespace LocalJSX {
    interface ColorSelector {
        "colors"?: string;
        "onColorChange"?: (event: ColorSelectorCustomEvent<String>) => void;
        "value"?: string;
    }
    interface IntrinsicElements {
        "color-selector": ColorSelector;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "color-selector": LocalJSX.ColorSelector & JSXBase.HTMLAttributes<HTMLColorSelectorElement>;
        }
    }
}
