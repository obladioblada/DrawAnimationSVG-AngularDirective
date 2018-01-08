import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';



@Directive({
  selector: '[appDrawAnimation]'
})
export class DrawAnimationDirective implements OnInit{

   paths: any[] = [];
   ellipses: any[] = [];
   @Input() fillTime = 1;
   @Input() fillDelay = 2;
   @Input() drawTime = 1;
   @Input() drawDelay = 0;


  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
      this.paths = this.elementRef.nativeElement.querySelectorAll('path');
      for (let i = 0 ; i < this.paths.length ; i++) {

           length = this.paths[i].getTotalLength();
            // Save the color of the fill attribute for each path
            // Set all the fill attribute to none
            this.renderer.setStyle(this.paths[i], 'fill-opacity', '0' );
            // Clear any previous transition
            this.renderer.setStyle(this.paths[i], 'transition', 'none');
            this.renderer.setStyle(this.paths[i], 'WebkitTransition', 'none');
            // Set up the starting positions
            this.renderer.setStyle(this.paths[i], 'strokeDasharray', length + ' ' + length);
            this.renderer.setStyle(this.paths[i], 'strokeDashoffset', length );
            // Trigger a layout so styles are calculated & the browser
            // picks up the starting position before animating
            this.paths[i].getBoundingClientRect();
            // Define our transition
            this.renderer.setStyle(this.paths[i], 'transition',
              'stroke-dashoffset ' + this.drawTime + 's ease-in-out ' + this.drawDelay + 's,' +
                    ' fill-opacity ' + this.fillTime + 's ease-in-out ' + this.fillDelay + 's');
            this.renderer.setStyle(this.paths[i], 'WebkitTransition',
              'stroke-dashoffset ' + this.drawTime + 's ease-in-out ' + this.drawDelay + 's,' +
                    ' fill-opacity ' + this.fillTime + 's ease-in-out ' + this.fillDelay + 's');
            console.log(this.paths[i].style.transitionDuration);
            // Go!
            this.renderer.setStyle(this.paths[i], 'strokeDashoffset', 0 );
            this.renderer.setStyle(this.paths[i], 'fill-opacity', '1' );
            }

      this.ellipses = this.paths = this.elementRef.nativeElement.querySelectorAll('ellipse');
  }

}
