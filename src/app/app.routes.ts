import { Routes } from '@angular/router';
//import { FormViewer } from './formviewer/formviewer';

export const routes: Routes = [
  { path: '', 
    loadComponent: () => 
      import('./landingpage/landingpage').then((m) => m.LandingPage)  // Landing Page
  }, 
  { path: 'formviewer', 
    loadComponent: () => 
      import('./formviewer/formviewer').then(m => m.FormViewer)} // Besvara formulär sida 
];

