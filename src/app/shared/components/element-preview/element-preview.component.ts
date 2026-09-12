import { Component, Input } from '@angular/core';

import { CssStyle } from '../../../core/models/css-style';

@Component({
  selector: 'app-element-preview',
  standalone: true,
  templateUrl: './element-preview.component.html',
  styleUrl: './element-preview.component.scss',
})
export class ElementPreviewComponent {
  @Input({ required: true }) element!: string;
  @Input({ required: true }) styles!: CssStyle;
}