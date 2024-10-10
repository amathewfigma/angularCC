import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Design System Demo</h1>
    
    <h2>Buttons</h2>
    <ds-button>Primary Button</ds-button>
    <ds-button variant="secondary">Secondary Button</ds-button>
    <ds-button [disabled]="true">Disabled Button</ds-button>
    
    <h2>Card</h2>
    <app-card [title]="'Sample Card'" [content]="'This is a sample card content.'"></app-card>
    
    <h2>Accordion</h2>
    <app-accordion [items]="accordionItems"></app-accordion>
  `,
  styles: [`
    h2 {
      margin-top: 20px;
    }
  `]
})
export class AppComponent {
  accordionItems = [
    { title: 'Section 1', content: 'Content for section 1' },
    { title: 'Section 2', content: 'Content for section 2' },
    { title: 'Section 3', content: 'Content for section 3' }
  ];
}