import { ElementRef, Renderer2 } from '@angular/core';
export declare class HideDirective {
    private _elementRef;
    private renderer;
    private _prevCondition;
    private _displayStyle;
    constructor(_elementRef: ElementRef, renderer: Renderer2);
    hide: boolean;
    private initDisplayStyle();
}
