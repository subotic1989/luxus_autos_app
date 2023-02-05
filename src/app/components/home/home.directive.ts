import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appParallax]',
})
export class ParallaxDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    const targetElements =
      this.el.nativeElement.querySelectorAll('.home-parallax');

    targetElements.forEach((elm: HTMLElement) => {
      let speed: any = elm.getAttribute('data-speed');

      let x = (window.innerWidth - event.pageX * speed) / 90;
      let y = (window.innerHeight - event.pageY * speed) / 90;

      this.renderer.setStyle(
        elm,
        'transform',
        `translateX(${y}px) translateY(${x}px)`
      );
    });
  }
  @HostListener('mouseleave') onMouseLeave() {
    const targetElements =
      this.el.nativeElement.querySelectorAll('.home-parallax');
    targetElements.forEach((elm: HTMLElement) => {
      this.renderer.setStyle(
        elm,
        'transform',
        `translateX(0px) translateY(0px)`
      );
    });
  }
}
