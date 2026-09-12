import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'elements',
    pathMatch: 'full',
  },
  {
    path: 'elements',
    loadComponent: () =>
      import('./features/element-selector/element-selector.component')
        .then((m) => m.ElementSelectorComponent),
  },
  {
    path: 'editor/:element',
    loadComponent: () =>
      import('./features/css-editor/css-editor.component')
        .then((m) => m.CssEditorComponent),
  },
  {
    path: '**',
    redirectTo: 'elements',
  },
];