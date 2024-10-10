// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { AccordionComponent } from './components/accordion/accordion.component';

@NgModule({
  declarations: [AppComponent, ButtonComponent, CardComponent, AccordionComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }