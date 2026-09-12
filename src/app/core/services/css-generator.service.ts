import { Injectable } from '@angular/core';

import { CssStyle } from '../models/css-style';

@Injectable({
  providedIn: 'root',
})
export class CssGeneratorService {
  generateCss(element: string, styles: CssStyle): string {
    switch (element) {
      case 'button':
        return this.generateButtonCss(styles);

      case 'input':
        return this.generateInputCss(styles);

      case 'select':
        return this.generateSelectCss(styles);

      case 'heading':
        return this.generateHeadingCss(styles);

      case 'paragraph':
        return this.generateParagraphCss(styles);

      default:
        return '';
    }
  }

  private generateButtonCss(styles: CssStyle): string {
    return `.custom-button {
  width: ${styles.width}px;
  height: ${styles.height}px;
  background-color: ${styles.backgroundColor};
  color: ${styles.color};
  font-size: ${styles.fontSize}px;
  border-radius: ${styles.borderRadius}px;
  padding: ${styles.paddingVertical}px ${styles.paddingHorizontal}px;
  border: none;
  cursor: pointer;
}`;
  }

  private generateInputCss(styles: CssStyle): string {
    return `.custom-input {
  width: ${styles.width}px;
  height: ${styles.height}px;
  background-color: ${styles.backgroundColor};
  color: ${styles.color};
  font-size: ${styles.fontSize}px;
  border-radius: ${styles.borderRadius}px;
  padding: ${styles.paddingVertical}px ${styles.paddingHorizontal}px;
  border: 1px solid #d1d5db;
  box-sizing: border-box;
  outline: none;
}

.custom-input:focus {
  border-color: #2563eb;
}`;
  }

  private generateSelectCss(styles: CssStyle): string {
    return `.custom-select {
  width: ${styles.width}px;
  height: ${styles.height}px;
  background-color: ${styles.backgroundColor};
  color: ${styles.color};
  font-size: ${styles.fontSize}px;
  border-radius: ${styles.borderRadius}px;
  padding: ${styles.paddingVertical}px ${styles.paddingHorizontal}px;
  border: 1px solid #d1d5db;
  box-sizing: border-box;
  cursor: pointer;
  outline: none;
}`;
  }

  private generateHeadingCss(styles: CssStyle): string {
    return `.custom-heading {
  font-size: ${styles.fontSize}px;
  color: ${styles.color};
  background-color: ${styles.backgroundColor};
  border-radius: ${styles.borderRadius}px;
  padding: ${styles.paddingVertical}px ${styles.paddingHorizontal}px;
  margin: 0;
  font-weight: 700;
  line-height: 1.2;
}`;
  }

  private generateParagraphCss(styles: CssStyle): string {
    return `.custom-paragraph {
  font-size: ${styles.fontSize}px;
  color: ${styles.color};
  background-color: ${styles.backgroundColor};
  border-radius: ${styles.borderRadius}px;
  padding: ${styles.paddingVertical}px ${styles.paddingHorizontal}px;
  margin: 0;
  line-height: 1.6;
}`;
  }

  downloadCss(css: string, filename = 'generated-styles.css'): void {
    const blob = new Blob([css], {
      type: 'text/css',
    });

    const url = URL.createObjectURL(blob);

    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = filename;

    anchor.click();

    URL.revokeObjectURL(url);
  }
}
