import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elementRef: ElementRef,
    private renderer: Renderer2) { }

  private highlight(color: string, backgroundColor: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', color);
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', backgroundColor);
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight('royalblue', 'rgba(36, 33, 33, 0.041)');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight('initial', 'initial');
  }

}
