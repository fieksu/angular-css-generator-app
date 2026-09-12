import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-element-selector',
  standalone: true,
  templateUrl: './element-selector.component.html',
  styleUrl: './element-selector.component.scss',
})
export class ElementSelectorComponent {
  constructor(private router: Router) {}

  selectElement(element: string): void {
    this.router.navigate(['/editor', element]);
  }
}
