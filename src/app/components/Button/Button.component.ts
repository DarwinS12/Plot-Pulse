import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `<button
    data-tooltip-style="light"
    aria-label="ariaLabel"
    class="absolute top-0 right-0 rounded-full bg-black/60"
    (click)="handleClick()"
  >
    <ng-content />
  </button>`,
})
export class ButtonComponent {
  @Input() Onclick!: (data: any) => void;

  @Input() data: any;

  @Input() ariLabel!: string;

  handleClick() {
    this.Onclick(this.data);
  }
}
