import { Routes } from '@angular/router';
import { appGuard } from './app.guard';

export const routes: Routes = [
  {
    pathMatch: 'full',
    path: '',
    redirectTo: '/your-info'
  },
  {path: 'your-info',
    loadComponent: () => import("./components/personal-info/personal-info").then(m => m.PersonalInfo),
   },
  {path: 'select-plan',
    loadComponent: () => import("./components/select-plan/select-plan").then(m => m.SelectPlan),
    canActivate: [appGuard]

  },
  {
    path: 'add-ons',
    loadComponent: () => import("./components/add-ons/add-ons").then(m => m.AddOns),
    canActivate: [appGuard]

  },
  {
    path: 'summary',
    loadComponent: () => import("./components/summary/summary").then(m => m.Summary),
    canActivate: [appGuard]
  },
  {
    path: 'thank-you',
    loadComponent: () => import("./components/thank-you/thank-you").then(m => m.ThankYou)
  },
  {
    path: '**',
    redirectTo: 'your-info'
  }
]
