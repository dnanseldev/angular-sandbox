import { animate, style, transition, trigger } from '@angular/animations';
import {

  Component,

  OnInit,

} from '@angular/core';

const enterTransition = transition(':enter', [
  style({
    opacity: 0,
  }),
  animate('1s ease-in', style({ opacity: 1 })),
]);
const fadeIn = trigger('fadeIn', [enterTransition]);

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
]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeIn],
})
export class AppComponent implements OnInit {
  show_content = false;

  ngOnInit(): void { }

  toggleContent() {
    this.show_content = !this.show_content;
  }
}
