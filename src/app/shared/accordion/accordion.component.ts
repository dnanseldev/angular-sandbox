import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const enterTransition = transition(':enter', [
  style({
    opacity: 0,
  }),
  animate('1s ease-in', style({ opacity: 1 })),
]);
/* const fadeIn = trigger('fadeIn', [enterTransition]);

const showMenu = trigger('showMenu', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(0.95)' }),
    animate(
      '150ms cubic-bezier(0, 0, 0.2, 1)',
      style({ opacity: 1, transform: 'scale(1)' })
    ),
  ]),
  transition(':leave', [
    animate(
      '100ms cubic-bezier(0.4, 0, 1, 1)',
      style({ opacity: 0, transform: 'scale(0.95)' })
    ),
  ]),
]); */

const toogle = trigger('toogle', [
  state(
    'close',
    style({
      height: '0',
      overflow: 'hidden',
      opacity: '0',
      visibility: 'hidden',
    })
  ),
  state(
    'open',
    style({
      overflow: 'hidden',
    })
  ),
  transition('open<=>close', animate('250ms')),
]);

const rotate = trigger('rotate', [
  state(
    'plane',
    style({
      transform: 'rotate(0)',
    })
  ),
  state(
    'rotated',
    style({
      transform: 'rotate(90deg)',
    })
  ),
  transition('plane<=>rotated', animate('250ms')),
]);
@Component({
  selector: 'stn-accordion',
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css',
  animations: [toogle, rotate],
})
export class AccordionComponent {
  faArrowRight = faArrowRight;

  show_content = false;

  ngOnInit(): void {}

  toggleContent() {
    this.show_content = !this.show_content;
  }
}
