import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CssStyle } from '../../core/models/css-style';
import { CssGeneratorService } from '../../core/services/css-generator.service';

import { ControlPanelComponent } from '../../shared/components/control-panel/control-panel.component';
import { ElementPreviewComponent } from '../../shared/components/element-preview/element-preview.component';

@Component({
  selector: 'app-css-editor',
  standalone: true,
  imports: [
    ControlPanelComponent,
    ElementPreviewComponent,
  ],
  templateUrl: './css-editor.component.html',
  styleUrl: './css-editor.component.scss',
})
export class CssEditorComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private cssGenerator = inject(CssGeneratorService);

  element = this.route.snapshot.paramMap.get('element') ?? 'button';

  styles: CssStyle = {
    text: 'Click Me',
    width: 160,
    height: 48,
    fontSize: 16,
    backgroundColor: '#2563eb',
    color: '#ffffff',
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 12,
  };

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

  get elementDescription(): string {
    switch (this.element) {
      case 'button':
        return 'Customize your button and export the CSS.';

      case 'input':
        return 'Customize your input field and export the CSS.';

      case 'select':
        return 'Customize your dropdown and export the CSS.';

      case 'heading':
        return 'Customize your heading and export the CSS.';

      case 'paragraph':
        return 'Customize your paragraph and export the CSS.';

      default:
        return 'Customize your element and export the CSS.';
    }
  }

  updateStyles(styles: CssStyle): void {
    this.styles = styles;
  }

  exportCss(): void {
    const css = this.cssGenerator.generateCss(
      this.element,
      this.styles
    );

    this.cssGenerator.downloadCss(
      css,
      `generated-${this.element}.css`
    );
  }

  goBack(): void {
    this.router.navigate(['/elements']);
  }
}
