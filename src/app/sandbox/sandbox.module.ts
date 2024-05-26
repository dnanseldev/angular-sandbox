import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from '../shared/accordion/accordion.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from '../shared/button/button.component';

@NgModule({
  declarations: [AccordionComponent, ButtonComponent],
  imports: [CommonModule, BrowserAnimationsModule, FontAwesomeModule],
  exports: [AccordionComponent, ButtonComponent],
})
export class SandboxModule {}
