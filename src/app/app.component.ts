// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Design System Demo</h1>
    <ds-button>Primary Button</ds-button>
    <ds-button variant="secondary">Secondary Button</ds-button>
    <ds-button [disabled]="true">Disabled Button</ds-button>
  `,
  styles: []
})
export class AppComponent {}