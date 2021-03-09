import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor( private el: ElementRef) {
  }

  // El elemento host (en este vaso el <p>) escucha cuando se hace hover con el mouse para resaltarse
  @HostListener('mouseenter') mouseHover(): void {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') mouseOut(): void {
    this.el.nativeElement.style.backgroundColor = null;
  }
}
