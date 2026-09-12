import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CssStyle } from '../../../core/models/css-style';

@Component({
  selector: 'app-control-panel',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.scss',
})
export class ControlPanelComponent {
  @Input({ required: true }) element!: string;
  @Input({ required: true }) styles!: CssStyle;

  @Output() stylesChange = new EventEmitter<CssStyle>();

  get elementName(): string {
    switch (this.element) {
      case 'button':
        return 'Button';

      case 'input':
        return 'Input';

      case 'select':
        return 'Dropdown';

      case 'heading':
        return 'Heading';

      case 'paragraph':
        return 'Paragraph';

      default:
        return 'Element';
    }
  }

  updateStyles(): void {
    this.stylesChange.emit({
      ...this.styles,
    });
  }
}