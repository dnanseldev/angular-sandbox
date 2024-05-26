import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appTest]',
})
export class TestDirective implements OnInit, AfterViewInit {
  @Input('color-style') colorStyle = 'bg-red-200';
  @Input() test = '';

  constructor(private el: ElementRef, private render: Renderer2) {}
  ngOnInit(): void {
    //this.render.addClass(this.el.nativeElement, this.colorStyle);
    console.log(this.test);
  }

  ngAfterViewInit(): void {
    // console.log(this.render);
    console.log(this.el.nativeElement.classList);
    // console.log(this.el.nativeElement);

    this.render.addClass(this.el.nativeElement, this.colorStyle);
    //this.el.nativeElement.classList.toogle(this.colorStyle);
    //this.el.nativeElement.classList.toogle(this.colorStyle);
    //console.log(this.test);
  }

  @HostBinding('class.bg-slate-400') color = false;

  @HostListener('click')
  alertMsg() {
    //alert('Test');
    //console.log('I was clicked :)');
    this.color = !this.color;
  }
}
