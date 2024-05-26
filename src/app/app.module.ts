import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SandboxModule } from './sandbox/sandbox.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, SandboxModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
