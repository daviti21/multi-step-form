import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    pathMatch: 'full',
    path: '',
    redirectTo: '/your-info'
  },
  {path: 'your-info',
    loadComponent: () => import("./components/personal-info/personal-info").then(m => m.PersonalInfo)
  },
  {path: 'select-plan',
    loadComponent: () => import("./components/select-plan/select-plan").then(m => m.SelectPlan)
  },
  {
    path: 'add-ons',
    loadComponent: () => import("./components/add-ons/add-ons").then(m => m.AddOns)
  },
  {
    path: 'summary',
    loadComponent: () => import("./components/summary/summary").then(m => m.Summary)
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
