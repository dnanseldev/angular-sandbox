import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from '../shared/accordion/accordion.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from '../shared/button/button.component';
import { TestDirective } from './test.directive';

@NgModule({
  declarations: [AccordionComponent, ButtonComponent, TestDirective],
  imports: [CommonModule, BrowserAnimationsModule, FontAwesomeModule],
  exports: [AccordionComponent, ButtonComponent, TestDirective],
})
export class SandboxModule {}
