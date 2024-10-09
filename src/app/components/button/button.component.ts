// button.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ds-button',
  template: `
    <button [class]="'ds-button ' + variant" [disabled]="disabled">
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() disabled = false;
}